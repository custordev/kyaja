import React from "react";
import CarouselBanners from "./CarouselBanners";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" bg-[url('/images/bgkyaja.png')] bg-cover flex justify-between w-full min-h-[70vh] lg:px-[6rem] md:pt-[3rem] pt-[2rem] lg:pt-[3.2rem]">
      <div className="rounded-sm hidden  lg:flex lg:w-[18%] bg-white px-3 line-clamp-1 capitalize text-xs  flex-col gap-4">
        <p>Beauty and Health</p>
        <p>Appliances</p>
        <p>Toys</p>
        <p>Accessories</p>
        <p>Official Stores</p>
        <p>Supermarket</p>
        <p>Electronics </p>
        <p>Digital Watches</p>
        <p>Beddings</p>
        <p>Bags</p>
        <p>Phones</p>
        <p>Jewelry and Accessories</p>
        <p></p>
      </div>
      <div className="lg:w-[62%] w-full ml-4">
        <CarouselBanners />
      </div>
      <div className="lg:w-[20%] hidden lg:flex flex-col gap-2">
        <div className="w-full h-1/2 bg-[#ffffff] rounded-sm p-3 flex flex-col gap-6">
          <div className="flex gap-2 h-[33%]">
            <img src="/help.png" alt="" className="w-9 h-9 object-contain" />
            <div className="flex flex-col">
              <h2 className="text-sm text-[#313133] font-semibold">
                HELP CENTER
              </h2>
              <p className="text-xs text-[#313133]">Guide To Customer Care</p>
            </div>
          </div>
          <div className="flex gap-2 h-[33%]">
            <img src="/return.png" alt="" className="w-9 h-9 object-contain" />
            <div className="flex flex-col">
              <h2 className="text-sm text-[#313133] font-semibold">
                EASY RETURN
              </h2>
              <p className="text-xs text-[#313133]">Quick Refund </p>
            </div>
          </div>
          <div className="flex gap-2 h-[33%]">
            <img src="/sell.png" alt="" className="w-9 h-9 object-contain" />
            <div className="flex flex-col">
              <h2 className="text-sm text-[#313133] font-semibold">
                SELL ON KYAJA
              </h2>
              <p className="text-xs text-[#313133]">Millions Of Visitors</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 bg-[#] rounded-md">
          <Image
            width={1080}
            height={1080}
            src="/gif/livenow.gif"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
