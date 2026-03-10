"use client";

// app/admin/page.tsx
import { useState, useEffect, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import "./admin.css";
import ImageUpload from "@/components/ImageUpload";

interface Product {
	id: string;
	name: string;
	description: string;
	brand: string;
	type: string;
	image: string;
	createdAt?: string;
}

const BRANDS = [
	{ value: "kwangshin", label: "Kwangshin" },
	{ value: "tianyi", label: "Tianyi" },
	{ value: "sichuan", label: "Sichuan" },
	{ value: "tianchen", label: "Tianchen" },
	{ value: "farnova", label: "Farnova" },
];

const TYPES = [
	{ value: "compressor", label: "Kompressor" },
	{ value: "valve", label: "Klapan" },
	{ value: "electro", label: "Elektro" },
	{ value: "flow", label: "Rashodomer" },
	{ value: "regulator", label: "Regulyator" },
	{ value: "piston", label: "Porshen" },
	{ value: "seal", label: "Muhr" },
	{ value: "hose", label: "Shlang" },
];

const EMPTY = {
	name: "", description: "", brand: "kwangshin", type: "compressor", image: "",
};

const TYPE_ICONS: Record<string, string> = {
	compressor: "⚙️", valve: "🔧", electro: "⚡", flow: "💧",
	regulator: "🎛️", piston: "🔩", seal: "🛡️", hose: "🌀",
};

export default function AdminPage() {
	const router = useRouter();
	const fileRef = useRef<HTMLInputElement>(null);

	const [products, setProducts] = useState<Product[]>([]);
	const [form, setForm] = useState(EMPTY);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [preview, setPreview] = useState<string>("");

	async function load() {
		setLoading(true);
		try {
			const res = await fetch("/api/products");
			const data = await res.json();
			setProducts(data);
		} catch {
			setError("Yuklab bo'lmadi");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => { load(); }, []);

	async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;
		setUploading(true);
		setError(null);
		const fd = new FormData();
		fd.append("file", file);
		const res = await fetch("/api/upload", { method: "POST", body: fd });
		const data = await res.json();
		if (!res.ok) {
			setError(data.error ?? "Yuklashda xatolik");
		} else {
			setForm((prev) => ({ ...prev, image: data.path }));
			setPreview(data.path);
		}
		setUploading(false);
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setSubmitting(true);
		setError(null);
		try {
			const url = editingId ? `/api/products/${editingId}` : "/api/products";
			const method = editingId ? "PUT" : "POST";
			const res = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (res.status === 401) { router.push("/admin/login"); return; }
			const data = await res.json();
			if (!res.ok) { setError(data.error ?? "Xatolik"); return; }
			setForm(EMPTY);
			setPreview("");
			setEditingId(null);
			if (fileRef.current) fileRef.current.value = "";
			await load();
		} catch {
			setError("Server bilan bog'lanishda xatolik");
		} finally {
			setSubmitting(false);
		}
	}

	async function handleDelete(id: string) {
		if (!confirm("O'chirishni tasdiqlaysizmi?")) return;
		const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
		if (res.status === 401) { router.push("/admin/login"); return; }
		await load();
	}

	function startEdit(p: Product) {
		setEditingId(p.id);
		setForm({ name: p.name, description: p.description, brand: p.brand, type: p.type, image: p.image });
		setPreview(p.image);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function cancelEdit() {
		setEditingId(null);
		setForm(EMPTY);
		setPreview("");
		if (fileRef.current) fileRef.current.value = "";
	}

	async function handleLogout() {
		await fetch("/api/auth/logout", { method: "POST" });
		router.push("/admin/login");
	}

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	return (
		<div className="admin-wrapper">

			<header className="admin-header">
				<div className="admin-header-left">
					<div className="admin-logo">
						<img src="/favicon.png" alt="Logo" className="admin-logo-img" />
					</div>
					<div>
						<h1 className="admin-title">Admin Panel</h1>
						<p className="admin-subtitle">Mahsulotlarni boshqarish</p>
					</div>
				</div>
				<button className="btn-logout" onClick={handleLogout}>
					Chiqish →
				</button>
			</header>

			<div className="admin-grid">

				{/* Form Card */}
				<section className="admin-card">
					<div className="card-label">
						{editingId ? "✏️ Tahrirlash rejimi" : "＋ Yangi mahsulot"}
					</div>

					<form className="admin-form" onSubmit={handleSubmit}>

						<div className="field-group">
							<label className="field-label">Mahsulot nomi</label>
							<input
								type="text"
								name="name"
								className="field-input"
								placeholder="Masalan: KS-250 Kompressor"
								value={form.name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="field-group">
							<label className="field-label">Tavsif</label>
							<input
								type="text"
								name="description"
								className="field-input"
								placeholder="Qisqacha tavsif..."
								value={form.description}
								onChange={handleChange}
							/>
						</div>

						<div className="field-row">
							<div className="field-group">
								<label className="field-label">Brend</label>
								<select name="brand" className="field-input" value={form.brand} onChange={handleChange}>
									{BRANDS.map(b => (
										<option key={b.value} value={b.value}>{b.label}</option>
									))}
								</select>
							</div>
							<div className="field-group">
								<label className="field-label">Turi</label>
								<select name="type" className="field-input" value={form.type} onChange={handleChange}>
									{TYPES.map(t => (
										<option key={t.value} value={t.value}>{t.label}</option>
									))}
								</select>
							</div>
						</div>

						<div className="field-group">
							<label className="field-label">Rasm</label>
							<ImageUpload
								value={form.image}
								onChange={(path) => setForm(prev => ({ ...prev, image: path }))}
								onError={(msg) => setError(msg)}
							/>
						</div>

						{preview && (
							<div className="preview-box">
								<img src={preview} alt="preview" className="preview-img" />
							</div>
						)}

						{error && (
							<div className="error-banner">⚠ {error}</div>
						)}

						<div className="form-actions">
							<button type="submit" className="btn-primary" disabled={submitting}>
								{submitting ? "Saqlanmoqda..." : editingId ? "✓ Yangilash" : "+ Qo'shish"}
							</button>
							{editingId && (
								<button type="button" className="btn-cancel" onClick={cancelEdit}>
									Bekor qilish
								</button>
							)}
						</div>

					</form>
				</section>

				{/* Products list */}
				<section className="admin-card">
					<div className="card-label">
						📦 Mahsulotlar
						<span className="count-badge">{products.length}</span>
					</div>

					{loading ? (
						<div className="loading-state">
							<div className="spinner" />
							<span>Yuklanmoqda...</span>
						</div>
					) : products.length === 0 ? (
						<div className="empty-state">Hech qanday mahsulot yo&#39;q</div>
					) : (
						<div className="product-list">
							{products.map((p) => (
								<div key={p.id} className={`admin-product${editingId === p.id ? " is-editing" : ""}`}>
									<div className="product-icon">
										{TYPE_ICONS[p.type] ?? "📦"}
									</div>
									<div className="product-info">
										<span className="product-name">{p.name}</span>
										<span className="product-meta">{p.brand} · {p.type}</span>
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
		</div>
	);
}