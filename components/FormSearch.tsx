"use client";
import React, { useState } from "react";
import { products } from "@/data";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";
import { BiSearch } from "react-icons/bi";
// import { useCart } from "./CartContext";

export default function FormSearch() {
  const { handleSubmit, register, reset } = useForm();
  // const { setHandleSearches }: any = useCart();
  // const { setSearchInput }: any = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  // setSearchInput(searchQuery);
  const handleSearch = (e: any) => {
    e.preventDefault();
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    // setHandleSearches(filteredData);

    router.push("/search");
    reset();
  };
  return (
    <form className="flex gap-2" onSubmit={handleSearch}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="  text-sm rounded-md border focus:ring-lime-500 focus:border-lime-500 block w-[32vw] lg:pl-10 py-1.5 "
          placeholder="Search products, Categories, markets "
        />
      </div>
      <button
        type="submit"
        className="flex items-center text-white rounded-md bg-lime-600 gap-2 px-4"
      >
        <BiSearch />
        <span className="text-sm">Search</span>
      </button>
    </form>
  );
}
