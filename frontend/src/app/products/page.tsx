"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { API_URL, imgUrl } from "@/lib/api";
import { useLang, useT } from "@/lib/i18n";
import "./products.css";
import type { Lang } from "@/lib/i18n";

/* ========================= TYPES ========================= */

interface Product {
	id: string;
	nameUz: string;
	nameRu: string;
	nameEn: string;
	descriptionUz: string;
	descriptionRu: string;
	descriptionEn: string;
	image: string;
	brand: string[];
	type: string;
	sellPrice: number;
	owner?: { id: string; name: string };
}

interface Category {
	id: string;
	name: string;
	slug: string;
}

/* ========================= HELPERS ========================= */

const USD_TO_UZS = 13000;

function formatUZS(usd: number): string {
	const sum = Math.round(usd * USD_TO_UZS);
	return sum.toLocaleString("uz-UZ") + " UZS";
}

function getName(p: Product, lang: Lang): string {
	if (lang === "ru" && p.nameRu) return p.nameRu;
	if (lang === "en" && p.nameEn) return p.nameEn;
	return p.nameUz || p.nameRu || p.nameEn || "";
}

function getDesc(p: Product, lang: Lang): string {
	if (lang === "ru" && p.descriptionRu) return p.descriptionRu;
	if (lang === "en" && p.descriptionEn) return p.descriptionEn;
	return p.descriptionUz || p.descriptionRu || p.descriptionEn || "";
}

/* ========================= PRODUCT CARD ========================= */

function ProductCard({ product, lang, onOrder }: {
	product: Product; lang: Lang; onOrder: () => void;
}) {
	const t = useT();
	const desc = getDesc(product, lang);

	return (
		<div className="pcard">
			<div className="pcard-img-wrap">
				{product.image ? (
					<img src={imgUrl(product.image)} alt={getName(product, lang)} className="pcard-img" />
				) : (
					<div className="pcard-img-placeholder" />
				)}
			</div>
			<div className="pcard-body">
				<h4 className="pcard-name">{getName(product, lang)}</h4>
				{product.sellPrice > 0 && (
					<p className="pcard-price">{formatUZS(product.sellPrice)}</p>
				)}
				{desc && <p className="pcard-desc">{desc}</p>}
				<div className="pcard-actions">
					<button className="pcard-buy" onClick={onOrder}>{t("prod_order")}</button>
					<button className="pcard-details">{t("prod_details") || "Подробнее"}</button>
				</div>
			</div>
		</div>
	);
}

/* ========================= CATALOG PAGE ========================= */

export default function CatalogPageWrapper() {
	return (
		<Suspense fallback={<><Navbar /><div style={{ textAlign: "center", padding: "80px 20px", color: "#64748b" }}>...</div></>}>
			<CatalogPage />
		</Suspense>
	);
}

function CatalogPage() {
	const searchParams = useSearchParams();
	const { lang } = useLang();
	const t = useT();

	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);

	const [selectedType, setSelectedType] = useState<string | null>(searchParams.get("type"));
	const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

	useEffect(() => {
		Promise.all([
			fetch(`${API_URL}/products`).then((r) => r.json()),
			fetch(`${API_URL}/categories`).then((r) => r.json()),
		])
			.then(([prods, cats]) => { setProducts(prods); setCategories(cats); })
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		setSelectedType(searchParams.get("type"));
		setSearchQuery(searchParams.get("q") || "");
	}, [searchParams]);

	const filtered = useMemo(() => {
		return products.filter((p) => {
			const typeOk = !selectedType || p.type === selectedType;
			const q = searchQuery.toLowerCase();
			const searchOk = !q ||
				getName(p, lang).toLowerCase().includes(q) ||
				getDesc(p, lang).toLowerCase().includes(q);
			return typeOk && searchOk;
		});
	}, [products, selectedType, searchQuery, lang]);

	const activeCategory = categories.find((c) => c.slug === selectedType);

	const handleOrder = (product: Product) => {
		const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USER_NAME;
		const msg = `Assalomu alaykum! Mahsulot bo'yicha so'rov:\n🛍 ${getName(product, "uz")}\n💰 ${formatUZS(product.sellPrice)}`;
		window.open(`https://t.me/${adminUsername}?text=${encodeURIComponent(msg)}`, "_blank");
	};

	return (
		<>
			<Navbar />

			<div className="catalog-page">
				{/* Left: category list */}
				<aside className="catalog-aside">
					<h3 className="catalog-aside-title">{t("prod_categories")}</h3>
					<button
						className={`cat-link${!selectedType ? " active" : ""}`}
						onClick={() => setSelectedType(null)}
					>
						{t("prod_all")}
					</button>
					{categories.map((cat) => (
						<button
							key={cat.id}
							className={`cat-link${selectedType === cat.slug ? " active" : ""}`}
							onClick={() => setSelectedType(cat.slug)}
						>
							{cat.name}
						</button>
					))}
				</aside>

				{/* Right: products */}
				<main className="catalog-main">
					<div className="catalog-toprow">
						<h2 className="catalog-heading">
							{activeCategory ? activeCategory.name : t("prod_all_products")}
						</h2>
					</div>

					{/* Search */}
					<div className="catalog-search-row">
						<input
							type="text"
							className="catalog-search-input"
							placeholder={t("prod_search")}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					{/* Grid */}
					<div className="catalog-grid">
						{loading ? (
							<p className="catalog-status">{t("prod_loading")}</p>
						) : filtered.length === 0 ? (
							<p className="catalog-status">{t("prod_empty")}</p>
						) : (
							filtered.map((p) => (
								<ProductCard
									key={p.id}
									product={p}
									lang={lang}
									onOrder={() => handleOrder(p)}
								/>
							))
						)}
					</div>
				</main>
			</div>
		</>
	);
}
