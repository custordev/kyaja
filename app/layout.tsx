import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/NavBar";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyaja-typescript",
  description: "Generated by custor dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
