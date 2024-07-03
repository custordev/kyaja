import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CartegoryLinkProp } from "@/types/types";
import ProductCard from "./ProductCard";

export default function CategoryBanner() {
  const categoryLinks: CartegoryLinkProp[] = [
    {
      slug: "beauty-and-health",
      title: "Beauty And Health",
      image: "/gif/beauty.gif",
    },
    {
      slug: "appliancies",
      title: "Appliancies",
      image: "/gif/applianciesgif.gif",
    },
    { slug: "toys", title: "Toys", image: "/gif/toys.gif" },
    {
      slug: "accessories",
      title: "Accessories",
      image: "/gif/accessories.gif",
    },
    {
      slug: "official-stores",
      title: "Official Stores",
      image: "/gif/official-stores.gif",
    },
    {
      slug: "supermarket",
      title: "Supermarket",
      image: "/gif/supermarket.gif",
    },
  ];
  return (
    <div className="lg:px-[6rem] flex flex-col gap-3 ">
      <div className="py-4 overflow-hidden bg-slate-100 shadow-md rounded-md mt-2 ">
        <div className="grid grid-cols-6 px-2 gap-2 font-medium ">
          {categoryLinks.map((item, i) => (
            <Link
              href={item.slug}
              key={i}
              className="flex flex-col gap-2 items-center"
            >
              <div className="flex items-center">
                <Image
                  className=" w-48 "
                  src={item.image}
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
              <span className="line-clamp-1">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className=" bg-slate-100 py-4 px-4 mt-2 flex gap-2 flex-col rounded-md">
        <p className="font-medium">Your lastest Viewed Products</p>
        <div className="grid shadow-md  gap-4 lg:gap-4 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
