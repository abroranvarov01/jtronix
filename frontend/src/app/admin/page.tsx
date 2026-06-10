"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./admin.css";
import ImageUpload from "@/components/ImageUpload";
import { API_URL } from "@/lib/api";
import { getToken, getUser, authHeaders, logout } from "@/lib/auth";

/* ===================== TYPES ===================== */

interface Product {
	id: string;
	nameUz: string;
	nameRu: string;
	nameEn: string;
	descriptionUz: string;
	descriptionRu: string;
	descriptionEn: string;
	brand: string[];
	type: string;
	image: string;
	costPrice: number;
	sellPrice: number;
	wholesalePrice: number;
	ownerId?: string;
	owner?: { id: string; name: string };
}

interface Category {
	id: string;
	name: string;
	slug: string;
	image: string;
	order: number;
}

/* ===================== STATIC ===================== */

const BRANDS = [
	{ value: "kwangshin", label: "Kwangshin" },
	{ value: "tianyi", label: "Tianyi" },
	{ value: "sichuan", label: "Sichuan" },
	{ value: "tianchen", label: "Tianchen" },
	{ value: "farnova", label: "Farnova" },
	{ value: "aspro", label: "Aspro" },
	{ value: "graf", label: "Graf" },
];

const EMPTY_PRODUCT = {
	nameUz: "", nameRu: "", nameEn: "",
	descriptionUz: "", descriptionRu: "", descriptionEn: "",
	brand: [] as string[],
	type: "",
	image: "",
	costPrice: 0,
	sellPrice: 0,
	wholesalePrice: 0,
};

const EMPTY_CATEGORY = { name: "", slug: "", image: "", order: 0 };

type Lang = "uz" | "ru" | "en";
const LANG_LABELS: Record<Lang, string> = { uz: "O'zbek", ru: "Русский", en: "English" };

/* ===================== COMPONENT ===================== */

export default function AdminPage() {
	const router = useRouter();

	const [user, setUser] = useState<{ id: string; email: string; role: string } | null>(null);
	const [activeTab, setActiveTab] = useState<"products" | "categories">("products");
	const [activeLang, setActiveLang] = useState<Lang>("uz");

	// Products
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [form, setForm] = useState(EMPTY_PRODUCT);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Categories
	const [catForm, setCatForm] = useState(EMPTY_CATEGORY);
	const [editingCatId, setEditingCatId] = useState<string | null>(null);
	const [catSubmitting, setCatSubmitting] = useState(false);
	const [catError, setCatError] = useState<string | null>(null);
	const [catPreview, setCatPreview] = useState("");
	const [catLoading, setCatLoading] = useState(false);

	/* ---- auth check ---- */
	useEffect(() => {
		const token = getToken();
		const u = getUser();
		if (!token || !u) {
			router.push("/login");
			return;
		}
		setUser(u);
	}, [router]);

	/* ---- loaders ---- */
	async function loadProducts() {
		setLoading(true);
		try {
			const res = await fetch(`${API_URL}/products/full`, { headers: authHeaders() });
			if (res.status === 401) { router.push("/login"); return; }
			setProducts(await res.json());
		} catch { setError("Yuklab bo'lmadi"); }
		finally { setLoading(false); }
	}

	async function loadCategories() {
		setCatLoading(true);
		try {
			const res = await fetch(`${API_URL}/categories`);
			setCategories(await res.json());
		} catch { setCatError("Yuklab bo'lmadi"); }
		finally { setCatLoading(false); }
	}

	useEffect(() => {
		if (user) { loadProducts(); loadCategories(); }
	}, [user]);

	/* ---- product CRUD ---- */
	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setSubmitting(true);
		setError(null);
		try {
			const url = editingId ? `${API_URL}/products/${editingId}` : `${API_URL}/products`;
			const method = editingId ? "PATCH" : "POST";
			const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify(form) });
			if (res.status === 401) { router.push("/login"); return; }
			const data = await res.json();
			if (!res.ok) { setError(data.message ?? "Xatolik"); return; }
			setForm(EMPTY_PRODUCT);
			setEditingId(null);
			await loadProducts();
		} catch { setError("Server xatosi"); }
		finally { setSubmitting(false); }
	}

	async function handleDelete(id: string) {
		if (!confirm("O'chirishni tasdiqlaysizmi?")) return;
		await fetch(`${API_URL}/products/${id}`, { method: "DELETE", headers: authHeaders() });
		await loadProducts();
	}

	function startEdit(p: Product) {
		setEditingId(p.id);
		setForm({
			nameUz: p.nameUz, nameRu: p.nameRu, nameEn: p.nameEn,
			descriptionUz: p.descriptionUz, descriptionRu: p.descriptionRu, descriptionEn: p.descriptionEn,
			brand: p.brand, type: p.type, image: p.image,
			costPrice: p.costPrice, sellPrice: p.sellPrice, wholesalePrice: p.wholesalePrice,
		});
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function cancelEdit() {
		setEditingId(null);
		setForm(EMPTY_PRODUCT);
	}

	/* ---- category CRUD ---- */
	async function handleCatSubmit(e: FormEvent) {
		e.preventDefault();
		setCatSubmitting(true);
		setCatError(null);
		try {
			const url = editingCatId ? `${API_URL}/categories/${editingCatId}` : `${API_URL}/categories`;
			const method = editingCatId ? "PATCH" : "POST";
			const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify(catForm) });
			if (res.status === 401) { router.push("/login"); return; }
			const data = await res.json();
			if (!res.ok) { setCatError(data.message ?? "Xatolik"); return; }
			setCatForm(EMPTY_CATEGORY);
			setCatPreview("");
			setEditingCatId(null);
			await loadCategories();
		} catch { setCatError("Server xatosi"); }
		finally { setCatSubmitting(false); }
	}

	async function handleCatDelete(id: string) {
		if (!confirm("Kategoriyani o'chirishni tasdiqlaysizmi?")) return;
		await fetch(`${API_URL}/categories/${id}`, { method: "DELETE", headers: authHeaders() });
		await loadCategories();
	}

	function startCatEdit(cat: Category) {
		setEditingCatId(cat.id);
		setCatForm({ name: cat.name, slug: cat.slug, image: cat.image, order: cat.order });
		setCatPreview(cat.image);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function cancelCatEdit() {
		setEditingCatId(null);
		setCatForm(EMPTY_CATEGORY);
		setCatPreview("");
	}

	/* ---- helpers ---- */
	function handleLogout() {
		logout();
		router.push("/login");
	}

	const isAdmin = user?.role === "ADMIN";

	// Для отображения: dealer видит только свои товары, admin — все
	const visibleProducts = isAdmin
		? products
		: products.filter((p) => p.ownerId === user?.id);

	if (!user) return null;

	/* ============================== RENDER ============================== */
	return (
		<div className="admin-wrapper">
			<header className="admin-header">
				<div className="admin-header-left">
					<div className="admin-logo">
						<img src="/favicon.png" alt="Logo" className="admin-logo-img" />
					</div>
					<div>
						<h1 className="admin-title">Admin Panel</h1>
						<p className="admin-subtitle">
							{user.email} · {user.role === "ADMIN" ? "Administrator" : "Diller"}
						</p>
					</div>
				</div>
				<button className="btn-logout" onClick={handleLogout}>Chiqish →</button>
			</header>

			{/* Tabs */}
			<div className="admin-tabs">
				<button className={`admin-tab${activeTab === "products" ? " active" : ""}`} onClick={() => setActiveTab("products")}>
					📦 Mahsulotlar
				</button>
				{isAdmin && (
					<button className={`admin-tab${activeTab === "categories" ? " active" : ""}`} onClick={() => setActiveTab("categories")}>
						🗂 Kategoriyalar
					</button>
				)}
			</div>

			{/* =================== PRODUCTS TAB =================== */}
			{activeTab === "products" && (
				<div className="admin-grid">
					<section className="admin-card">
						<div className="card-label">
							{editingId ? "✏️ Tahrirlash" : "＋ Yangi mahsulot"}
						</div>

						{/* Language tabs */}
						<div className="lang-tabs">
							{(["uz", "ru", "en"] as Lang[]).map((l) => (
								<button key={l} className={`lang-tab${activeLang === l ? " active" : ""}`} onClick={() => setActiveLang(l)}>
									{LANG_LABELS[l]}
								</button>
							))}
						</div>

						<form className="admin-form" onSubmit={handleSubmit}>
							{/* Name per language */}
							<div className="field-group">
								<label className="field-label">Nomi ({LANG_LABELS[activeLang]})</label>
								<input
									type="text"
									className="field-input"
									placeholder={`Mahsulot nomi (${activeLang})`}
									value={(form as any)[`name${activeLang.charAt(0).toUpperCase() + activeLang.slice(1)}`]}
									onChange={(e) => {
										const key = `name${activeLang.charAt(0).toUpperCase() + activeLang.slice(1)}`;
										setForm((prev) => ({ ...prev, [key]: e.target.value }));
									}}
									required={activeLang === "uz"}
								/>
							</div>

							{/* Description per language */}
							<div className="field-group">
								<label className="field-label">Tavsif ({LANG_LABELS[activeLang]})</label>
								<textarea
									className="field-input field-textarea"
									placeholder={`Tavsif (${activeLang})`}
									rows={3}
									value={(form as any)[`description${activeLang.charAt(0).toUpperCase() + activeLang.slice(1)}`]}
									onChange={(e) => {
										const key = `description${activeLang.charAt(0).toUpperCase() + activeLang.slice(1)}`;
										setForm((prev) => ({ ...prev, [key]: e.target.value }));
									}}
								/>
							</div>

							{/* Brands + Category */}
							<div className="field-row">
								<div className="field-group">
									<label className="field-label">Brend</label>
									<div className="checkbox-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
										{BRANDS.map((b) => (
											<label key={b.value} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
												<input
													type="checkbox"
													checked={form.brand.includes(b.value)}
													onChange={(e) => {
														const checked = e.target.checked;
														setForm((prev) => ({
															...prev,
															brand: checked ? [...prev.brand, b.value] : prev.brand.filter((x) => x !== b.value),
														}));
													}}
												/>
												{b.label}
											</label>
										))}
									</div>
								</div>
								<div className="field-group">
									<label className="field-label">Kategoriya</label>
									<select className="field-input" value={form.type} onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))} required>
										<option value="">— tanlang —</option>
										{categories.map((c) => (
											<option key={c.id} value={c.slug}>{c.name}</option>
										))}
									</select>
								</div>
							</div>

							{/* Prices */}
							<div className="field-group">
								<label className="field-label">Narxlar (USD)</label>
								<div className="price-row">
									<div className="price-field">
										<label>Tannarx</label>
										<input type="number" step="0.01" min="0" className="field-input" value={form.costPrice || ""} placeholder="0.00"
											onChange={(e) => setForm((p) => ({ ...p, costPrice: Number(e.target.value) }))} />
									</div>
									<div className="price-field">
										<label>Sotuv narxi</label>
										<input type="number" step="0.01" min="0" className="field-input" value={form.sellPrice || ""} placeholder="0.00"
											onChange={(e) => setForm((p) => ({ ...p, sellPrice: Number(e.target.value) }))} required />
									</div>
									<div className="price-field">
										<label>Optom narx</label>
										<input type="number" step="0.01" min="0" className="field-input" value={form.wholesalePrice || ""} placeholder="0.00"
											onChange={(e) => setForm((p) => ({ ...p, wholesalePrice: Number(e.target.value) }))} />
									</div>
								</div>
							</div>

							{/* Image */}
							<div className="field-group">
								<label className="field-label">Rasm</label>
								<ImageUpload
									value={form.image}
									onChange={(path) => setForm((p) => ({ ...p, image: path }))}
									onError={(msg) => setError(msg)}
								/>
							</div>

							{error && <div className="error-banner">⚠ {error}</div>}

							<div className="form-actions">
								<button type="submit" className="btn-primary" disabled={submitting}>
									{submitting ? "Saqlanmoqda..." : editingId ? "✓ Yangilash" : "+ Qo'shish"}
								</button>
								{editingId && (
									<button type="button" className="btn-cancel" onClick={cancelEdit}>Bekor qilish</button>
								)}
							</div>
						</form>
					</section>

					{/* Products list */}
					<section className="admin-card">
						<div className="card-label">
							📦 Mahsulotlar <span className="count-badge">{visibleProducts.length}</span>
						</div>
						{loading ? (
							<div className="loading-state"><div className="spinner" /><span>Yuklanmoqda...</span></div>
						) : visibleProducts.length === 0 ? (
							<div className="empty-state">Mahsulotlar yo&#39;q</div>
						) : (
							<div className="product-list">
								{visibleProducts.map((p) => (
									<div key={p.id} className={`admin-product${editingId === p.id ? " is-editing" : ""}`}>
										{p.image ? (
											<img src={p.image} alt="" style={{ width: 44, height: 44, objectFit: "cover", borderRadius: 8 }} />
										) : (
											<div className="product-icon">📦</div>
										)}
										<div className="product-info">
											<span className="product-name">{p.nameUz || p.nameRu || p.nameEn}</span>
											<span className="product-meta">
												${p.sellPrice} · {categories.find((c) => c.slug === p.type)?.name || p.type}
												{p.owner && ` · ${p.owner.name}`}
											</span>
										</div>
										<div className="product-actions">
											<button className="btn-edit" onClick={() => startEdit(p)}>✏</button>
											<button className="btn-delete" onClick={() => handleDelete(p.id)}>✕</button>
										</div>
									</div>
								))}
							</div>
						)}
					</section>
				</div>
			)}

			{/* =================== CATEGORIES TAB (admin only) =================== */}
			{activeTab === "categories" && isAdmin && (
				<div className="admin-grid">
					<section className="admin-card">
						<div className="card-label">
							{editingCatId ? "✏️ Kategoriyani tahrirlash" : "＋ Yangi kategoriya"}
						</div>
						<form className="admin-form" onSubmit={handleCatSubmit}>
							<div className="field-group">
								<label className="field-label">Nomi</label>
								<input type="text" className="field-input" placeholder="Masalan: Klapanlar" value={catForm.name}
									onChange={(e) => setCatForm((p) => ({ ...p, name: e.target.value }))} required />
							</div>
							<div className="field-group">
								<label className="field-label">Slug</label>
								<input type="text" className="field-input" placeholder="Masalan: klapanlar" value={catForm.slug}
									onChange={(e) => setCatForm((p) => ({ ...p, slug: e.target.value }))} required />
								<span style={{ fontSize: 12, color: "#94a3b8" }}>Lotin harflari, raqamlar va _</span>
							</div>
							<div className="field-group">
								<label className="field-label">Tartib</label>
								<input type="number" className="field-input" value={catForm.order} min={0}
									onChange={(e) => setCatForm((p) => ({ ...p, order: Number(e.target.value) }))} />
							</div>
							<div className="field-group">
								<label className="field-label">Banner rasmi</label>
								<ImageUpload value={catForm.image}
									onChange={(path) => { setCatForm((p) => ({ ...p, image: path })); setCatPreview(path); }}
									onError={(msg) => setCatError(msg)} />
							</div>
							{catPreview && <div className="preview-box"><img src={catPreview} alt="" className="preview-img" /></div>}
							{catError && <div className="error-banner">⚠ {catError}</div>}
							<div className="form-actions">
								<button type="submit" className="btn-primary" disabled={catSubmitting}>
									{catSubmitting ? "Saqlanmoqda..." : editingCatId ? "✓ Yangilash" : "+ Qo'shish"}
								</button>
								{editingCatId && <button type="button" className="btn-cancel" onClick={cancelCatEdit}>Bekor qilish</button>}
							</div>
						</form>
					</section>

					<section className="admin-card">
						<div className="card-label">🗂 Kategoriyalar <span className="count-badge">{categories.length}</span></div>
						{catLoading ? (
							<div className="loading-state"><div className="spinner" /><span>Yuklanmoqda...</span></div>
						) : categories.length === 0 ? (
							<div className="empty-state">Kategoriyalar yo&#39;q</div>
						) : (
							<div className="product-list">
								{categories.map((cat) => (
									<div key={cat.id} className={`admin-product${editingCatId === cat.id ? " is-editing" : ""}`}>
										{cat.image ? (
											<img src={cat.image} alt={cat.name} style={{ width: 44, height: 44, objectFit: "cover", borderRadius: 8 }} />
										) : (
											<div className="product-icon">🗂</div>
										)}
										<div className="product-info">
											<span className="product-name">{cat.name}</span>
											<span className="product-meta">slug: {cat.slug} · tartib: {cat.order}</span>
										</div>
										<div className="product-actions">
											<button className="btn-edit" onClick={() => startCatEdit(cat)}>✏</button>
											<button className="btn-delete" onClick={() => handleCatDelete(cat.id)}>✕</button>
										</div>
									</div>
								))}
							</div>
						)}
					</section>
				</div>
			)}
		</div>
	);
}
