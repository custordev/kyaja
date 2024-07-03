import Navbar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // dark:bg-gradient-to-t from-indigo-950  to-black bg-indigo-200
    <body className="">
      <ToastContainer />
      <TopBanner />
      <Navbar />
      {children}
    </body>
  );
}
