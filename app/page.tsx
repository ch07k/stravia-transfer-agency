import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Mail,
  MessageCircle,
  Plane,
  Route,
  ShieldCheck
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { company, destinations, fleet, services, trustItems } from "./data";

const operationRows = [
  ["Quote response", "Fast route-based pricing for agencies"],
  ["Airport handling", "Flight monitoring and arrival timing"],
  ["Communication", "WhatsApp and email operation desk"],
  ["Booking profile", "FIT, VIP, series groups and MICE"]
];

const process = [
  {
    title: "Send route request",
    text: "Share airport, hotel, date, flight details, passenger count and vehicle preference."
  },
  {
    title: "Receive agency quote",
    text: "We confirm vehicle type, route notes, lead time and fixed net supplier rate."
  },
  {
    title: "Operate locally",
    text: "Our Antalya desk monitors arrivals, driver allocation, amendments and guest movements."
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="hero-shell">
          <div className="hero-content">
            <span className="eyebrow">B2B Transfer Supplier in Antalya</span>
            <h1>Antalya Airport transfers for travel agencies and DMCs</h1>
            <p>
              A Turkey-based ground partner for overseas travel companies that need reliable AYT airport transfers,
              fixed agency rates, English-speaking support and 24/7 WhatsApp operation.
            </p>
            <div className="hero-actions">
              <Link href="/agency-partnership#rates" className="button primary">
                Request Agency Rates
                <ArrowRight size={18} />
              </Link>
              <a className="button dark" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Contact on WhatsApp
              </a>
              <Link href="#transfer-request" className="button light">
                <Mail size={18} />
                Send Transfer Request
              </Link>
            </div>
            <div className="hero-stats" aria-label="Supplier highlights">
              <div>
                <strong>24/7</strong>
                <span>Operation support</span>
              </div>
              <div>
                <strong>AYT</strong>
                <span>Airport coverage</span>
              </div>
              <div>
                <strong>B2B</strong>
                <span>Agency rates</span>
              </div>
            </div>
          </div>

          <aside className="operations-card" aria-label="Agency operations desk">
            <div className="ops-card-head">
              <span>Supplier desk</span>
              <strong>Antalya operation</strong>
            </div>
            {operationRows.map(([label, value]) => (
              <div className="ops-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
            <div className="ops-footer">
              <CheckCircle2 size={18} />
              Private, VIP and group transfer allocation
            </div>
          </aside>
        </div>
      </section>

      <section className="supplier-bar" aria-label="B2B supplier credentials">
        <div>
          <Plane size={20} />
          Antalya Airport transfers
        </div>
        <div>
          <ShieldCheck size={20} />
          Reliable local ground partner
        </div>
        <div>
          <Clock3 size={20} />
          24/7 WhatsApp operation
        </div>
        <div>
          <ClipboardCheck size={20} />
          Fixed agency rates
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <span className="eyebrow">Travel trade focused</span>
          <h2>Professional supplier support for agencies, tour operators and DMCs.</h2>
          <p>
            We are structured for B2B transfer operations: clear route quotations, dependable driver allocation,
            flight-aware dispatch and fast English-speaking communication before, during and after each transfer.
          </p>
        </div>
        <div className="proof-panel">
          {[
            "Net rates for confirmed agency routes",
            "English-speaking WhatsApp operation",
            "Private, VIP and group transfers",
            "Destination knowledge across Antalya resorts"
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section operation-section">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Agency workflow</span>
            <h2>Simple quotation and operation process</h2>
          </div>
          <p>
            Built around the way overseas agencies actually work: route requests, quick confirmations, amendments and
            live operation updates.
          </p>
        </div>
        <div className="process-grid">
          {process.map((item, index) => (
            <article key={item.title} className="process-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Supplier capabilities</span>
            <h2>Private, VIP and group transfers across Antalya</h2>
          </div>
          <p>
            Core transfer services for agency FIT guests, luxury clients, tour series, incentives and group programs.
          </p>
        </div>
        <div className="service-matrix">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-row" key={service.title}>
                <Icon size={23} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section destination-section">
        <div className="section-heading split">
          <div>
            <span className="eyebrow">Destination coverage</span>
            <h2>Antalya Airport to resort zones</h2>
          </div>
          <p>Coverage for Antalya, Belek, Side, Alanya, Kemer and key hotel regions sold by travel agencies.</p>
        </div>
        <div className="route-board">
          {destinations.slice(0, 12).map((destination) => (
            <Link key={destination} className="route-item" href="/destinations">
              <Route size={18} />
              <span>AYT Airport to {destination}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section fleet-preview">
        <div>
          <span className="eyebrow">Fleet / vehicle types</span>
          <h2>Vehicle allocation matched to passenger profile</h2>
          <p>
            From executive FIT arrivals to larger group transfers, we recommend vehicles based on guest profile,
            luggage load, route duration and service level.
          </p>
          <Link className="text-link" href="/fleet">
            View fleet options <ArrowRight size={16} />
          </Link>
        </div>
        <div className="fleet-list">
          {fleet.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.capacity}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section">
        <div className="section-heading">
          <span className="eyebrow">Agency trust signals</span>
          <h2>Operational standards for overseas partners</h2>
        </div>
        <div className="trust-grid">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="trust-card" key={item.label}>
                <Icon size={22} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <ContactForm />
    </>
  );
}
