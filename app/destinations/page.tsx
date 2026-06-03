import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { destinations } from "@/app/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Antalya Airport transfer destination coverage for Belek, Side, Alanya, Kemer, Lara, Kundu and surrounding hotel regions."
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destination coverage"
        title="Antalya Airport transfers to key resort destinations"
        text="Route support for agencies selling Antalya city hotels, coastal resorts, golf properties, leisure packages and group programs."
      />
      <section className="section">
        <div className="destination-grid expanded">
          {destinations.map((destination) => (
            <article key={destination} className="destination-card static-card">
              <span>{destination}</span>
              <ArrowRight size={18} />
            </article>
          ))}
        </div>
      </section>
      <ContactForm />
    </>
  );
}
