import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const golos = localFont({
  src: [
    { path: "./fonts/golos-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/golos-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-golos",
  display: "swap",
});

const plex = localFont({
  src: "./fonts/ibm-plex-mono.ttf",
  weight: "400",
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ягель A1 — воздух, который видно",
  description:
    "Настольные E-Ink часы и монитор воздуха: CO₂, температура, влажность и давление. Полностью локально, без аккаунта. HTTP/JSON, MQTT, Home Assistant и открытые исходники под MIT.",
  icons: {
    icon: "/brand/yagel-mark.svg",
    apple: "/brand/yagel-mark-512-paper.png",
  },
  openGraph: {
    title: "Ягель A1 — воздух, который видно",
    description: "E-Ink часы и монитор воздуха. Локально. Открыто. Ваше.",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ягель A1 — воздух, который видно",
    description: "Настольные E-Ink часы и локальный монитор воздуха.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${golos.variable} ${plex.variable}`}>{children}</body>
    </html>
  );
}
