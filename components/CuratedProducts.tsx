import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { CartegoryLinkProp } from "@/types/types";

export default function CuratedProducts() {
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
    <section className="lg:px-[6rem] mt-5">
      <div className="flex  bg-[#FF9900] py-4  font-medium px-4">
        <span> Curated For You | Shop Now</span>
      </div>
      <div className="  bg-slate-100 py-4 px-4  flex gap-2 flex-col ">
        <div className=" flex flex-col gap-3 ">
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
                    <span className="line-clamp-1 ">{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
