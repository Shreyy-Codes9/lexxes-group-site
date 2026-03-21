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
  title: "Lexxes Group",
  description: "Real Estate • Tourism • Stock Market Courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-navy-dark text-text-primary`}
      >
        <AuthProvider>
          <LayoutWrapper>
            <main>{children}</main>
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}