"use client";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="px-20">
      <div className="container mx-auto py-2 md:py-8   bg-white shadow-md rounded-md">
        <div className=" md:py-8 py-4">
          <h2 className="text-left font-bold mb-2 text-orange-700  text-sm">
            Shop CategoryLorem Products
          </h2>
          <p>This will contain products like lorem</p>
          <div className="flex md:gap-4 mb-4 md:mb-8 mt-4 flex-col gap-3">
            <h2 className="text-sm font-bold">
              Filter CategoryLorem Products:{" "}
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 md:py-2.5 mr-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Groceries
              </button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 md:py-2.5 mr-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Drinks
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-4 lg:gap-4 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
