import type { Metadata } from "next";
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
import { company, destinationsTr, fleetTr, servicesTr, trustItemsTr } from "@/app/data";

export const metadata: Metadata = {
  title: "Antalya Havalimanı B2B Transfer Tedarikçisi",
  description:
    "Stravia Transfer Agency, Antalya Havalimanı transferleri için acenteler, DMC'ler ve tur operatörlerine B2B transfer tedarik hizmeti sunar.",
  alternates: {
    canonical: "/tr",
    languages: {
      en: "/",
      tr: "/tr"
    }
  }
};

const operationRows = [
  ["Teklif dönüşü", "Acenteler için hızlı rota bazlı fiyatlandırma"],
  ["Havalimanı operasyonu", "Uçuş takibi ve geliş saati planlaması"],
  ["İletişim", "WhatsApp ve e-posta operasyon desk"],
  ["Rezervasyon profili", "FIT, VIP, seri grup ve MICE"]
];

const process = [
  {
    title: "Rota talebini gönderin",
    text: "Havalimanı, otel, tarih, uçuş bilgisi, yolcu sayısı ve araç tercihini paylaşın."
  },
  {
    title: "Acente teklifini alın",
    text: "Araç tipi, rota notları, operasyon süresi ve sabit net tedarikçi fiyatını iletelim."
  },
  {
    title: "Yerel operasyonu yönetin",
    text: "Antalya ekibimiz gelişleri, sürücü planlamasını, değişiklikleri ve misafir hareketlerini takip eder."
  }
];

export default function TurkishHomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="hero-shell">
          <div className="hero-content">
            <span className="eyebrow">Antalya B2B Transfer Tedarikçisi</span>
            <h1>Seyahat acenteleri ve DMC&apos;ler için Antalya Havalimanı transferleri</h1>
            <p>
              Yurt dışı seyahat şirketleri için güvenilir AYT havalimanı transferleri, sabit acente fiyatları,
              İngilizce destek ve 7/24 WhatsApp operasyonu sunan Antalya merkezli kara hizmetleri partneri.
            </p>
            <div className="hero-actions">
              <Link href="/tr/acente-isbirligi#rates" className="button primary">
                Acente Fiyatları İste
                <ArrowRight size={18} />
              </Link>
              <a className="button dark" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp ile İletişim
              </a>
              <Link href="#transfer-request" className="button light">
                <Mail size={18} />
                Transfer Talebi Gönder
              </Link>
            </div>
            <div className="hero-stats" aria-label="Tedarikçi öne çıkanları">
              <div>
                <strong>7/24</strong>
                <span>Operasyon desteği</span>
              </div>
              <div>
                <strong>AYT</strong>
                <span>Havalimanı kapsamı</span>
              </div>
              <div>
                <strong>B2B</strong>
                <span>Acente fiyatları</span>
              </div>
            </div>
          </div>

          <aside className="operations-card" aria-label="Acente operasyon desk">
            <div className="ops-card-head">
              <span>Tedarikçi desk</span>
              <strong>Antalya operasyon</strong>
            </div>
            {operationRows.map(([label, value]) => (
              <div className="ops-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
            <div className="ops-footer">
              <CheckCircle2 size={18} />
              Özel, VIP ve grup transfer araç planlaması
            </div>
          </aside>
        </div>
      </section>

      <section className="supplier-bar" aria-label="B2B tedarikçi bilgileri">
        <div>
          <Plane size={20} />
          Antalya Havalimanı transferleri
        </div>
        <div>
          <ShieldCheck size={20} />
          Güvenilir yerel kara partneri
        </div>
        <div>
          <Clock3 size={20} />
          7/24 WhatsApp operasyonu
        </div>
        <div>
          <ClipboardCheck size={20} />
          Sabit acente fiyatları
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <span className="eyebrow">Seyahat ticaretine odaklı</span>
          <h2>Acenteler, tur operatörleri ve DMC&apos;ler için profesyonel tedarikçi desteği.</h2>
          <p>
            B2B transfer operasyonları için yapılandık: net rota teklifleri, güvenilir sürücü planlaması, uçuşa göre
            dispatch ve her transfer öncesi, sırasında ve sonrasında hızlı iletişim.
          </p>
        </div>
        <div className="proof-panel">
          {[
            "Onaylı acente rotaları için net fiyatlar",
            "İngilizce WhatsApp operasyon desteği",
            "Özel, VIP ve grup transferleri",
            "Antalya resort bölgelerinde yerel bilgi"
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
            <span className="eyebrow">Acente iş akışı</span>
            <h2>Basit teklif ve operasyon süreci</h2>
          </div>
          <p>
            Yurt dışı acentelerin çalışma düzenine uygun: rota talebi, hızlı onay, değişiklik yönetimi ve canlı
            operasyon güncellemeleri.
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
            <span className="eyebrow">Tedarikçi kabiliyetleri</span>
            <h2>Antalya genelinde özel, VIP ve grup transferleri</h2>
          </div>
          <p>
            Acente FIT misafirleri, lüks müşteriler, tur serileri, incentive grupları ve grup programları için temel
            transfer hizmetleri.
          </p>
        </div>
        <div className="service-matrix">
          {servicesTr.map((service) => {
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
            <span className="eyebrow">Destinasyon kapsamı</span>
            <h2>Antalya Havalimanı&apos;ndan resort bölgelerine</h2>
          </div>
          <p>Antalya, Belek, Side, Alanya, Kemer ve acentelerin sattığı başlıca otel bölgeleri için rota desteği.</p>
        </div>
        <div className="route-board">
          {destinationsTr.map((destination) => (
            <Link key={destination} className="route-item" href="/tr/destinasyonlar">
              <Route size={18} />
              <span>AYT Havalimanı - {destination}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section fleet-preview">
        <div>
          <span className="eyebrow">Filo / araç tipleri</span>
          <h2>Yolcu profiline uygun araç planlaması</h2>
          <p>
            Executive FIT gelişlerinden daha büyük grup transferlerine kadar misafir profili, bagaj yükü, rota süresi
            ve hizmet seviyesine göre araç önerisi yaparız.
          </p>
          <Link className="text-link" href="/tr/filo">
            Filo seçeneklerini görüntüle <ArrowRight size={16} />
          </Link>
        </div>
        <div className="fleet-list">
          {fleetTr.map((item) => (
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
          <span className="eyebrow">Acente güven sinyalleri</span>
          <h2>Yurt dışı partnerler için operasyon standartları</h2>
        </div>
        <div className="trust-grid">
          {trustItemsTr.map((item) => {
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

      <ContactForm locale="tr" />
    </>
  );
}
