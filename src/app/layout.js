import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavBar from "@/components/layout/nav-bar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ARTC Qatar",
   description: "AlphaaRoad Trading and Construction",
  icons: {
    icon: '/logo/road-logo.svg',
  },
  keywords: ['road', 'construction', 'qatar', 'alphaaroad', 'artc'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="pt-16">{children}</main>
        <Image
          src="/images/alphaaroad-logo.jpg"
          alt="Sticky image"
          width={100}
          height={100}
          className="fixed bottom-4 right-4 z-50"
        />

        <Footer />
      </body>
    </html>
  );
}
