import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Home/Nav";
import ClientProvider from "./components/Hoc/ClientProvider";
import Footer from "./components/Home/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const inter = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Jobify | Find Your Dream Job",
  description: "Find Your Dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
    </ClientProvider>
  );
}
