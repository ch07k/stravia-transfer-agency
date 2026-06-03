import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, heroActionCopy, type Locale } from "@/app/data";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  locale?: Locale;
};

export function PageHero({ eyebrow, title, text, locale = "en" }: PageHeroProps) {
  const copy = heroActionCopy[locale];
  const ratesHref = locale === "tr" ? "/tr/acente-isbirligi#rates" : "/agency-partnership#rates";

  return (
    <section className="page-hero">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          <Link href={ratesHref} className="button primary">
            {copy.rates}
            <ArrowRight size={18} />
          </Link>
          <a className="button dark" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={19} />
            {copy.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
