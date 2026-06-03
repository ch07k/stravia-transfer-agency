import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Agency Partnership",
  description:
    "Request fixed agency rates for Antalya Airport transfers. B2B supplier support for travel agencies, DMCs and tour operators."
};

export default function AgencyPartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Agency partnership"
        title="Fixed agency rates and reliable local transfer operations"
        text="Partner with a Turkey-based Antalya Airport transfer supplier that understands overseas agency workflows, quotations and on-ground support."
      />
      <section className="section two-column" id="rates">
        <div>
          <span className="eyebrow">For travel trade partners</span>
          <h2>Request net transfer rates for your Antalya programs</h2>
          <p>
            We prepare agency rate sheets and quotation support for Antalya Airport routes, Belek, Side, Alanya,
            Kemer, VIP transfers and group movement requirements.
          </p>
          <p>
            Send your expected destinations, passenger profiles and season dates. Our team will respond with route
            pricing, vehicle recommendations and operational notes.
          </p>
        </div>
        <div className="proof-panel tall">
          {[
            "Fast quotation for travel agencies",
            "Fixed rates for confirmed routes",
            "Clear amendment communication",
            "WhatsApp and email operation desk",
            "Support for FIT, VIP, series and group bookings"
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} />
              {item}
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
    </>
  );
}
