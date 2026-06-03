import type { Metadata } from "next";
import { Users } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { fleet } from "@/app/data";

export const metadata: Metadata = {
  title: "Fleet / Vehicle Types",
  description:
    "Private sedan, luxury van, minibus and coach vehicle options for B2B Antalya Airport transfer bookings."
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet / vehicle types"
        title="Vehicle allocation for private, VIP and group transfers"
        text="Comfortable and professionally coordinated transfer options for agency clients arriving at Antalya Airport."
      />
      <section className="section">
        <div className="fleet-page-grid">
          {fleet.map((item) => (
            <article key={item.title} className="fleet-card">
              <Users size={28} />
              <h2>{item.title}</h2>
              <strong>{item.capacity}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactForm />
    </>
  );
}
