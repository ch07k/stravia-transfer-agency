"use client";

import { usePathname } from "next/navigation";
import { company, getLocaleFromPath } from "@/app/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton() {
  const locale = getLocaleFromPath(usePathname());

  return (
    <a className="whatsapp-float" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
      <WhatsAppIcon size={26} />
      <span>{locale === "tr" ? "WhatsApp operasyon" : "WhatsApp operation"}</span>
    </a>
  );
}
