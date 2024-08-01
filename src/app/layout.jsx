import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Fata Nabil Fikri | Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>{children}</body>
    </html>
  );
}