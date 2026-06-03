import {
  BriefcaseBusiness,
  Bus,
  Clock3,
  Globe2,
  Handshake,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards
} from "lucide-react";

export const company = {
  name: "Stravia Transfer Agency",
  email: "info@straviatransferagency.com",
  phone: "+90 544 158 80 78",
  whatsapp: "905441588078",
  location: "Yenigol Mah. Defne Sk. No:33/2 Muratpaşa, Antalya"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Fleet", href: "/fleet" },
  { label: "Agency Partnership", href: "/agency-partnership" },
  { label: "Contact", href: "/contact" }
];

export type Locale = "en" | "tr";

export const navItemsByLocale = {
  en: navItems,
  tr: [
    { label: "Ana Sayfa", href: "/tr" },
    { label: "Hakkımızda", href: "/tr/hakkimizda" },
    { label: "Hizmetler", href: "/tr/hizmetler" },
    { label: "Destinasyonlar", href: "/tr/destinasyonlar" },
    { label: "Filo", href: "/tr/filo" },
    { label: "Acente İş Birliği", href: "/tr/acente-isbirligi" },
    { label: "İletişim", href: "/tr/iletisim" }
  ]
} satisfies Record<Locale, typeof navItems>;

const routePairs = [
  { en: "/", tr: "/tr" },
  { en: "/about-us", tr: "/tr/hakkimizda" },
  { en: "/services", tr: "/tr/hizmetler" },
  { en: "/destinations", tr: "/tr/destinasyonlar" },
  { en: "/fleet", tr: "/tr/filo" },
  { en: "/agency-partnership", tr: "/tr/acente-isbirligi" },
  { en: "/contact", tr: "/tr/iletisim" }
];

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/tr" || pathname.startsWith("/tr/") ? "tr" : "en";
}

export function getAlternatePath(pathname: string, targetLocale: Locale) {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const pair = routePairs.find((item) => item.en === cleanPath || item.tr === cleanPath);
  return pair ? pair[targetLocale] : targetLocale === "tr" ? "/tr" : "/";
}

export const headerCopy = {
  en: {
    topLine: "B2B airport transfer supplier in Antalya, Turkey",
    supportLine: "AYT arrivals, resort routes, VIP and group movements",
    brandSubline: "Agency ground services",
    whatsapp: "WhatsApp Ops"
  },
  tr: {
    topLine: "Antalya merkezli B2B havalimanı transfer tedarikçisi",
    supportLine: "AYT gelişleri, resort rotaları, VIP ve grup operasyonları",
    brandSubline: "Acente kara hizmetleri",
    whatsapp: "WhatsApp Operasyon"
  }
} satisfies Record<Locale, Record<string, string>>;

export const heroActionCopy = {
  en: {
    rates: "Request Agency Rates",
    whatsapp: "Contact on WhatsApp"
  },
  tr: {
    rates: "Acente Fiyatları İste",
    whatsapp: "WhatsApp ile İletişim"
  }
} satisfies Record<Locale, Record<string, string>>;

export const services = [
  {
    title: "Antalya Airport Transfers",
    text: "Private arrival and departure handling from Antalya Airport for FIT, VIP and group agency bookings.",
    icon: Plane
  },
  {
    title: "Belek Transfers",
    text: "Reliable resort transfers for golf groups, leisure agencies and luxury hotel reservations.",
    icon: MapPin
  },
  {
    title: "Side Transfers",
    text: "Scheduled agency support for Side, Manavgat and surrounding hotel zones.",
    icon: MapPin
  },
  {
    title: "Alanya Transfers",
    text: "Long-distance airport transfer coordination with clear lead times and fixed supplier rates.",
    icon: MapPin
  },
  {
    title: "Kemer Transfers",
    text: "Coastal transfer services for Kemer, Beldibi, Goynuk, Camyuva and Tekirova.",
    icon: MapPin
  },
  {
    title: "VIP Transfers",
    text: "Executive vehicles, discreet chauffeurs and priority coordination for high-value guests.",
    icon: Sparkles
  },
  {
    title: "Group Transfers",
    text: "Minibus and coach planning for tour operators, events, incentives and series groups.",
    icon: Bus
  },
  {
    title: "24/7 Operation Support",
    text: "English-speaking WhatsApp operation team for amendments, flight delays and on-ground updates.",
    icon: Headset
  }
];

export const servicesTr = [
  {
    title: "Antalya Havalimanı Transferleri",
    text: "FIT, VIP ve grup acente rezervasyonları için Antalya Havalimanı geliş ve dönüş transfer operasyonu.",
    icon: Plane
  },
  {
    title: "Belek Transferleri",
    text: "Golf grupları, leisure acenteleri ve lüks otel rezervasyonları için güvenilir resort transferleri.",
    icon: MapPin
  },
  {
    title: "Side Transferleri",
    text: "Side, Manavgat ve çevre otel bölgeleri için düzenli acente transfer desteği.",
    icon: MapPin
  },
  {
    title: "Alanya Transferleri",
    text: "Net operasyon süreleri ve sabit tedarikçi fiyatlarıyla uzun mesafe havalimanı transfer planlaması.",
    icon: MapPin
  },
  {
    title: "Kemer Transferleri",
    text: "Kemer, Beldibi, Göynük, Çamyuva ve Tekirova hatlarında sahil transfer hizmetleri.",
    icon: MapPin
  },
  {
    title: "VIP Transferler",
    text: "Üst segment misafirler için executive araçlar, dikkatli sürücüler ve öncelikli operasyon takibi.",
    icon: Sparkles
  },
  {
    title: "Grup Transferleri",
    text: "Tur operatörleri, etkinlikler, incentive grupları ve seri operasyonlar için minibüs ve otobüs planlaması.",
    icon: Bus
  },
  {
    title: "7/24 Operasyon Desteği",
    text: "Değişiklikler, uçuş gecikmeleri ve saha güncellemeleri için WhatsApp operasyon ekibi.",
    icon: Headset
  }
];

export const destinations = [
  "Antalya City",
  "Lara",
  "Kundu",
  "Belek",
  "Kadriye",
  "Side",
  "Manavgat",
  "Alanya",
  "Kemer",
  "Beldibi",
  "Goynuk",
  "Camyuva"
];

export const destinationsTr = [
  "Antalya Merkez",
  "Lara",
  "Kundu",
  "Belek",
  "Kadriye",
  "Side",
  "Manavgat",
  "Alanya",
  "Kemer",
  "Beldibi",
  "Göynük",
  "Çamyuva"
];

export const fleet = [
  {
    title: "Private Sedan",
    capacity: "1-3 passengers",
    text: "For individual VIP guests, executives and premium FIT bookings."
  },
  {
    title: "Luxury Van",
    capacity: "1-6 passengers",
    text: "Ideal for families, agency clients and VIP arrivals requiring extra comfort."
  },
  {
    title: "Minibus",
    capacity: "7-16 passengers",
    text: "Efficient transport for small groups, leisure series and hotel allocations."
  },
  {
    title: "Coach",
    capacity: "17+ passengers",
    text: "Group transfer planning for tour operators, DMC programs and MICE movements."
  }
];

export const fleetTr = [
  {
    title: "Özel Sedan",
    capacity: "1-3 yolcu",
    text: "VIP misafirler, yöneticiler ve premium FIT rezervasyonları için."
  },
  {
    title: "Lüks Van",
    capacity: "1-6 yolcu",
    text: "Aileler, acente misafirleri ve konfor beklentisi yüksek havalimanı gelişleri için."
  },
  {
    title: "Minibüs",
    capacity: "7-16 yolcu",
    text: "Küçük gruplar, leisure serileri ve otel dağılımları için verimli transfer çözümü."
  },
  {
    title: "Otobüs",
    capacity: "17+ yolcu",
    text: "Tur operatörleri, DMC programları ve MICE hareketleri için grup transfer planlaması."
  }
];

export const trustItems = [
  { label: "B2B Transfer Supplier", icon: BriefcaseBusiness },
  { label: "Fixed Agency Rates", icon: WalletCards },
  { label: "24/7 WhatsApp Operation", icon: MessageCircle },
  { label: "English-speaking Support", icon: Globe2 },
  { label: "Local Ground Partner", icon: Handshake },
  { label: "Private, VIP and Group", icon: Users },
  { label: "Flight Monitoring", icon: Clock3 },
  { label: "Supplier Reliability", icon: ShieldCheck },
  { label: "Fast Email Quotations", icon: Mail }
];

export const trustItemsTr = [
  { label: "B2B Transfer Tedarikçisi", icon: BriefcaseBusiness },
  { label: "Sabit Acente Fiyatları", icon: WalletCards },
  { label: "7/24 WhatsApp Operasyon", icon: MessageCircle },
  { label: "İngilizce Destek", icon: Globe2 },
  { label: "Yerel Kara Partneri", icon: Handshake },
  { label: "Özel, VIP ve Grup", icon: Users },
  { label: "Uçuş Takibi", icon: Clock3 },
  { label: "Tedarikçi Güvenilirliği", icon: ShieldCheck },
  { label: "Hızlı Teklif Desteği", icon: Mail }
];

export const footerCopy = {
  en: {
    text:
      "Turkey-based B2B airport transfer supplier for travel agencies, DMCs, tour operators and overseas travel companies serving Antalya Airport and resort destinations.",
    pages: "Pages",
    desk: "Agency Desk",
    whatsapp: "WhatsApp operation",
    bottom: "B2B supplier services in Turkey.",
    services: "Private transfers · VIP transfers · Group transfers · 24/7 support"
  },
  tr: {
    text:
      "Antalya Havalimanı ve resort destinasyonlarında seyahat acenteleri, DMC'ler, tur operatörleri ve yurt dışı seyahat şirketleri için B2B transfer tedarikçisi.",
    pages: "Sayfalar",
    desk: "Acente Operasyon",
    whatsapp: "WhatsApp operasyon",
    bottom: "Türkiye'de B2B tedarikçi hizmetleri.",
    services: "Özel transferler · VIP transferler · Grup transferleri · 7/24 destek"
  }
} satisfies Record<Locale, Record<string, string>>;

export const contactCopy = {
  en: {
    eyebrow: "Fast quotation",
    title: "Send a transfer request",
    intro:
      "Share your agency details, route, date, flight information and passenger count. Our English-speaking operation team will reply with suitable vehicle options and agency rates.",
    agency: "Agency / Company Name",
    agencyPlaceholder: "Your travel agency or DMC",
    email: "Contact Email",
    emailPlaceholder: "operations@example.com",
    whatsapp: "WhatsApp Number",
    route: "Route",
    routePlaceholder: "AYT Airport to Belek",
    date: "Travel Date",
    datePlaceholder: "12 July 2026",
    passengers: "Passengers",
    passengersPlaceholder: "6 pax + luggage",
    notes: "Flight / Booking Notes",
    notesPlaceholder: "Arrival flight, hotel name, return transfer, vehicle preference or series group details",
    submit: "Send Transfer Request",
    emailDesk: "Email Agency Desk",
    whatsappButton: "WhatsApp"
  },
  tr: {
    eyebrow: "Hızlı teklif",
    title: "Transfer talebi gönderin",
    intro:
      "Acente bilgilerinizi, rota, tarih, uçuş bilgisi ve yolcu sayısını paylaşın. Operasyon ekibimiz uygun araç seçenekleri ve acente fiyatlarıyla dönüş yapacaktır.",
    agency: "Acente / Firma Adı",
    agencyPlaceholder: "Seyahat acenteniz veya DMC",
    email: "İletişim E-posta",
    emailPlaceholder: "operasyon@example.com",
    whatsapp: "WhatsApp Numarası",
    route: "Rota",
    routePlaceholder: "AYT Havalimanı - Belek",
    date: "Transfer Tarihi",
    datePlaceholder: "12 Temmuz 2026",
    passengers: "Yolcu Sayısı",
    passengersPlaceholder: "6 yolcu + bagaj",
    notes: "Uçuş / Rezervasyon Notları",
    notesPlaceholder: "Geliş uçuşu, otel adı, dönüş transferi, araç tercihi veya seri grup detayları",
    submit: "Transfer Talebi Gönder",
    emailDesk: "Acente Desk E-posta",
    whatsappButton: "WhatsApp"
  }
} satisfies Record<Locale, Record<string, string>>;
