import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strutum Holding | Pan-African Corporate Services Group",
  description:
    "Strutum Holding delivers integrated Pan-African solutions in CSR & ESG (Strutum Impact) and Accounting, Taxation & Advisory (Strutum Advisory) — building sustainable value and driving Africa forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
