import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import { AuthProvider } from "../context/AuthContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lexxes Group | Real Estate, Tourism & Investment Opportunities in India",
  description:
    "Lexxes Group offers real estate investment, tourism rewards, and financial growth opportunities. Join and grow your income with structured systems.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Lexxes Group",
    "real estate investment India",
    "tourism rewards",
    "passive income India",
    "network marketing business",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-ink`}>
        <AuthProvider>
          <LayoutWrapper>
            <main>{children}</main>
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}