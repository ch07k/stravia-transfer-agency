import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Stravia Transfer Agency, Antalya Havalimanı transferleri için acentelere, DMC'lere ve tur operatörlerine yerel kara hizmetleri sunar.",
  alternates: {
    canonical: "/tr/hakkimizda",
    languages: {
      en: "/about-us",
      tr: "/tr/hakkimizda"
    }
  }
};

export default function TurkishAboutPage() {
  return (
    <>
      <PageHero
        locale="tr"
        eyebrow="Hakkımızda"
        title="Antalya transferleri için yerel kara hizmetleri partneri"
        text="Antalya'da acente odaklı havalimanı transfer operasyonları, hızlı iletişim, destinasyon bilgisi ve güvenilir tedarikçi koordinasyonu sunuyoruz."
      />
      <section className="section two-column">
        <div>
          <span className="eyebrow">Kurumsal tedarikçi profili</span>
          <h2>Acente ilişkileri ve tekrarlayan operasyonlara odaklıyız</h2>
          <p>
            Stravia Transfer Agency, Antalya Havalimanı&apos;ndan otellere ve resort destinasyonlarına güvenilir transfer
            operasyonu arayan seyahat acenteleri, DMC&apos;ler, tur operatörleri ve yurt dışı seyahat şirketleriyle çalışır.
          </p>
          <p>
            Rolümüz, operasyon masanızın Antalya&apos;daki pratik uzantısı olmaktır: hızlı onaylar, net fiyatlar, dikkatli
            araç planlaması ve uçuş, misafir adı ya da saat değişikliklerinde 7/24 iletişim.
          </p>
        </div>
        <div className="proof-panel tall">
          {[
            "B2B odaklı iletişim yapısı",
            "Antalya destinasyon bilgisi",
            "İngilizce acente desteği",
            "Özel, VIP ve grup transfer operasyonu",
            "WhatsApp ve e-posta ile operasyon güncellemeleri"
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
