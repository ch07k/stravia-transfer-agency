import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://straviatransferagency.com"),
  title: {
    default: "B2B Antalya Airport Transfer Supplier | Stravia Transfer Agency",
    template: "%s | Stravia Transfer Agency"
  },
  description:
    "Turkey-based B2B airport transfer supplier for travel agencies, DMCs and tour operators. Antalya Airport transfers, Belek, Side, Alanya, Kemer, VIP and group transfers with 24/7 WhatsApp support.",
  keywords: [
    "B2B Antalya airport transfer supplier",
    "Antalya airport transfers for agencies",
    "Turkey DMC transfer partner",
    "Belek transfers",
    "Side transfers",
    "Alanya transfers",
    "Kemer transfers",
    "VIP transfers Antalya",
    "group transfers Antalya"
  ],
  openGraph: {
    title: "B2B Antalya Airport Transfer Supplier",
    description:
      "Reliable local ground partner in Antalya for agencies, DMCs, tour operators and overseas travel companies.",
    images: ["/antalya-airport-transfer-hero.png"],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
