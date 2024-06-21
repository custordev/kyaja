"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import FormSearch from "./FormSearch";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CircleHelp, User } from "lucide-react";
import { BiQuestionMark } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="">
      <header className="  py-4 px-2 relative flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-8">
          <Link className="flex " href="/">
            <Image
              className="w-16 h-16 rounded-full"
              src="/logo.svg"
              alt=""
              priority
              height={90}
              width={90}
            />
            <div className="flex flex-col">
              {" "}
              <p className="text-xl font-bold uppercase">KYAJA</p>
              <span className="text-sm">shop Smart Shop online</span>
            </div>
          </Link>
          <div className="hidden lg:block md:block">
            <FormSearch />
          </div>
          <div className="flex">
            <div className="flex relative space-x-2 items-center">
              <Link
                href="/login"
                type="button"
                className="relative inline-flex gap-0.5 items-center p-3 text-sm font-medium text-center rounded-lg  focus:outline-none "
              >
                <User />
                <p>Login</p>
              </Link>
            </div>
            <div className="flex relative space-x-2 items-center">
              <Link
                href="/login"
                type="button"
                className="relative gap-0.5 inline-flex items-center p-3 text-sm font-medium text-center rounded-lg  focus:outline-none "
              >
                <CircleHelp />
                <p>Help</p>
              </Link>
            </div>
            <div className="flex relative space-x-2 items-center">
              <Link
                href="/cart"
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg  focus:outline-none "
              >
                <AiOutlineShoppingCart className="text-xl sm:text-2xl text-lime-600" />

                <div className="absolute text-white inline-flex items-center justify-center w-6 h-6 text-xs font-bold  bg-red-500  rounded-full -top-1 -left-1 ">
                  <p>1</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}
