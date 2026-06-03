import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Acente İş Birliği",
  description:
    "Antalya Havalimanı transferleri için sabit acente fiyatları isteyin. Seyahat acenteleri, DMC'ler ve tur operatörleri için B2B tedarikçi desteği.",
  alternates: {
    canonical: "/tr/acente-isbirligi",
    languages: {
      en: "/agency-partnership",
      tr: "/tr/acente-isbirligi"
    }
  }
};

export default function TurkishAgencyPartnershipPage() {
  return (
    <>
      <PageHero
        locale="tr"
        eyebrow="Acente iş birliği"
        title="Sabit acente fiyatları ve güvenilir yerel transfer operasyonu"
        text="Yurt dışı acente iş akışlarını, teklif süreçlerini ve saha operasyon desteğini anlayan Antalya merkezli transfer tedarikçisiyle çalışın."
      />
      <section className="section two-column" id="rates">
        <div>
          <span className="eyebrow">Seyahat ticareti partnerleri için</span>
          <h2>Antalya programlarınız için net transfer fiyatları isteyin</h2>
          <p>
            Antalya Havalimanı rotaları, Belek, Side, Alanya, Kemer, VIP transferler ve grup hareketleri için acente
            fiyat listeleri ve teklif desteği hazırlarız.
          </p>
          <p>
            Beklenen destinasyonları, yolcu profillerini ve sezon tarihlerini paylaşın. Ekibimiz rota fiyatları, araç
            önerileri ve operasyon notlarıyla dönüş yapacaktır.
          </p>
        </div>
        <div className="proof-panel tall">
          {[
            "Seyahat acenteleri için hızlı teklif",
            "Onaylı rotalar için sabit fiyatlar",
            "Net değişiklik iletişimi",
            "WhatsApp ve e-posta operasyon desk",
            "FIT, VIP, seri ve grup rezervasyon desteği"
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={20} />
              {item}
            </div>
          ))}
        </div>
      </section>
      <ContactForm locale="tr" />
    </>
  );
}
