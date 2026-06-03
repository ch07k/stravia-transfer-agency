"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, footerCopy, getLocaleFromPath, navItemsByLocale } from "@/app/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const copy = footerCopy[locale];
  const navItems = navItemsByLocale[locale];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Stravia Transfer Agency</div>
          <p>{copy.text}</p>
        </div>
        <div>
          <h2>{copy.pages}</h2>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>{copy.desk}</h2>
          <a href={`mailto:${company.email}`}>
            <Mail size={16} />
            {company.email}
          </a>
          <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
            <Phone size={16} />
            {company.phone}
          </a>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={17} />
            {copy.whatsapp}
          </a>
          <span>
            <MapPin size={16} />
            {company.location}
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Stravia Transfer Agency. {copy.bottom}
        </span>
        <span>{copy.services}</span>
      </div>
    </footer>
  );
}
