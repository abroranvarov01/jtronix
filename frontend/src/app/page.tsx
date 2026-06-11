"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ApplicationForm } from "@/components/ApplicationForm";
import CategoryBanner from "@/components/CategoryBanner";
import { useT } from "@/lib/i18n";
import "./home.css";

export default function Home() {
	const t = useT();

	return (
		<>
			<Navbar />
			<header className="hero">

				<div className="hero-content">
					<img src="/img/compressor.png" className="hero-img" alt="Compressor" />
					<h1>{t("hero_title")}</h1>
					<p>{t("hero_sub")}</p>
					<a href="#contacts" className="btn">📞 {t("hero_btn")}</a>
				</div>
				<div className="stats">
					<div><strong>10+</strong><span>{t("hero_exp")}</span></div>
					<div><strong>500+</strong><span>{t("hero_clients")}</span></div>
					<div><strong>24/7</strong><span>{t("hero_support")}</span></div>
				</div>

			</header>

			<CategoryBanner />

			<section id="about" className="about">
				<div className="about-wrapper">
					<div className="about-left">
						<h2>{t("about_title")}</h2>
						<p>{t("about_p1")}</p>
						<p>{t("about_p2")}</p>
						<p>{t("about_p3")}</p>
						<Link href="#cta" className="about-btn">
							{t("about_offer")}
						</Link>
					</div>

					<div className="about-right">
						<div className="info-box">
							<div className="info-icon">🎧</div>
							<h3>24/7</h3>
							<span>{t("about_support")}</span>
						</div>
						<div className="info-box">
							<div className="info-icon">📦</div>
							<h3>500+</h3>
							<span>{t("about_projects")}</span>
						</div>
						<div className="info-box">
							<div className="info-icon">📅</div>
							<h3>10+</h3>
							<span>{t("about_experience")}</span>
						</div>
					</div>
				</div>
			</section>

			<section className="solutions">
				<h2>{t("solutions_title")}</h2>
				<div className="solutions-grid">
					<div className="solution-card">
						<div className="solution-icon">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M3 12H21M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<h3>{t("sol1_title")}</h3>
						<p>{t("sol1_desc")}</p>
					</div>

					<div className="solution-card">
						<div className="solution-icon">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M14 7L10 17M7 14L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<h3>{t("sol2_title")}</h3>
						<p>{t("sol2_desc")}</p>
					</div>

					<div className="solution-card">
						<div className="solution-icon">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M4 15V11C4 7.13 7.13 4 11 4H13C16.87 4 20 7.13 20 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<h3>{t("sol3_title")}</h3>
						<p>{t("sol3_desc")}</p>
					</div>
				</div>
			</section>

			<section id="process" className="process">
				<h2>{t("process_title")}</h2>
				<div className="process-grid">
					<div className="process-step">
						<div className="step-number">01</div>
						<h3>{t("step1_title")}</h3>
						<p>{t("step1_desc")}</p>
					</div>
					<div className="process-step">
						<div className="step-number">02</div>
						<h3>{t("step2_title")}</h3>
						<p>{t("step2_desc")}</p>
					</div>
					<div className="process-step">
						<div className="step-number">03</div>
						<h3>{t("step3_title")}</h3>
						<p>{t("step3_desc")}</p>
					</div>
					<div className="process-step">
						<div className="step-number">04</div>
						<h3>{t("step4_title")}</h3>
						<p>{t("step4_desc")}</p>
					</div>
				</div>
			</section>

			<section id="projects" className="projects">
				<h2>{t("projects_title")}</h2>
				<p className="projects-sub">{t("projects_sub")}</p>
				<div className="projects-grid">
					<div className="project-card">
						<div className="project-image">
							<img src="/img/1.png" alt="project" />
						</div>
						<h3>{t("proj1_title")}</h3>
						<p>{t("proj1_desc")}</p>
					</div>
					<div className="project-card">
						<div className="project-image">
							<img src="/img/2.png" alt="project" />
						</div>
						<h3>{t("proj2_title")}</h3>
						<p>{t("proj2_desc")}</p>
					</div>
					<div className="project-card">
						<div className="project-image">
							<img src="/img/3.png" alt="project" />
						</div>
						<h3>{t("proj3_title")}</h3>
						<p>{t("proj3_desc")}</p>
					</div>
				</div>
			</section>

			<section id="cta" className="cta">
				<div className="cta-content">
					<h2>{t("cta_title")}</h2>
					<p className="cta-sub">{t("cta_sub")}</p>

					<ApplicationForm />

					<div className="cta-trust">
						<div>⚡ {t("cta_trust1")}</div>
						<div>🔒 {t("cta_trust2")}</div>
						<div>📞 {t("cta_trust3")}</div>
					</div>
				</div>
			</section>

			<section className="faq">
				<h2>{t("faq_title")}</h2>
				<div className="faq-grid">
					<div className="faq-item">
						<h3>{t("faq1_q")}</h3>
						<p>{t("faq1_a")}</p>
					</div>
					<div className="faq-item">
						<h3>{t("faq2_q")}</h3>
						<p>{t("faq2_a")}</p>
					</div>
					<div className="faq-item">
						<h3>{t("faq3_q")}</h3>
						<p>{t("faq3_a")}</p>
					</div>
					<div className="faq-item">
						<h3>{t("faq4_q")}</h3>
						<p>{t("faq4_a")}</p>
					</div>
				</div>
			</section>

			<section id="contacts" className="contacts">
				<h2>{t("contacts_title")}</h2>
				<div className="contacts-wrapper">
					<div className="contacts-info">
						<h3>{t("contacts_reach")}</h3>
						<br />
						<p><strong>{t("contacts_phone")}:</strong> +998 98 011 33 44</p>
						<p><strong>Email:</strong> petronixtechnologies@gmail.com</p>
						<p><strong>{t("contacts_address")}:</strong> {t("contacts_addr_val")}</p>
						<a href="https://t.me/Petronix_admin" target="_blank" rel="noreferrer" className="contact-btn">
							💬 {t("contacts_tg")}
						</a>

						<div className="social-links">
							<a href="https://t.me/petronix_technologies" target="_blank" rel="noreferrer" className="social-icon">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
								</svg>
							</a>
							<a href="https://instagram.com/petronix_technologies" target="_blank" rel="noreferrer" className="social-icon">
								<svg viewBox="0 0 24 24" fill="none">
									<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
									<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
									<circle cx="17" cy="7" r="1.5" fill="currentColor" />
								</svg>
							</a>
						</div>
					</div>

					<div className="contacts-map">
						<iframe
							src="https://yandex.ru/map-widget/v1/?ll=69.283510%2C41.232154&z=16&pt=69.283510,41.232154,pm2rdm"
							width="100%"
							height="350"
							frameBorder="0"
							style={{ borderRadius: "20px" }}
							title="Yandex Map"
						></iframe>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="footer-container">
					<div className="footer-brand">
						<img src="/img/logo.png" alt="Petronix Logo" />
						<p>{t("footer_desc")}</p>
					</div>

					<div className="footer-nav">
						<h4>{t("footer_nav")}</h4>
						<Link href="#about">{t("footer_about")}</Link>
						<Link href="#process">{t("footer_solutions")}</Link>
						<Link href="#projects">{t("footer_projects")}</Link>
						<Link href="/products">{t("nav_products")}</Link>
					</div>

					<div className="footer-contacts">
						<h4>{t("contacts_title")}</h4>
						<p>📍 {t("contacts_addr_val")}</p>
						<p>📞 +998 98 011 33 44</p>
						<p>✉ petronixtechnologies@gmail.com</p>

						<div className="footer-socials">
							<a href="https://t.me/petronix_technologies" target="_blank" rel="noreferrer" className="social-icon">
								<svg viewBox="0 0 24 24">
									<path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" stroke="currentColor" strokeWidth="2" fill="none" />
								</svg>
							</a>
							<a href="https://instagram.com/petronix_technologies" target="_blank" rel="noreferrer" className="social-icon">
								<svg viewBox="0 0 24 24">
									<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
									<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
									<circle cx="17" cy="7" r="1.5" fill="currentColor" />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					© 2026 Petronix Technologies. {t("footer_copy")}
				</div>
			</footer>
		</>
	);
}
