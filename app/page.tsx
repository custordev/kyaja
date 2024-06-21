import CategoryBanner from "@/components/CategoryBanner";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import React from "react";

function page() {
  return (
    <div>
      <Hero />
      <CategoryBanner />
      <ProductList />
    </div>
  );
}

export default page;
