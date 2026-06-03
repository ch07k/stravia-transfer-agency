import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Turkey-based Antalya airport transfer supplier supporting travel agencies, DMCs and tour operators with local ground transportation."
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Turkey-based local ground partner for Antalya transfers"
        text="We provide agency-focused airport transfer operations in Antalya with responsive communication, destination knowledge and reliable supplier coordination."
      />
      <section className="section two-column">
        <div>
          <span className="eyebrow">Corporate supplier profile</span>
          <h2>Focused on agency relationships and repeat operations</h2>
          <p>
            Stravia Transfer Agency works with travel agencies, DMCs, tour operators and overseas travel companies
            that need dependable transfer handling from Antalya Airport to hotels and resort destinations.
          </p>
          <p>
            Our role is to be a practical local extension of your operations desk: quick confirmations, clear rates,
            careful vehicle planning and 24/7 communication when flights, guest names or timings change.
          </p>
        </div>
        <div className="proof-panel tall">
          {[
            "B2B-only communication style",
            "Local Antalya destination knowledge",
            "English-speaking agency support",
            "Private, VIP and group transfer handling",
            "Operational updates via WhatsApp and email"
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} />
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
