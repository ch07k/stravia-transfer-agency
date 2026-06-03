import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { servicesTr } from "@/app/data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Antalya Havalimanı, Belek, Side, Alanya, Kemer, VIP transfer, grup transferi ve 7/24 operasyon desteği.",
  alternates: {
    canonical: "/tr/hizmetler",
    languages: {
      en: "/services",
      tr: "/tr/hizmetler"
    }
  }
};

export default function TurkishServicesPage() {
  return (
    <>
      <PageHero
        locale="tr"
        eyebrow="Transfer hizmetleri"
        title="Antalya Havalimanı çıkışlı acente transfer hizmetleri"
        text="Özel transferler, VIP misafirler, grup gelişleri ve Antalya resort destinasyonları için kapsamlı tedarikçi hizmeti."
      />
      <section className="section">
        <div className="card-grid services-grid">
          {servicesTr.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card featured" key={service.title}>
                <Icon size={28} />
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <ContactForm locale="tr" />
    </>
  );
}
