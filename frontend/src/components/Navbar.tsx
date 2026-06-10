"use client";

import Link from "next/link";
import { useState } from "react";
import { useT } from "@/lib/i18n";
import LangSwitcher from "@/components/LangSwitcher";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const t = useT();

	return (
		<nav className="navbar">
			<Link href="/" className="brand">
				<img src="/img/logo.png" alt="Logo" />
				<div className="brand-text">
					<span className="brand-name">Petronix</span>
					<span className="brand-sub">Technologies</span>
				</div>
			</Link>

			<div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
				<Link href="/products">{t("nav_products")}</Link>
				<Link href="/#about">{t("nav_about")}</Link>
				<Link href="/#contacts">{t("nav_contacts")}</Link>
				<a href="tel:+998980113344" className="nav-btn">
					📞 {t("nav_call")}
				</a>
			</div>

			<LangSwitcher />

			<div
				className={`burger ${isMenuOpen ? "active" : ""}`}
				onClick={() => setIsMenuOpen((v) => !v)}
			>
				<span />
				<span />
				<span />
			</div>
		</nav>
	);
}
