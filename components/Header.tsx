"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { company, getAlternatePath, getLocaleFromPath, headerCopy, navItemsByLocale } from "@/app/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const locale = getLocaleFromPath(pathname);
  const copy = headerCopy[locale];
  const navItems = navItemsByLocale[locale];

  return (
    <header className="site-header">
      <div className="header-top">
        <span>{copy.topLine}</span>
        <span>{copy.supportLine}</span>
        <a href={`mailto:${company.email}`}>
          <Mail size={14} />
          {company.email}
        </a>
      </div>

      <div className="header-main">
        <Link className="brand" href="/" aria-label={`${company.name} home`}>
          <span className="brand-mark">STA</span>
          <span>
            <strong>{company.name}</strong>
            <small>{copy.brandSubline}</small>
          </span>
        </Link>

        <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href || pathname.replace(/\/$/, "") === item.href ? "active" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-whatsapp" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={19} />
          {copy.whatsapp}
        </a>

        <div className="language-switch" aria-label="Language selector">
          <Link className={locale === "en" ? "active" : ""} href={getAlternatePath(pathname, "en")}>
            EN
          </Link>
          <Link className={locale === "tr" ? "active" : ""} href={getAlternatePath(pathname, "tr")}>
            TR
          </Link>
        </div>
      </div>
    </header>
  );
}
