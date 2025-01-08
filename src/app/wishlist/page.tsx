"use client";

import BreadCumb from "@/components/BreadCumb";
import "@/styles/style.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Wishlist = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Set initial width
          setScreenWidth(window.innerWidth);
    
          // Update width on window resize
          const handleResize = () => setScreenWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
    
          // Cleanup event listener on unmount
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, []);

    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Wishlist" />
            {/* Wishlist Container */}
            <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 flex justify-start items-center gap-5 flex-wrap wishlist-container">
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
                {/* Wishlist Box */}
                <div className={`${
                        screenWidth > 1080
                            ? "wishlist-box"
                            : screenWidth > 640
                            ? " w-[30.5%]"
                            : "w-[47%]"
                    } flex flex-col relative  pb-3 justify-center items-center`}>
                    <div className="flex flex-col gap-2 ">
                        <Image src="/images/watch.jpg" alt="watch" width={250} height={250}   fetchPriority="auto"  />{" "}
                        <h6 className="capitalize font-semibold text-sm">
                            Honor T17.0 1 gb ram 8 gb rom 7 inc with wi-fi+3g
                            tablet
                        </h6>
                        <p className="font-semibold">$ 100</p>
                    </div>
                    <Image
                        src="images/cross.svg"
                        alt="cross"
                        width={100}
                        height={100}
                        className="absolute w-[20px] h-[20px] top-[3%] right-[3%] cursor-pointer"
                    />
                </div>
              
                

               
            </div>
        </div>
    );
};

export default Wishlist;
