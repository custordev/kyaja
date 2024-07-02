import { Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CategoryBanner() {
  return (
    <div className="lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
      <div className="container mx-auto py-8 overflow-hidden bg-slate-100 shadow-md rounded-md px-4 md:px-8 my-4 md:my-8">
        <h2 className="text-center font-bold mb-6 text-orange-700 text-base md:text-3xl">
          Shop By Category
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 items-center gap-2 md:grid-cols-8 lg:grid-col-8 ">
          <button className=" rounded-2xl shadow-md px-3 py-2 flex  gap-2 items-center text-center   text-sm flex-col sm:text-base">
            <div className="p-3 border  rounded-full">
              <div className="rounded-full  w-20 h-20">
                <Image
                  className=" rounded-full border"
                  src="/images/fashion.webp"
                  alt=""
                  priority
                  height={1080}
                  width={1080}
                />
              </div>
            </div>
            <span className="line-clamp-1">Product</span>
          </button>
        </div>
      </div>
    </div>
  );
}
