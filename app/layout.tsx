import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Boracay Island Hopping Tours | Pearl Of Sean",
  description: "Premium Boracay island hopping tours, snorkeling adventures, sunset cruises, and unforgettable ocean experiences with Pearl Of Sean.",
  keywords: [
    "Boracay Island Hopping",
    "Boracay Snorkeling Tour",
    "Boracay Sunset Cruise",
    "Boracay Activities",
    "Premium Boracay Tours",
    "Best Island Hopping Boracay"
  ],
  openGraph: {
    title: "Boracay Island Hopping Tours | Pearl Of Sean",
    description: "Premium Boracay island hopping tours, snorkeling adventures, sunset cruises, and unforgettable ocean experiences with Pearl Of Sean.",
    url: "https://pearlofsean.com",
    siteName: "Pearl Of Sean",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pearl Of Sean Boracay Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
