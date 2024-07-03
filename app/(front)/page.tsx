import CategoryBanner from "@/components/CategoryBanner";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import PayweekDeals from "@/components/Payweek-deals";
import React from "react";

export default function page() {
  return (
    <div className=" bg-[#633185] min-h-[100vh] ">
      <Hero />
      <CategoryBanner />
      <FlashSales />
      <PayweekDeals />
    </div>
  );
}
