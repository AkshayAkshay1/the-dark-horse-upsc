import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Dark Horse — UPSC CSE",
    template: "%s | The Dark Horse — UPSC CSE",
  },
  description:
    "Because UPSC demands more than information. A platform anchored in PYQs, enriched with current affairs, and refined through disciplined answer writing.",
  keywords: [
    "UPSC",
    "CSE",
    "Civil Services",
    "IAS",
    "UPSC Coaching",
    "UPSC Test Series",
    "UPSC Current Affairs",
    "PYQ",
    "Answer Writing",
    "The Dark Horse",
  ],
  authors: [{ name: "The Dark Horse UPSC CSE" }],
  openGraph: {
    title: "The Dark Horse — UPSC CSE",
    description:
      "Because UPSC demands more than information. A platform anchored in PYQs, enriched with current affairs, and refined through disciplined answer writing.",
    siteName: "The Dark Horse UPSC CSE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
