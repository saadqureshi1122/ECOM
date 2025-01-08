"use client";
import { BiArrowToBottom, BiArrowToTop, BiSearchAlt2 } from "react-icons/bi";

import { useState } from "react";
import Link from "next/link";
import Compare from "../images/compare.svg";
import Wishlist from "../images/wishlist.svg";
import User from "../images/user.svg";
import Cart from "../images/cart.svg";
import Menu from "../images/menu.svg";
import "../styles/style.css";
import Image from "next/image";
const Header = () => {
  const [categoryDropdown, setCategoryDropdown] = useState<boolean>(false);
  return (
    <>
      <header className="header-top-strip py-1.5 sm:py-2 w-full text-sm text-white bg-dark-navy-blue border-zinc-500 border-b">
        <div className="mx-auto w-[95%] lg:w-[90%] max-w-[1500px] flex justify-between items-center gap-2 sm:gap-5 nav-color">
          <div className="text-[10px] sm:text-xs xl:text-base">
            Free Shipping Over $100 & Free Returns{" "}
          </div>
          <div>
            <p className="text-[10px] sm:text-xs xl:text-base">
              Hotline:
              <a href="tel:+92 3366351600">+92 3366351600</a>
            </p>
          </div>
        </div>
      </header>
      <header className="py-1.5 sm:py-2 w-full text-sm text-white header-mid bg-dark-navy-blue">
        <div className="gap-4  lg:gap-5 mx-auto lg:w-[90%] w-[95%] max-w-[1500px] flex sm:flex-row flex-col justify-between items-center ">
          <div className="flex justify-start items-center gap-3 w-full   ">
            <h1 className="text-lg text-nowrap lg:text-3xl font-semibold">Al Azeem</h1>
            <div className="flex justify-center items-center  flex-1 h-[20px] lg:h-[28px] ">
              <input
                type="text"
                className="px-3 flex-grow h-full text-xs rounded-sm outline-none text-black font-semibold tracking-widest"
                placeholder="Search Product Here"
              />
              <button className="w-[40px] lg:w-[60px] h-full rounded-sm flex justify-center items-center text-zinc-700 bg-light-yellow">
                <BiSearchAlt2 className="text-base " />
              </button>
            </div>
          </div>
          <div className="w-full  flex justify-end gap-4 xl:gap-8 items-center">
            <Link
              className="flex justify-center items-center  gap-2 "
              href={"/compare"}
            >
              <Image src={Compare} alt="Compare" className="h-[25px] xl:h-[30px]" />

              <p className="text-[9px] lg:text-sm leading-4 xl:leading-normal">
                Compare <br /> Products
              </p>
            </Link>
            <Link
              className="flex justify-center  items-center  gap-2 "
              href={"/wishlist"}
            >
              <Image src={Wishlist} alt="WishList" className="h-[25px] xl:h-[30px]" />

              <p className=" text-[9px] lg:text-sm leading-4 xl:leading-normal ">
                Favourite <br /> wishlist
              </p>
            </Link>
            <Link
              className="flex justify-center  items-center  gap-2"
              href={"/login"}
            >
              <Image src={User} alt="Account" className="h-[25px] xl:h-[30px]" />

              <p className="text-[9px] lg:text-sm whitespace-nowrap leading-4 xl:leading-normal">
                Log in <br /> My Account
              </p>
            </Link>
            <Link
              className="flex justify-center  items-center  gap-2"
              href={"/cart"}
            >
              <Image src={Cart} alt="Cart" className="h-[25px] xl:h-[30px]" />

              <div className="text-sm flex flex-col justify-center gap-1">
                <p className="bg-white text-black flex justify-center items-center h-[15px] rounded text-[9px] lg:text-sm">
                  0
                </p>
                <p className="text-[10px] sm:text-sm whitespace-nowrap leading-4 xl:leading-normal">
                  {"$ 500"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1.5 sm:py-2 w-full text-sm text-white bg-footer-color">
        <div className="w-[95%] sm:w-[90%] max-w-[1500px] flex gap-5 sm:gap-8 mx-auto">
          <div className="h-full relative">
            <button
              className="flex justify-between items-center gap-0.5 sm:gap-2   w-[125px] sm:w-[180px] py-[6px]"
              onClick={() => setCategoryDropdown((prev) => !prev)}
            >
              <div className="flex items-center gap-0.5 sm:gap-2">
                <Image
                  src={Menu}
                  alt="Shop Categories"
                  className="h-[15px] sm:h-[23px]"
                />

                <p className="uppercase text-[8px] sm:text-xs 2xl:text-sm">Shop Categories</p>
              </div>
              <div>
                {categoryDropdown ? (
                  <p>
                    <BiArrowToTop />
                  </p>
                ) : (
                  <p>
                    <BiArrowToBottom />
                  </p>
                )}
              </div>
            </button>
            <ul
              className={`bg-dark-navy-blue z-40 header-drop-down w-[120px] sm:w-[180px] absolute top-[44px] flex-col ${
                categoryDropdown ? "flex" : "hidden"
              }`}
            >
              <Link
                href={""}
                className="px-3 py-3  duration-200 hover:bg-footer-color"
              >
                Action
              </Link>
              <Link
                href={""}
                className="px-3 py-3  duration-200 hover:bg-footer-color"
              >
                Action
              </Link>
              <Link
                href={""}
                className=" px-3 py-3 duration-200 hover:bg-footer-color"
              >
                Action
              </Link>
              <Link
                href={""}
                className=" px-3 py-3 duration-200 hover:bg-footer-color"
              >
                Action
              </Link>
              <Link
                href={""}
                className=" px-3 py-3 duration-200 hover:bg-footer-color"
              >
                Action
              </Link>
            </ul>
          </div>
          <div className="flex justify-center items-center uppercase gap-1 sm:gap-3 text-[9px] sm:text-sm font-semibold">
            <Link href={"/"}>Home</Link>
            <Link href={"/product"} className={"whitespace-nowrap"}>
              Our Store
            </Link>
            <Link href={"/blog"}>Blogs</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
