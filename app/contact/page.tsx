import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { company } from "@/app/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Stravia Transfer Agency desk by WhatsApp or email for Antalya Airport transfer rates and quotations."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact our Antalya agency transfer desk"
        text="Request rates, send a transfer brief or reach our 24/7 WhatsApp operation team for agency bookings."
      />
      <section className="section contact-methods">
        <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={27} />
          <strong>WhatsApp Operation</strong>
          <span>{company.phone}</span>
        </a>
        <a href={`mailto:${company.email}`}>
          <Mail size={26} />
          <strong>Email Agency Desk</strong>
          <span>{company.email}</span>
        </a>
        <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
          <Phone size={26} />
          <strong>Call</strong>
          <span>{company.phone}</span>
        </a>
      </section>
      <ContactForm />
    </>
  );
}
