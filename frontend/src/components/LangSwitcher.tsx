"use client";

import { useState, useRef, useEffect } from "react";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "uz", flag: "🇺🇿", label: "UZ" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
  { code: "en", flag: "🇬🇧", label: "EN" },
];

export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find((l) => l.code === lang) || LANGS[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function pick(code: Lang) {
    setLang(code);
    setOpen(false);
  }

  return (
    <div className="lang-sw" ref={ref}>
      <button
        className="lang-sw-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
      >
        <span className="lang-sw-flag">{current.flag}</span>
        <span className="lang-sw-code">{current.label}</span>
        <svg className={`lang-sw-arrow${open ? " open" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div className="lang-sw-dropdown">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={`lang-sw-item${l.code === lang ? " active" : ""}`}
              onClick={() => pick(l.code)}
            >
              <span className="lang-sw-flag">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
