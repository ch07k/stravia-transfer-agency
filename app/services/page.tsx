import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { services } from "@/app/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Antalya Airport transfers, Belek, Side, Alanya, Kemer, VIP transfers, group transfers and 24/7 operation support for agencies."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Transfer services"
        title="Agency transfer services from Antalya Airport"
        text="A complete supplier service for private transfers, VIP guests, group arrivals and resort destination routes across Antalya."
      />
      <section className="section">
        <div className="card-grid services-grid">
          {services.map((service) => {
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
      <ContactForm />
    </>
  );
}
