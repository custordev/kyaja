import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FlashSales() {
  return (
    <section className="lg:px-[6rem] mt-5">
      <div className="flex items-center justify-between bg-sky-400 py-4 text-white font-medium px-4">
        <p>Flash Sales</p>
        <span>Time Left: </span>
        <Link href="/" className="flex gap-2">
          See All
          <ArrowRight />
        </Link>
      </div>
      <div className="  bg-slate-100 py-4 px-4  flex gap-2 flex-col ">
        <div className="grid shadow-md  gap-4 lg:gap-4 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
