import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="lg:px-[6rem] mt-5">
      <div className="flex items-center justify-between bg-[#FF9900] py-4 font-medium px-4">
        <p className="text-center">Feautured Products</p>
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
        </div>
      </div>
    </section>
  );
}
