"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";

/* =========================
   TYPES
========================= */

interface Product {
	id: string | number;
	name: string;
	description: string;
	image: string;
	brand: string;
	type: string;
}

/* =========================
   FILTER CONFIG
========================= */

const BRANDS = [
	{ value: "kwangshin", label: "Kwangshin" },
	{ value: "tianyi", label: "Tianyi" },
	{ value: "sichuan", label: "Sichuan" },
	{ value: "tianchen", label: "Tianchen" },
	{ value: "farnova", label: "Farnova" },
];

const TYPES = [
	{ value: "compressor", label: "Kompressor" },
	{ value: "valve", label: "Klapanlar" },
	{ value: "electro", label: "Elektro uskunalar" },
	{ value: "flow", label: "Rashodomer" },
	{ value: "regulator", label: "Regulyator" },
	{ value: "piston", label: "Porshen" },
	{ value: "seal", label: "Muhrlar" },
	{ value: "hose", label: "Shlanglar" },
];

/* =========================
   PRODUCT CARD
========================= */

interface ProductCardProps {
	product: Product;
	onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
	return (
		<div className="product-card" onClick={onClick} role="button" tabIndex={0}>
			<div className="product-image">
				<img src={product.image} alt={product.name} />
			</div>

			<div className="product-info">
				<h4 className="product-title">{product.name}</h4>
				<p className="product-desc">{product.description}</p>

				<button
					className="product-btn"
					onClick={(e) => {
						e.stopPropagation();
						// handle inquiry
					}}
				>
					Buyurtma berish
				</button>
			</div>
		</div>
	);
}

/* =========================
   SIDEBAR
========================= */

interface SidebarProps {
	selectedBrand: string | null;
	selectedType: string | null;
	onBrandSelect: (brand: string) => void;
	onTypeSelect: (type: string) => void;
	onReset: () => void;
}

function Sidebar({
	selectedBrand,
	selectedType,
	onBrandSelect,
	onTypeSelect,
	onReset,
}: SidebarProps) {
	return (
		<aside className="catalog-sidebar">
			<h3>Kompressorlar</h3>

			{BRANDS.map((brand) => (
				<button
					key={brand.value}
					type="button"
					className={`filter-btn${selectedBrand === brand.value ? " active" : ""}`}
					onClick={() => onBrandSelect(brand.value)}
				>
					{brand.label}
				</button>
			))}

			<button
				type="button"
				className="filter-btn reset-btn"
				onClick={onReset}
			>
				Barchasi
			</button>

			<h3>Ehtiyot qismlar</h3>

			{TYPES.map((type) => (
				<button
					key={type.value}
					type="button"
					className={`filter-btn${selectedType === type.value ? " active" : ""}`}
					onClick={() => onTypeSelect(type.value)}
				>
					{type.label}
				</button>
			))}
		</aside>
	);
}

/* =========================
   CATALOG PAGE
========================= */

export default function CatalogPage() {
	const router = useRouter();

	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	/* Load products */
	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then((data: Product[]) => {
				setAllProducts(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	/* Filter & search */
	const filteredProducts = useMemo(() => {
		return allProducts.filter((product) => {
			const brandMatch =
				!selectedBrand || product.brand === selectedBrand;
			const typeMatch =
				!selectedType || product.type === selectedType;
			const searchMatch =
				!searchQuery ||
				product.name.toLowerCase().includes(searchQuery.toLowerCase());

			return brandMatch && typeMatch && searchMatch;
		});
	}, [allProducts, selectedBrand, selectedType, searchQuery]);

	/* Handlers */
	const handleBrandSelect = (brand: string) => {
		setSelectedBrand((prev) => (prev === brand ? null : brand));
	};

	const handleTypeSelect = (type: string) => {
		setSelectedType((prev) => (prev === type ? null : type));
	};

	const handleReset = () => {
		setSelectedBrand(null);
		setSelectedType(null);
		setSearchQuery("");
	};

	const handleCardClick = (product: Product) => {
		router.push(`/product-detail?id=${product.id}`);
	};

	return (
		<>
			<Navbar />

			{/* PAGE HEADER */}
			<section className="products-header">
				<div className="products-header-content">
					<h1>Kompressorlar va Ehtiyot qismlar katalogi</h1>
					<p>
						CNG gaz zapravka stansiyalari uchun professional uskunalar va
						original ehtiyot qismlar
					</p>
				</div>
			</section>

			{/* CATALOG SECTION */}
			<section className="catalog-section">
				<div className="catalog-container">

					<Sidebar
						selectedBrand={selectedBrand}
						selectedType={selectedType}
						onBrandSelect={handleBrandSelect}
						onTypeSelect={handleTypeSelect}
						onReset={handleReset}
					/>

					<div className="catalog-right">
						<input
							type="text"
							className="catalog-search"
							placeholder="Mahsulot qidirish..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>

						<div id="productsContainer" className="products-grid">
							{loading ? (
								<p>Yuklanmoqda...</p>
							) : filteredProducts.length === 0 ? (
								<p>Mahsulotlar topilmadi.</p>
							) : (
								filteredProducts.map((product) => (
									<ProductCard
										key={product.id}
										product={product}
										onClick={() => handleCardClick(product)}
									/>
								))
							)}
						</div>
					</div>

				</div>
			</section>
		</>
	);
}