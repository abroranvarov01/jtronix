"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Опционально: можно заменить <img> на <Image> для оптимизации
import { Navbar } from "@/components/Navbar";
import { ApplicationForm } from "@/components/ApplicationForm";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<Navbar />
			<header className="hero">

				<div className="hero-content">
					<img src="/img/compressor.png" className="hero-img" alt="Compressor" />
					<h1>Petronix CNG SOLUTIONS</h1>
					<p>Metan (CNG) zapravka stansiyalari uchun professional yechimlar</p>
					<a href="#contacts" className="btn">📞 Bog‘lanish</a>
				</div>
				<div className="stats">
					<div><strong>10+</strong><span>yillik tajriba</span></div>
					<div><strong>500+</strong><span>mijozlar</span></div>
					<div><strong>24/7</strong><span>qo‘llab-quvvatlash</span></div>
				</div>



			</header>

			<section id="about" className="about">
				<div className="about-wrapper">
					{/* Левая часть */}
					<div className="about-left">
						<h2>Kompaniya haqida</h2>
						<p>
							Petronix — metan (CNG) zapravka stansiyalari uchun sanoat uskunalari
							va butlovchi qismlar yetkazib beruvchi kompaniya. Biz kompressorlar,
							filtratsiya tizimlari, ehtiyot qismlar va CNG obyektlarini qurish,
							modernizatsiya qilish hamda xizmat ko‘rsatish uchun texnik yechimlar
							yetkazib berishga ixtisoslashganmiz.
						</p>
						<p>
							Kompaniyamiz sanoat korxonalari va zapravka stansiyalari egalari
							bilan ishlaydi, uskunalarning barqaror yetkazib berilishi va tezkor
							texnik yordamni ta’minlaydi. Biz CNG stansiyalarining ishlash
							xususiyatlarini yaxshi tushunamiz va uskunalarning samaradorligini
							oshirish hamda to‘xtab qolish vaqtini kamaytirishga qaratilgan
							yechimlarni taklif qilamiz.
						</p>
						<p>
							Jamoamiz loyihalarni barcha bosqichlarda — uskunani tanlash va
							hisob-kitob qilishdan tortib, yetkazib berish, ishga tushirish va
							servis xizmatigacha kuzatib boradi. Biz uzoq muddatli hamkorlik va
							ishonchlilikni qadrlaymiz.
						</p>
						<Link href="#cta" className="about-btn">
							Tijorat taklifini olish
						</Link>
					</div>

					{/* Правая часть */}
					<div className="about-right">
						<div className="info-box">
							<div className="info-icon">🎧</div>
							<h3>24/7</h3>
							<span>texnik qo‘llab-quvvatlash</span>
						</div>
						<div className="info-box">
							<div className="info-icon">📦</div>
							<h3>500+</h3>
							<span>amalga oshirilgan loyihalar</span>
						</div>
						<div className="info-box">
							<div className="info-icon">📅</div>
							<h3>10+</h3>
							<span>yillik tajriba</span>
						</div>
					</div>
				</div>
			</section>

			<section className="solutions">
				<h2>CNG stansiyalari uchun kompleks yechimlar</h2>
				<div className="solutions-grid">
					<div className="solution-card">
						<div className="solution-icon">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M3 12H21M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<h3>Kompressorlar yetkazib berish</h3>
						<p>Zapravka stansiyalari uchun sanoat CNG kompressorlari.</p>
					</div>

					<div className="solution-card">
						<div className="solution-icon">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M14 7L10 17M7 14L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<h3>Ehtiyot qismlar va butlovchi elementlar</h3>
						<p>Klapanlar, filtrlar, sovutish modullari va nazorat tizimlari.</p>
					</div>

					<div className="solution-card">
						<div className="solution-icon">
							<svg viewBox="0 0 24 24" fill="none">
								<path d="M4 15V11C4 7.13 7.13 4 11 4H13C16.87 4 20 7.13 20 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							</svg>
						</div>
						<h3>Servis va texnik xizmat</h3>
						<p>Diagnostika, ta’mirlash va 24/7 texnik qo‘llab-quvvatlash.</p>
					</div>
				</div>
			</section>

			<section id="process" className="process">
				<h2>Biz qanday ishlaymiz</h2>
				<div className="process-grid">
					<div className="process-step">
						<div className="step-number">01</div>
						<h3>Vazifani tahlil qilish</h3>
						<p>Stansiyaning texnik talablari va parametrlarini o‘rganamiz.</p>
					</div>
					<div className="process-step">
						<div className="step-number">02</div>
						<h3>Uskunani tanlash</h3>
						<p>Uskunaning optimal konfiguratsiyasini taklif qilamiz.</p>
					</div>
					<div className="process-step">
						<div className="step-number">03</div>
						<h3>Yetkazib berish va ishga tushirish</h3>
						<p>Yetkazib berish va ishga tushirish jarayonini tashkil qilamiz.</p>
					</div>
					<div className="process-step">
						<div className="step-number">04</div>
						<h3>Servis qo‘llab-quvvatlash</h3>
						<p>24/7 texnik xizmat ko‘rsatamiz.</p>
					</div>
				</div>
			</section>

			<section id="projects" className="projects">
				<h2>Amalga oshirilgan loyihalar</h2>
				<p className="projects-sub">
					CNG obyektlari uchun amalga oshirilgan yetkazib berish va texnik yechimlar namunasi.
				</p>
				<div className="projects-grid">
					<div className="project-card">
						<div className="project-image">
							<img src="/img/1.png" alt="project-image" />
						</div>
						<h3>CNG stansiyasini modernizatsiya qilish</h3>
						<p>Kompressor uskunalari va filtrlash tizimlarini yetkazib berish.</p>
					</div>
					<div className="project-card">
						<div className="project-image">
							<img src="/img/2.png" alt="project-image" />
						</div>
						<h3>Yangi stansiya qurilishi</h3>
						<p>Ishga tushirish uchun kompleks uskunalar va texnik yordam.</p>
					</div>
					<div className="project-card">
						<div className="project-image">
							<img src="/img/3.png" alt="project-image" />
						</div>
						<h3>Servis xizmati</h3>
						<p>Diagnostika va operatsion ob'ekt uchun komponentlarni etkazib berish.</p>
					</div>
				</div>
			</section>

			<section id="cta" className="cta">
				<div className="cta-content">
					<h2>Loyihangizni muhokama qilishga tayyormisiz?</h2>
					<p className="cta-sub">
						24 soat ichida individual tijorat taklifi va texnik hisob-kitob tayyorlaymiz.
					</p>

					<ApplicationForm />

					<div className="cta-trust">
						<div>⚡ 24 soat ichida javob</div>
						<div>🔒 Maxfiylik kafolatlanadi</div>
						<div>📞 Bepul maslahat</div>
					</div>
				</div>
			</section>

			<section className="faq">
				<h2>Ko‘p beriladigan savollar</h2>
				<div className="faq-grid">
					<div className="faq-item">
						<h3>Tijorat taklifi qancha vaqtda tayyorlanadi?</h3>
						<p>Loyihaning murakkabligiga qarab o'rtacha 24-48 soat.</p>
					</div>
					<div className="faq-item">
						<h3>Viloyatlar bilan ishlaysizmi?</h3>
						<p>Ha, biz butun O'zbekiston bo'ylab uskunalar yetkazib beramiz.</p>
					</div>
					<div className="faq-item">
						<h3>Kafolat beriladimi?</h3>
						<p>
							Biz ishlab chiqaruvchining rasmiy kafolati asosida sertifikatlangan
							uskunalarni yetkazib berishni ta’minlaymiz.
						</p>
					</div>
					<div className="faq-item">
						<h3>Servis qo‘llab-quvvatlash ko‘rsatasizmi?</h3>
						<p>Ha, biz 24/7 texnik qo‘llab-quvvatlash va servis xizmatlarini ko‘rsatamiz.</p>
					</div>
				</div>
			</section>

			<section id="contacts" className="contacts">
				<h2>Kontaktlar</h2>
				<div className="contacts-wrapper">
					<div className="contacts-info">
						<h3>Biz bilan bog‘laning</h3>
						<br />
						<p><strong>Telefon:</strong> +998 98 011 33 44</p>
						<p><strong>Email:</strong> petronixtechnologies@gmail.com</p>
						<p><strong>Manzil:</strong> Toshkent shahri, Sergeli tumani, Sultonobod mahallasi, 272A</p>
						<a href="https://t.me/Petronix_admin" target="_blank" rel="noreferrer" className="contact-btn">
							💬 Telegram orqali yozish
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
						<p>
							CNG stansiyalari uchun uskunalar va butlovchi qismlar yetkazib
							beruvchi kompaniya. Gaz to‘ldirish infratuzilmasini qurish va
							modernizatsiya qilish bo‘yicha kompleks yechimlarni taklif etamiz.
						</p>
					</div>

					<div className="footer-nav">
						<h4>Navigatsiya</h4>
						<Link href="#about">Kompaniya haqida</Link>
						<Link href="#process">Yechimlar</Link>
						<Link href="#projects">Loyihalar</Link>
						<Link href="#">Mahsulotlar</Link>
					</div>

					<div className="footer-contacts">
						<h4>Kontaktlar</h4>
						<p>📍 Toshkent shahri, Sergeli tumani, Sultonobod mahallasi, 272A</p>
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
					© 2026 Petronix Technologies. Barcha huquqlar himoyalangan.
				</div>
			</footer>
		</>
	);
}