import Link from "next/link";
import { useState } from "react";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="navbar">
			<Link href="/" className="brand">
				<img src="/img/logo.png" alt="Logo" />
				<div className="brand-text">
					<span className="brand-name">JTRONIX</span>
					<span className="brand-sub">Technologies</span>
				</div>
			</Link>

			<div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
				<Link href="/products">Mahsulotlar</Link>
				<Link href="/#about">Biz haqimizda</Link>
				<Link href="/#contacts">Kontaktlar</Link>
				<a href="tel:+998980113344" className="nav-btn">
					📞 Bog'lanish
				</a>
			</div>

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