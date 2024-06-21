"use client";
import React from "react";
import slide1 from "../public/images/carousel-image4.webp";
import slide3 from "../public/gif/gif1.gif";
import slide2 from "../public/images/carousel-image.webp";
import slide5 from "../public/images/carousel-image2.webp";
import slide4 from "../public/images/carousel-image3.webp";
import Link from "next/link";
import Image from "next/image";
import Carousel from "nuka-carousel";

export default function CarouselBanners() {
  const slides = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
    { image: slide4 },
    { image: slide5 },
  ];
  return (
    <div>
      <Carousel
        autoplay
        wrapAround
        adaptiveHeight
        adaptiveHeightAnimation
        className="w-full"
      >
        {slides.map((item, i) => (
          <Link key={i} href="/" className="block">
            <Image
              src={item.image}
              alt={`slide ${i + 1}`}
              width={712}
              height={384}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
