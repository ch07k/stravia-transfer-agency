import type { Metadata } from "next";
import { Users } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { fleetTr } from "@/app/data";

export const metadata: Metadata = {
  title: "Filo / Araç Tipleri",
  description:
    "B2B Antalya Havalimanı transfer rezervasyonları için sedan, lüks van, minibüs ve otobüs araç seçenekleri.",
  alternates: {
    canonical: "/tr/filo",
    languages: {
      en: "/fleet",
      tr: "/tr/filo"
    }
  }
};

export default function TurkishFleetPage() {
  return (
    <>
      <PageHero
        locale="tr"
        eyebrow="Filo / araç tipleri"
        title="Özel, VIP ve grup transferleri için araç planlaması"
        text="Antalya Havalimanı'na gelen acente misafirleri için konforlu ve profesyonel şekilde koordine edilen transfer seçenekleri."
      />
      <section className="section">
        <div className="fleet-page-grid">
          {fleetTr.map((item) => (
            <article key={item.title} className="fleet-card">
              <Users size={28} />
              <h2>{item.title}</h2>
              <strong>{item.capacity}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactForm locale="tr" />
    </>
  );
}
