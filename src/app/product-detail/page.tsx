"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

/* =========================
   TYPES
========================= */

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  brand: string;
  type: string;
}

/* =========================
   PRODUCT DETAIL PAGE
========================= */

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = searchParams.get("id");

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!productId) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetch("/js/products.json")
      .then((res) => res.json())
      .then((products: Product[]) => {
        const found = products.find((p) => String(p.id) === String(productId));
        if (found) {
          setProduct(found);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [productId]);

  const telegramHref = product
    ? `https://t.me/jtronix_admin?text=Salom,%20men%20${encodeURIComponent(
        product.name
      )}%20haqida%20ma'lumot%20olmoqchiman`
    : "https://t.me/jtronix_admin";

  return (
    <>
      <Navbar />

      <section className="product-detail-section">
        {loading && (
          <div className="product-detail-loading">
            <p>Yuklanmoqda...</p>
          </div>
        )}

        {!loading && notFound && (
          <div className="product-detail-notfound">
            <h2>Mahsulot topilmadi</h2>
            <p>Kechirasiz, bunday mahsulot mavjud emas.</p>
            <button className="product-btn" onClick={() => router.push("/products")}>
              ← Katalogga qaytish
            </button>
          </div>
        )}

        {!loading && product && (
          <div className="product-detail-container">

            {/* Back link */}
            <button
              className="product-detail-back"
              onClick={() => router.back()}
            >
              ← Orqaga
            </button>

            <div className="product-detail-card">

              {/* Image */}
              <div className="product-detail-image">
                <img src={product.image} alt={product.name} />
                <span className="product-badge">ORIGINAL</span>
              </div>

              {/* Info */}
              <div className="product-detail-info">
                <h1 id="productTitle">{product.name}</h1>

                <p id="productDescription" className="product-detail-desc">
                  {product.description}
                </p>

                <div className="product-detail-meta">
                  <div className="product-meta-row">
                    <span className="meta-label">Brend:</span>
                    <span id="productBrand" className="meta-value">
                      {product.brand}
                    </span>
                  </div>
                  <div className="product-meta-row">
                    <span className="meta-label">Turi:</span>
                    <span id="productType" className="meta-value">
                      {product.type}
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="product-detail-actions">
                  <a
                    id="callBtn"
                    href="tel:+998980113344"
                    className="product-btn product-btn-call"
                  >
                    📞 Qo'ng'iroq qilish
                  </a>

                  <a
                    id="telegramBtn"
                    href={telegramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="product-btn product-btn-telegram"
                  >
                    💬 Telegram orqali so'rov
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </section>
    </>
  );
}