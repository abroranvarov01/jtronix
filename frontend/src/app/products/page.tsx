"use client";

import { Suspense, useState, useEffect, useRef, useMemo } from "react";
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
	return p.nameUz || p.nameRu || p.nameEn;
}

function getDesc(p: Product, lang: Lang): string {
	if (lang === "ru" && p.descriptionRu) return p.descriptionRu;
	if (lang === "en" && p.descriptionEn) return p.descriptionEn;
	return p.descriptionUz || p.descriptionRu || p.descriptionEn;
}

/* ========================= PRODUCT CARD ========================= */

function ProductCard({ product, lang, orderLabel, onOrder }: {
	product: Product; lang: Lang; orderLabel: string; onOrder: () => void;
}) {
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
				<div className="pcard-actions">
					<button className="pcard-buy" onClick={onOrder}>{orderLabel}</button>
				</div>
			</div>
		</div>
	);
}

/* ========================= CATALOG MEGA PANEL ========================= */

function CatalogPanel({
	categories, products, lang, selectedType, onSelect, onClose,
}: {
	categories: Category[];
	products: Product[];
	lang: Lang;
	selectedType: string | null;
	onSelect: (slug: string | null) => void;
	onClose: () => void;
}) {
	const [hoveredSlug, setHoveredSlug] = useState<string | null>(
		selectedType ?? (categories[0]?.slug ?? null)
	);

	const previewProducts = useMemo(() =>
		products.filter((p) => p.type === hoveredSlug).slice(0, 9),
		[products, hoveredSlug]
	);

	return (
		<div className="cat-mega-panel">
			{/* Left: categories list */}
			<div className="cat-mega-left">
				{categories.map((cat) => (
					<button
						key={cat.id}
						className={`cat-mega-item${hoveredSlug === cat.slug ? " hovered" : ""}${selectedType === cat.slug ? " active" : ""}`}
						onMouseEnter={() => setHoveredSlug(cat.slug)}
						onClick={() => { onSelect(cat.slug); onClose(); }}
					>
						{cat.name}
					</button>
				))}
			</div>

			{/* Divider */}
			<div className="cat-mega-divider" />

			{/* Right: preview products for hovered category */}
			<div className="cat-mega-right">
				{previewProducts.length > 0 ? (
					<div className="cat-mega-grid">
						{previewProducts.map((p) => (
							<button
								key={p.id}
								className="cat-mega-product"
								onClick={() => { onSelect(hoveredSlug); onClose(); }}
							>
								{p.image ? (
									<img src={imgUrl(p.image)} alt={getName(p, lang)} className="cat-mega-img" />
								) : (
									<div className="cat-mega-img-ph" />
								)}
								<span className="cat-mega-name">{getName(p, lang)}</span>
							</button>
						))}
					</div>
				) : (
					<p className="cat-mega-empty">—</p>
				)}
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
	const [catalogOpen, setCatalogOpen] = useState(false);
	const catalogRef = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		function onClickOutside(e: MouseEvent) {
			if (catalogRef.current && !catalogRef.current.contains(e.target as Node)) {
				setCatalogOpen(false);
			}
		}
		document.addEventListener("mousedown", onClickOutside);
		return () => document.removeEventListener("mousedown", onClickOutside);
	}, []);

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

			{/* ── Top search bar ── */}
			<div className="catalog-topbar-wrap" ref={catalogRef}>
				<div className="catalog-topbar">
					{/* Catalog button */}
					<button
						className={`cat-btn${catalogOpen ? " open" : ""}`}
						onClick={() => setCatalogOpen((v) => !v)}
					>
						{catalogOpen ? (
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						) : (
							<svg width="18" height="14" viewBox="0 0 18 14" fill="none">
								<rect y="0" width="18" height="2.5" rx="1.25" fill="currentColor"/>
								<rect y="5.75" width="13" height="2.5" rx="1.25" fill="currentColor"/>
								<rect y="11.5" width="9" height="2.5" rx="1.25" fill="currentColor"/>
							</svg>
						)}
						<span>{t("prod_categories")}</span>
					</button>

					{/* Search input */}
					<div className="cat-searchbox">
						<svg className="cat-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.8"/>
							<path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
						</svg>
						<input
							type="text"
							className="cat-search-input"
							placeholder={t("prod_search")}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					{/* Search button */}
					<button className="cat-search-btn" onClick={() => setCatalogOpen(false)}>
						{t("prod_search_btn") || "Поиск"}
					</button>
				</div>

				{/* Mega panel */}
				{catalogOpen && categories.length > 0 && (
					<CatalogPanel
						categories={categories}
						products={products}
						lang={lang}
						selectedType={selectedType}
						onSelect={setSelectedType}
						onClose={() => setCatalogOpen(false)}
					/>
				)}
			</div>

			{/* ── Active filter chip ── */}
			{activeCategory && (
				<div className="catalog-filter-chip-row">
					<div className="catalog-filter-chip">
						{activeCategory.name}
						<button className="catalog-filter-chip-x" onClick={() => setSelectedType(null)}>×</button>
					</div>
				</div>
			)}

			{/* ── Products grid ── */}
			<div className="catalog-content">
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
								orderLabel={t("prod_order")}
								onOrder={() => handleOrder(p)}
							/>
						))
					)}
				</div>
			</div>
		</>
	);
}
