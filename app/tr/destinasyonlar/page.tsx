import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { destinationsTr } from "@/app/data";

export const metadata: Metadata = {
  title: "Destinasyonlar",
  description:
    "Belek, Side, Alanya, Kemer, Lara, Kundu ve çevre otel bölgeleri için Antalya Havalimanı transfer kapsamı.",
  alternates: {
    canonical: "/tr/destinasyonlar",
    languages: {
      en: "/destinations",
      tr: "/tr/destinasyonlar"
    }
  }
};

export default function TurkishDestinationsPage() {
  return (
    <>
      <PageHero
        locale="tr"
        eyebrow="Destinasyon kapsamı"
        title="Antalya Havalimanı'ndan başlıca resort destinasyonlarına transfer"
        text="Antalya şehir otelleri, sahil resortları, golf otelleri, leisure paketleri ve grup programları satan acenteler için rota desteği."
      />
      <section className="section">
        <div className="destination-grid expanded">
          {destinationsTr.map((destination) => (
            <article key={destination} className="destination-card static-card">
              <span>{destination}</span>
              <ArrowRight size={18} />
            </article>
          ))}
        </div>
      </section>
      <ContactForm locale="tr" />
    </>
  );
}
