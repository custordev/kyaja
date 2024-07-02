import CategoryBanner from "@/components/CategoryBanner";
import Hero from "@/components/Hero";
import React from "react";

export default function page() {
  return (
    <div className=" bg-[#633185] min-h-[100vh] ">
      <Hero />

      {/* <ProductList /> */}
      <CategoryBanner />
    </div>
  );
}
