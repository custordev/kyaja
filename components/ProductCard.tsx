import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { IoCall } from "react-icons/io5";

export default function ProductCard() {
  return (
    <div>
      <div className=" p-2 rounded-md shadow-md  hover:shadow-2xl">
        <div className="flex justify-between gap-2 items-center">
          <small className=" font-semibold bg-yellow-100 py-1 px-2 rounded-md text-xs right-0">
            Drinks
          </small>
          <p className="bg-orange-100 rounded-md p-1 text-xs">-34%</p>
        </div>
        <Link
          href={`/product/product.slug`}
          className="flex items-center justify-center h-[60%]"
        >
          <Image
            className=" "
            src="/images/fashion.webp"
            alt=""
            priority
            height={1080}
            width={1080}
          />
        </Link>
        <div className="flex-col flex gap-1  ">
          <Link href={`/product/product.slug`} className=" ">
            <small className="text-orange-600 text-xs">Free delivery</small>
            <h2 className="text-xs lg:text-sm line-clamp-1">product Title</h2>

            <div className="flex justify-between text-xs gap-2 items-center">
              <p className=" font-bold text-xs "> UGX 43000</p>
              <s className=" text-xs">UGX 50,000</s>
            </div>
          </Link>
          <Link
            href={`/product/product.slug`}
            className="flex justify-between text-xs gap-2 items-center  "
          >
            <div className="flex ">
              <AiTwotoneStar className="lg:text-[22px] text-[13px] text-orange-500" />
              <AiTwotoneStar className="lg:text-[22px]  text-[13px] text-orange-500" />
              <AiTwotoneStar className="lg:text-[22px]  text-[13px] text-orange-500" />
              <AiTwotoneStar className="lg:text-[22px]  text-[13px] text-orange-500" />
            </div>
            <p className="text-[9px] text-purple-500">(4 verified ratings)</p>
          </Link>
          <div className="w-[100%] h-[3%] flex items-center justify-center">
            <div className="flex gap-2 w-full mt-1">
              <button className="flex w-[100%] lg:w-[100%] py-[.2rem] lg:py-[.4rem] bg-[#f68b1e] relative drop-shadow-lg font-[600] text-white text-[10px] lg:text-[14px] items-center justify-center lg:px-5 hover:bg-orange-700 transition-all tracking-[.1px] rounded-md">
                <GiShoppingCart className="text-[19px] absolute left-5 md:block lg:block hidden" />{" "}
                <h2> ADD TO CART</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
