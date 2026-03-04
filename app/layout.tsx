import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";
import { CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci";
import { RiTiktokFill } from "react-icons/ri";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ghana | Founders, Anthem, Pledge & Presidents",
    template: "%s | Ghana",
  },
  description:
    "An interactive Ghana history site featuring the Big Six founders, the national anthem and pledge, and profiles of Ghana's presidents from independence to today.",
  keywords: [
    "Ghana",
    "Ghana history",
    "Big Six",
    "Kwame Nkrumah",
    "Ghana presidents",
    "national anthem Ghana",
    "national pledge Ghana",
    "founding fathers Ghana",
  ],
  authors: [{ name: "Appiatu Group of Companies" }],
  openGraph: {
    type: "website",
    locale: "en",
    title: "Ghana | Founders, Anthem, Pledge & Presidents",
    description:
      "Explore Ghana's history: the Big Six, national anthem and pledge, and every president from independence to today.",
    siteName: "Ghana",
    images: [
      {
        url: "/founding_fathers.png",
        width: 1200,
        height: 630,
        alt: "Ghana founding fathers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana | Founders, Anthem, Pledge & Presidents",
    description:
      "Explore Ghana's history: the Big Six, national anthem and pledge, and every president from independence to today.",
    images: ["/founding_fathers.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/black-star-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ghana",
              description:
                "Explore Ghana's history: the Big Six founders, national anthem and pledge, and profiles of every president from independence to today.",
              url: baseUrl,
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <footer className="flex w-full flex-col items-center justify-center gap-2 border-t-2 border-white/50 py-3">
          <div className="flex items-center justify-center gap-2">
            <Link
              href={"https://www.linkedin.com/in/jason-appiatu/"}
              target="_blank"
            >
              <CiLinkedin className="text-2xl" />
            </Link>
            <Link
              href={"https://www.instagram.com/appiatu_jason"}
              target="_blank"
            >
              <CiInstagram className="text-2xl" />
            </Link>
            <Link
              href={"https://www.tiktok.com/@jasonkwameappiatu"}
              target="_blank"
            >
              <RiTiktokFill className="text-xl" />
            </Link>
            <Link
              href={"https://www.youtube.com/@jasonappiatu"}
              target="_blank"
            >
              <CiYoutube className="text-2xl" />
            </Link>
          </div>
          <p className="text-xs text-white/60">
            Copyright &copy; {new Date().getFullYear()}. Appiatu Group of
            Companies
          </p>
        </footer>
      </body>
    </html>
  );
}
