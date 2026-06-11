"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { API_URL, imgUrl } from "@/lib/api";
import { useT } from "@/lib/i18n";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CategoryBanner.css";

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  order: number;
}

const FALLBACK: Category[] = [
  { id: "fallback-0", name: "Petronix CNG Solutions", slug: "", image: "", order: 0 },
];

export default function CategoryBanner() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [brokenImgs, setBrokenImgs] = useState<Set<string>>(new Set());
  const t = useT();

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((r) => r.json())
      .then((data: Category[]) => {
        if (Array.isArray(data)) {
          const withPhoto = data.filter((c) => !!c.image);
          setCategories(withPhoto);
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  const slides = categories.length > 0 ? categories : FALLBACK;

  return (
    <section className="cat-banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={slides.length > 1}
        className="cat-swiper"
      >
        {slides.map((cat) => {
          const href = cat.slug ? `/products?type=${cat.slug}` : "/products";
          const showImg = !!cat.image && !brokenImgs.has(cat.id);

          return (
            <SwiperSlide key={cat.id}>
              <Link href={href} className="cat-banner-slide">
                {showImg ? (
                  <img
                    src={imgUrl(cat.image)}
                    alt={cat.name}
                    className="cat-banner-img"
                    onError={() =>
                      setBrokenImgs((prev) => new Set(prev).add(cat.id))
                    }
                  />
                ) : (
                  <div className="cat-banner-placeholder">
                    <svg className="cat-banner-ph-icon" viewBox="0 0 80 80" fill="none">
                      <rect x="8" y="16" width="64" height="48" rx="6" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="28" cy="36" r="7" stroke="currentColor" strokeWidth="2.5" />
                      <path
                        d="M8 52 L26 38 L38 48 L54 30 L72 48 L72 58 C72 61.3 69.3 64 66 64 L14 64 C10.7 64 8 61.3 8 58Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <div className="cat-banner-overlay">
                  <h2 className="cat-banner-title">{cat.name}</h2>
                  <span className="cat-banner-cta">{t("banner_cta")}</span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
