"use client";

import BreadCumb from "@/components/BreadCumb";
import Color from "@/components/Color";
import Image from "next/image";
import { useEffect, useState } from "react";

const Compare = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial width
      setScreenWidth(window.innerWidth);

      // Update width on window resize
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="bg-gray-200 pb-8">
      <BreadCumb title="Compare" />
      {/* Compare Container */}
      <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 flex flex-wrap items-center gap-5 compare-container">
        {/* Compare Box */}

        <div
          className={`flex flex-col bg-white relative px-5 py-3 justify-center items-center ${
            screenWidth > 1080
              ? "compare-box"
              : screenWidth > 640
              ? " w-[30.5%]"
              : "w-[47%]"
          } `}
        >
          <div className="flex flex-col gap-3 ">
            <Image
              src="/images/watch.jpg"
              alt="watch" width={150}
              height={150}
            />{" "}
            <h6 className="capitalize font-semibold text-xs sm:text-sm">
              Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g tablet{" "}
            </h6>
            <p className="text-gray-500 text-sm sm:text-base mb-3">$ 100</p>
          </div>
          <Image
            src="/images/cross.svg"
            alt="cross"
            width={100}
            height={100}
            className="absolute w-[20px] h-[20px] top-[2%] right-[5%]"
          />
          <div className="flex flex-col justify-center w-full border-t border-gray-200">
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Brand:</h2>
              <p className="text-xs sm:text-sm">Havels</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Type:</h2>
              <p className="text-xs sm:text-sm">Watch</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">
                Availablity:
              </h2>
              <p className="text-xs sm:text-sm whitespace-nowrap">In Stock</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Colors:</h2>
              <Color />
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Size:</h2>
              <p className="text-sm">S M</p>
            </div>
          </div>
        </div>
        {/* Compare Box */}

        <div
          className={`flex flex-col bg-white relative px-5 py-3 justify-center items-center ${
            screenWidth > 1080
              ? "compare-box"
              : screenWidth > 640
              ? " w-[30.5%]"
              : "w-[47%]"
          } `}
        >
          <div className="flex flex-col gap-3 ">
            <Image
              src="/images/watch.jpg"
              alt="watch"
              width={150}
              height={150}
            />{" "}
            <h6 className="capitalize font-semibold text-xs sm:text-sm">
              Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g tablet{" "}
            </h6>
            <p className="text-gray-500 text-sm sm:text-base mb-3">$ 100</p>
          </div>
          <Image
            src="/images/cross.svg"
            alt="cross"
            width={100}
            height={100}
            className="absolute w-[20px] h-[20px] top-[2%] right-[5%]"
          />
          <div className="flex flex-col justify-center w-full border-t border-gray-200">
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Brand:</h2>
              <p className="text-xs sm:text-sm">Havels</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Type:</h2>
              <p className="text-xs sm:text-sm">Watch</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">
                Availablity:
              </h2>
              <p className="text-xs sm:text-sm whitespace-nowrap">In Stock</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Colors:</h2>
              <Color />
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Size:</h2>
              <p className="text-sm">S M</p>
            </div>
          </div>
        </div>
        {/* Compare Box */}

        <div
          className={`flex flex-col bg-white relative px-5 py-3 justify-center items-center ${
            screenWidth > 1080
              ? "compare-box"
              : screenWidth > 640
              ? " w-[30.5%]"
              : "w-[47%]"
          } `}
        >
          <div className="flex flex-col gap-3 ">
            <Image
              src="/images/watch.jpg"
              alt="watch"
              width={150}
              height={150}
            />{" "}
            <h6 className="capitalize font-semibold text-xs sm:text-sm">
              Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g tablet{" "}
            </h6>
            <p className="text-gray-500 text-sm sm:text-base mb-3">$ 100</p>
          </div>
          <Image
            src="/images/cross.svg"
            alt="cross"
            width={100}
            height={100}
            className="absolute w-[20px] h-[20px] top-[2%] right-[5%]"
          />
          <div className="flex flex-col justify-center w-full border-t border-gray-200">
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Brand:</h2>
              <p className="text-xs sm:text-sm">Havels</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Type:</h2>
              <p className="text-xs sm:text-sm">Watch</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">
                Availablity:
              </h2>
              <p className="text-xs sm:text-sm whitespace-nowrap">In Stock</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Colors:</h2>
              <Color />
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Size:</h2>
              <p className="text-sm">S M</p>
            </div>
          </div>
        </div>
        {/* Compare Box */}

        <div
          className={`flex flex-col bg-white relative px-5 py-3 justify-center items-center ${
            screenWidth > 1080
              ? "compare-box"
              : screenWidth > 640
              ? " w-[30.5%]"
              : "w-[47%]"
          } `}
        >
          <div className="flex flex-col gap-3 ">
            <Image
              src="/images/watch.jpg"
              alt="watch"
              width={150}
              height={150}
            />{" "}
            <h6 className="capitalize font-semibold text-xs sm:text-sm">
              Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g tablet{" "}
            </h6>
            <p className="text-gray-500 text-sm sm:text-base mb-3">$ 100</p>
          </div>
          <Image
            src="/images/cross.svg"
            alt="cross"
            width={100}
            height={100}
            className="absolute w-[20px] h-[20px] top-[2%] right-[5%]"
          />
          <div className="flex flex-col justify-center w-full border-t border-gray-200">
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Brand:</h2>
              <p className="text-xs sm:text-sm">Havels</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Type:</h2>
              <p className="text-xs sm:text-sm">Watch</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">
                Availablity:
              </h2>
              <p className="text-xs sm:text-sm whitespace-nowrap">In Stock</p>
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Colors:</h2>
              <Color />
            </div>
            <div className="flex justify-between items-center gap-3 border-b border-gray-200 py-2">
              <h2 className="font-semibold text-base sm:text-lg">Size:</h2>
              <p className="text-sm">S M</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Compare;
