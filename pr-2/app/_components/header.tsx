"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

const links = [
  { href: "#air", label: "Возможности" },
  { href: "#platform", label: "Открытая платформа" },
  { href: "#specifications", label: "Характеристики" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header className="header">
      <a
        href="#top"
        className="brand-link"
        aria-label="Ягель — в начало страницы"
        onClick={() => setOpen(false)}
      >
        <Image
          src="/brand/yagel-lockup-inverse.svg"
          alt="Ягель"
          width={151}
          height={64}
          priority
        />
      </a>
      <span className="header-edition mono">ОТКРЫТОЕ ЖЕЛЕЗО ДЛЯ ДОМА</span>
      <button
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Закрыть" : "Меню"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-navigation"
        className={`navigation${open ? " is-open" : ""}`}
        aria-label="Основная навигация"
      >
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#choose" onClick={() => setOpen(false)}>
          Знакомьтесь: A1 <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}
