import { Mail, Send } from "lucide-react";
import { company, contactCopy, type Locale } from "@/app/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const copy = contactCopy[locale];

  return (
    <section className="section contact-band" id="transfer-request">
      <div className="section-heading compact">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
      </div>
      <form className="contact-form" action={`mailto:${company.email}`} method="post" encType="text/plain">
        <div className="form-grid">
          <label>
            {copy.agency}
            <input name="Agency" placeholder={copy.agencyPlaceholder} required />
          </label>
          <label>
            {copy.email}
            <input name="Email" type="email" placeholder={copy.emailPlaceholder} required />
          </label>
          <label>
            {copy.whatsapp}
            <input name="WhatsApp" placeholder="+44 / +49 / +90 ..." />
          </label>
          <label>
            {copy.route}
            <input name="Route" placeholder={copy.routePlaceholder} required />
          </label>
          <label>
            {copy.date}
            <input name="Date" placeholder={copy.datePlaceholder} />
          </label>
          <label>
            {copy.passengers}
            <input name="Passengers" placeholder={copy.passengersPlaceholder} />
          </label>
        </div>
        <label>
          {copy.notes}
          <textarea name="Request" rows={5} placeholder={copy.notesPlaceholder} required />
        </label>
        <div className="form-actions">
          <button type="submit" className="button primary">
            <Send size={18} />
            {copy.submit}
          </button>
          <a className="button ghost" href={`mailto:${company.email}`}>
            <Mail size={18} />
            {copy.emailDesk}
          </a>
          <a className="button dark" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={19} />
            {copy.whatsappButton}
          </a>
        </div>
      </form>
    </section>
  );
}
