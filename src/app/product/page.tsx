"use client";

import ReactStars from "react-rating-stars-component";
import "@/styles/style.css";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import BreadCumb from "@/components/BreadCumb";
import Color from "@/components/Color";
import Image from "next/image";

const OurStore = () => {
  const [length, setLength] = useState<number>(2);
  const getProductSize = () => {
    if (length === 4) {
      return "25%";
    } else if (length === 2) {
      return "50%";
    } else if (length === 1) {
      return "100%";
    } else if (length === 3) {
      return "33.5%";
    } else {
      return "100%"; // Default value
    }
  };
  return (
    <div className="bg-gray-200 pb-8">
      <BreadCumb title="Our Store" />
      <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 flex justify-between items-start gap-2.5 sm:gap-5">
        <div className="w-[25%] flex flex-col gap-3 ">
          <div className="w-full bg-white py-3 px-5 rounded ">
            <h2 className="text-xs sm:text-base font-semibold mb-2.5 sm:mb-5">
              Shop By Categories
            </h2>
            <ul className="flex flex-col justify-center items-start text-[10px] sm:text-sm gap-1.5 sm:gap-3 text-gray-500">
              <li>Watch</li>
              <li>Tv</li>
              <li>Camera</li>
              <li>Laptop</li>
            </ul>
          </div>
          <div className="w-full bg-white py-3 px-2 sm:px-5 rounded">
            <h2 className="font-semibold text-xs sm:text-base mb-2.5 sm:mb-5">
              Filter By
            </h2>
            <div className="flex flex-col justify-center items-start gap-2">
              <h2 className=" font-semibold mb-1 sm:mb-2 text-[10px] sm:text-sm">
                Availablity
              </h2>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label
                  htmlFor=""
                  className="text-[9px] whitespace-nowrap sm:text-xs xl:text-sm text-gray-500"
                >
                  In Stock (1)
                </label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label
                  htmlFor=""
                  className="text-[9px] whitespace-nowrap sm:text-xs xl:text-sm text-gray-500"
                >
                  Out of Stock (1)
                </label>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <h6 className="font-semibold mb-1.5 sm:mb-3 text-[10px] sm:text-sm">
                Price
              </h6>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="border text-black block px-1 sm:px-2.5 sm:py-2  py-1 w-full text-[10px] sm:text-sm bg-transparent rounded-lg border-1  appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-[10px] sm:text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus-within:bg-white"
                  >
                    From
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="border text-black block px-1 sm:px-2.5 sm:py-2  py-1 w-full text-[10px] sm:text-sm bg-transparent rounded-lg border-1  appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-[10px] sm:text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 peer-focus-within:bg-white"
                  >
                    To
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-5">
              <h6 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                Colors
              </h6>
              <Color />
            </div>
            <div>
              <h6 className="font-semibold mb-1.5 sm:mb-3 text-xs sm:text-sm">
                Size
              </h6>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label
                  htmlFor=""
                  className="text-[9px] sm:text-xs xl:text-sm text-gray-500"
                >
                  S (2)
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label
                  htmlFor=""
                  className="text-[9px] sm:text-xs xl:text-sm text-gray-500"
                >
                  M (2)
                </label>
              </div>
            </div>
          </div>
          <div className="w-full bg-white py-3 px-5 rounded">
            <h2 className="text-xs sm:text-base font-semibold mb-2.5 sm:mb-5">
              Product Tags
            </h2>
            <ul className="flex flex-wrap gap-1.5 sm:gap-3 product-tags-container product-tags-container-mob">
              <li>Headphones</li>
              <li>Laptop</li>
              <li>Mobile</li>
              <li>Tv</li>
              <li>Watches</li>
              <li>Phone</li>
              <li>Pc</li>
              <li>Watches</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="w-full bg-white py-3 px-3 sm:px-5 rounded">
            <h2 className="text-xs font-semibold mb-2.5 sm:mb-5">
              Random Products
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col lg:flex-row justify-start items-center gap-1.5 sm:gap-3 border-b border-gray-300">
              <div className="relative w-[60px] sm:w-[160px] h-[60px] sm:h-[160px]">
                  <Image
                    src="/images/watch.jpg"
                    alt="watch"
                    layout="fill"
                    objectFit="cover" // Automatically adjusts based on container size
                  />
                </div>
                <div className="self-start">
                  <p className="capitalize text-[10px] sm:text-sm font-semibold">
                    kids headphones bulk 10 pack multi collored for students
                  </p>
                  <ReactStars
                    count={5}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                    value={3}
                  />
                  <p className="font-bold text-xs sm:text-base">$ 300</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-start items-center gap-1.5 sm:gap-3 ">
                <div className="relative w-[60px] sm:w-[160px] h-[60px] sm:h-[160px]">
                  <Image
                    src="/images/watch.jpg"
                    alt="watch"
                    layout="fill" // Automatically adjusts based on container size
                    objectFit="cover" // Ensures the image covers the container without distortion
                  />
                </div>

                <div className="self-start">
                  <p className="capitalize text-[10px] sm:text-sm font-semibold">
                    kids headphones bulk 10 pack multi collored for students
                  </p>
                  <ReactStars
                    count={5}
                    size={15}
                    activeColor="#ffd700"
                    edit={false}
                    value={3}
                  />
                  <p className="font-bold text-xs sm:text-base">$ 300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-2 w-[75%]">
          <div className="bg-white w-full py-1 sm:py-2 rounded flex justify-between items-center px-2.5 sm:px-5">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <p className="font-bold sm:font-semibold sm:text-base whitespace-nowrap text-[11px]">
                Sort By:{" "}
              </p>
              <select
                name=""
                id=""
                className="w-[100px] text-xs sm:text-base sm:w-[170px] focus:outline-none border px-1.5 sm:px-3 py-1.5"
              >
                <option value="manual">Featured</option>
                <option value="Best Selling">Best Selling</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, A-Z</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
                <option value="created-ascending">Date, old to new</option>
                <option value="created-descending">Date, new to old</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[10px] sm:text-sm whitespace-nowrap">
                21 Products
              </p>
              <div className="flex gap-1.5 items-center">
                <Image
                  width={30}
                  height={20}
                  src="/images/gr4.svg"
                  alt=""
                  className="w-[30px] h-[20px] cursor-pointer hidden sm:flex"
                  onClick={() => setLength(4)}
                />
                <Image
                  src="/images/gr3.svg"
                  alt=""
                  className="w-[30px] h-[20px] cursor-pointer hidden sm:flex"
                  onClick={() => setLength(3)}
                  width={30}
                  height={20}
                />
                <Image
                  src="/images/gr2.svg"
                  alt=""
                  className="w-[15px] h-[15px] sm:w-[30px] sm:h-[20px] cursor-pointer"
                  onClick={() => setLength(2)}
                  width={30}
                  height={20}
                />
                <Image
                  src="/images/gr.svg"
                  alt=""
                  className=" w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] cursor-pointer"
                  onClick={() => setLength(1)}
                  width={30}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
            <ProductCard productSize={getProductSize()} />
            <ProductCard productSize={getProductSize()} />
            <ProductCard productSize={getProductSize()} />
            <ProductCard productSize={getProductSize()} />
            <ProductCard productSize={getProductSize()} />
            <ProductCard productSize={getProductSize()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
