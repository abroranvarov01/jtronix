"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/api";
import { useT } from "@/lib/i18n";

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  order: number;
}

/* ── Fallback slides when no categories from API ── */
const FALLBACK: { name: string; slug: string }[] = [
  { name: "Petronix CNG Solutions", slug: "" },
];

export default function CategoryBanner() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const t = useT();

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((r) => r.json())
      .then((data: Category[]) => {
        if (Array.isArray(data)) setCategories(data);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const slides = categories.length > 0
    ? categories
    : FALLBACK.map((f, i) => ({ id: `fallback-${i}`, ...f, image: "", order: i }));

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [slides.length, next]);

  // Don't render until first fetch attempt is done
  if (!loaded) return null;

  return (
    <section className="cat-banner">
      <div className="cat-banner-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((cat) => {
          const href = cat.slug ? `/products?type=${cat.slug}` : "/products";
          return (
            <Link key={cat.id} href={href} className="cat-banner-slide">
              {cat.image ? (
                <img src={cat.image} alt={cat.name} className="cat-banner-img" />
              ) : (
                <div className="cat-banner-placeholder">
                  <svg className="cat-banner-ph-icon" viewBox="0 0 80 80" fill="none">
                    <rect x="8" y="16" width="64" height="48" rx="6" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="28" cy="36" r="7" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M8 52 L26 38 L38 48 L54 30 L72 48 L72 58 C72 61.3 69.3 64 66 64 L14 64 C10.7 64 8 61.3 8 58Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <div className="cat-banner-overlay">
                <h2 className="cat-banner-title">{cat.name}</h2>
                <span className="cat-banner-cta">{t("banner_cta")}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {slides.length > 1 && (
        <>
          <button className="cat-banner-btn cat-banner-btn--prev" onClick={prev} aria-label="Prev">
            ‹
          </button>
          <button className="cat-banner-btn cat-banner-btn--next" onClick={next} aria-label="Next">
            ›
          </button>
          <div className="cat-banner-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`cat-banner-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
