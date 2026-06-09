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
	brand: string[];
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
	{ value: "aspro", label: "Aspro" },
	{ value: "graf", label: "Graf" },
];

const CATEGORY_GROUPS = [
	{
		groupName: "Klapanlar",
		items: [
			{ value: "valves_in_out", label: "Klapanlar (kirish / chiqish)" },
			{ value: "valves_check", label: "Obratniy klapanlar" },
			{ value: "valves_safety", label: "Predoxranitel klapanlar" },
		]
	},
	{
		groupName: "Porshen va Mexanika",
		items: [
			{ value: "piston_parts", label: "Porshin, Shtok, Shatun, Gilzalar" },
			{ value: "plates", label: "Plastinkalar" },
			{ value: "inserts", label: "Vkladishlar" },
			{ value: "keriskop_pins", label: "Keriskop Paleclar" },
			{ value: "piston_rings", label: "Porshin kolcalar" },
			{ value: "copper_rings", label: "Medniy kolcalar" },
		]
	},
	{
		groupName: "Muhrlar va Qistirmalar",
		items: [
			{ value: "seal_rubbers", label: "Salnik Rezinkalar" },
			{ value: "gaskets", label: "Prokladkalar" },
			{ value: "seal_blocks_cups", label: "Salnik blok va chashkalari" },
		]
	},
	{
		groupName: "O'lchov va Nazorat",
		items: [
			{ value: "manometers", label: "Manometrlar" },
			{ value: "pressure_sensors", label: "Datchik Davleniyalar" },
			{ value: "temp_controllers", label: "Harorat Nazoratchilari" },
			{ value: "gas_detectors", label: "Gaz Detektorlarlar" },
			{ value: "measuring_devices", label: "O‘lchash qurilmalari" },
			{ value: "amperator", label: "Amperator" },
			{ value: "thermostat", label: "Termostat" },
			{ value: "column_meters", label: "Kalonka schyotchiklari" },
		]
	},
	{
		groupName: "Ulanish va Fitinglar",
		items: [
			{ value: "cranes", label: "Kranlar" },
			{ value: "fittings", label: "Fitinglar" },
			{ value: "hoses_connections", label: "Shlanglar, shtucerlar" },
		]
	},
	{
		groupName: "Elektr va Avtomatika",
		items: [
			{ value: "actuators_solenoids", label: "Aktivator, Solenoidlar" },
			{ value: "magnetic_starters", label: "Magnitniy puskatellar" },
			{ value: "electronics_psu", label: "Klaviatura, Plata, Blok" },
		]
	},
	{
		groupName: "Nasoslar va Boshqa",
		items: [
			{ value: "repair_kits", label: "Remkoplektlar" },
			{ value: "filters", label: "Filtirlar" },
			{ value: "lube_pump", label: "Moylash nasosi" },
			{ value: "cooling_system", label: "Sovutish tizimi" },
			{ value: "antifreeze_pumps", label: "Antifrizniy nasoslar" },
		]
	}
];

/* =========================
   PRODUCT CARD
========================= */

interface ProductCardProps {
	product: Product;
	onClick: () => void;
	onOrder: () => void;
}

function ProductCard({ product, onClick, onOrder }: ProductCardProps) {
	const [isOrdering, setIsOrdering] = useState(false);

	const handleOrderClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOrdering(true);
		onOrder();
		setIsOrdering(false);
	};

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
					onClick={handleOrderClick}
				>
					{isOrdering ? "Yuborilmoqda..." : "Buyurtma berish"}
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
			<div className="sidebar-group">
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
			</div>

			<button type="button" className="filter-btn reset-btn" onClick={onReset} style={{ marginTop: "10px", width: "100%" }}>
				Barchasini tozalash
			</button>

			<h3 style={{ marginTop: "25px", marginBottom: "15px" }}>Ehtiyot qismlar</h3>
			<div className="sidebar-accordion">
				{CATEGORY_GROUPS.map((group) => (
					<details
						key={group.groupName}
						className="filter-details"
						open={group.items.some(i => i.value === selectedType)}
					>
						<summary className="filter-summary">{group.groupName}</summary>
						<div className="filter-details-content">
							{group.items.map((type) => (
								<button
									key={type.value}
									type="button"
									className={`filter-btn slim-btn${selectedType === type.value ? " active" : ""}`}
									onClick={() => onTypeSelect(type.value)}
								>
									{type.label}
								</button>
							))}
						</div>
					</details>
				))}
			</div>
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
            // Обновленная логика для массива брендов:
            const brandMatch =
                !selectedBrand || 
                (Array.isArray(product.brand) ? product.brand.includes(selectedBrand) : product.brand === selectedBrand);

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
		// router.push(`/product-detail?id=${product.id}`);
	};

	const handleOrder = async (product: Product) => {
		const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USER_NAME;

		const message =
			`Assalomu alaykum! Mahsulot bo'yicha so'rov:
🛍 Mahsulot: ${product.name}
Iltimos, mavjudligini tasdiqlang.`;

		const telegramUrl = `https://t.me/${adminUsername}?text=${encodeURIComponent(message)}`;
		window.open(telegramUrl, "_blank");
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
										onOrder={() => handleOrder(product)}
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