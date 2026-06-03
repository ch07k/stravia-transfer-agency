import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { company } from "@/app/data";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Antalya Havalimanı transfer fiyatları ve teklifler için Stravia Transfer Agency acente desk ile WhatsApp veya e-posta üzerinden iletişime geçin.",
  alternates: {
    canonical: "/tr/iletisim",
    languages: {
      en: "/contact",
      tr: "/tr/iletisim"
    }
  }
};

export default function TurkishContactPage() {
  return (
    <>
      <PageHero
        locale="tr"
        eyebrow="İletişim"
        title="Antalya acente transfer desk ile iletişime geçin"
        text="Fiyat isteyin, transfer brief gönderin veya acente rezervasyonları için 7/24 WhatsApp operasyon ekibimize ulaşın."
      />
      <section className="section contact-methods">
        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={27} />
          <strong>WhatsApp Operasyon</strong>
          <span>{company.phone}</span>
        </a>
        <a href={`mailto:${company.email}`}>
          <Mail size={26} />
          <strong>E-posta Acente Desk</strong>
          <span>{company.email}</span>
        </a>
        <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
          <Phone size={26} />
          <strong>Telefon</strong>
          <span>{company.phone}</span>
        </a>
      </section>
      <ContactForm locale="tr" />
    </>
  );
}
