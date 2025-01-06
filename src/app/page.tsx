"use client";
import Marquee from "react-fast-marquee";
import Blogs from "@/components/Blogs";
import ProductCard from "@/components/ProductCard";
import SpecialProductCard from "@/components/SpecialProductCard";
import { services } from "@/utils/Data";
import Image from "next/image";
import MainBanner from "../images/main-banner-1.jpg";
import Catbanner1 from "../images/catbanner-01.jpg";

const Home = () => {
  const screenWidth = window.innerWidth;

  const getSize = (screenWidth: number) => {
    if (screenWidth < 640) {
      return "50%";
    } else {
      return "287px";
    }
  };
  return (
    <>
      {/* Home Banners Section */}

      <section className="py-5 sm:py-8 home-wrapper-1">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center  lg:justify-between items-center gap-5 max-w-[1500px] w-[90%] mx-auto">
          <div className="relative w-full lg:w-[47%] col-1">
            <Image src={MainBanner} alt="main-banner-1.jpg" />
            <div className="absolute top-5 sm:top-12 left-5 ">
              <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                Superchared for pros.
              </p>
              <h2 className="my-2 sm:my-4 text-xl sm:text-3xl font-bold">
                iPad S13+ Pro
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-gray-600">
                From $999.00 or $41.62/mo.
              </p>
              <button className="uppercase text-xs sm:text-sm text-white px-3 sm:px-5 py-[6px] mt-3 sm:mt-4 rounded-full bg-footer-color">
                Buy Now
              </button>
            </div>
          </div>
          <div
            className={`${
              screenWidth > 640 && "col-2"
            } flex justify-between gap-2 w-full flex-wrap lg:justify-end items-center sm:gap-5  lg:w-[50%]`}
          >
            <div
              className={`relative ${screenWidth < 640 ? "w-[47%]" : "box"}`}
            >
              <Image src={Catbanner1} alt="catbanner-01.jpg" />
              <div className="absolute top-3 sm:top-8 left-5">
                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                  Best sake
                </p>
                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                  iPad S13+ Pro
                </h2>
                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                  From $999.00 or $41.62/mo.
                </p>
              </div>
            </div>
            <div
              className={`relative ${screenWidth < 640 ? "w-[47%]" : "box"}`}
            >
              <Image src={Catbanner1} alt="catbanner-02.jpg" />
              <div className="absolute top-3 sm:top-8 left-5">
                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                  New Arrival
                </p>
                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                  But ipad air
                </h2>
                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                  From $999.00 or $41.62/mo.
                </p>
              </div>
            </div>
            <div
              className={`relative ${screenWidth < 640 ? "w-[47%]" : "box"}`}
            >
              <Image src={Catbanner1} alt="catbanner-03.jpg" />
              <div className="absolute top-3 sm:top-8 left-5">
                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                  New Arrival
                </p>
                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                  But ipad air
                </h2>
                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                  From $999.00 or $41.62/mo.
                </p>
              </div>
            </div>
            <div
              className={`relative ${screenWidth < 640 ? "w-[47%]" : "box"}`}
            >
              <Image src={Catbanner1} alt="catbanner-04.jpg" />
              <div className="absolute top-3 sm:top-8 left-5">
                <p className="uppercase text-xs text-red-700 tracking-wide font-semibold">
                  New Arrival
                </p>
                <h2 className="my-1 sm:my-2 text-sm sm:text-xl font-bold">
                  But ipad air
                </h2>
                <p className="text-[10px] sm:text-sm font-semibold text-gray-600">
                  From $999.00 or $41.62/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}

      <section className=" py-5 sm:py-8 bg-gray-200 flex flex-col gap-5 home-wrapper-2">
        <div className="w-[98%] lg:w-[90%] max-w-[1500px] mx-auto flex justify-between sm:justify-evenly items-center sm:mb-16 ">
          {services.map((i, idx) => (
            <div
              className="w-[20%] h-[80px] sm:w-[20%] flex flex-col sm:flex-row justify-start items-start gap-2  sm:gap-3 p-2 "
              key={idx}
            >
              <Image
                src={i.image} // Dynamic image source
                alt="Service"
                width={20} // Static width
                height={20} // Static height
                className="sm:w-[30px] sm:[30px] lg:w-[40px] lg:h-[40px]" // Responsive Tailwind classes
              />
              <div className="flex flex-col gap-2px sm:gap-[5px] justify-start items-start w-[100%] h-[25px] ">
                <h6 className="capitalize text-start text-[7px] sm:text-[8px] font-bold whitespace-nowap sm:whitespace-normal lg:text-[10px] lg:text-sm ">
                  {i.title}
                </h6>
                <p className="capitalize text-[7px] sm:text-[9px]  lg:text-xs text-gray-800">
                  {i.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div
          className={`${
            screenWidth < 640 ? " categories-mob" : "categories"
          } bg-white py-2.5 sm:py-5 w-[95%] sm:w-[90%] max-w-[1500px] mx-auto  p-0 sm:px-16 flex justify-between sm:justify-center items-center flex-wrap px-3 `}
        >
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Music & Gaming
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/camera.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Cameras
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/camera.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Smart Tv
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/tv.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Smart Watches
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/headphone.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Music & Gaming
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/camera.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Cameras
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/camera.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Smart Tv
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/tv.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center w-[50%] lg:w-[25%] ">
            <div>
              <h6 className="font-semibold whitespace-nowrap text-[10px] sm:text-sm">
                Smart Watches
              </h6>
              <p className="text-xs sm:text-sm">10 items</p>
            </div>
            <Image
              src="/images/headphone.jpg"
              width={70}
              height={70}
              className="w-[70px]"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}

      <section className="py-5 sm:py-8 bg-gray-200 flex">
        <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto">
          <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
            Featured Collection
          </h1>
          <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
          </div>
        </div>
      </section>

      {/* Under Featured Collection Section */}

      <section className="py-5 sm:py-8 bg-gray-200 flex home-wrapper-4">
        <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto flex justify-between items-center flex-wrap gap-2.5 lg:gap-5 box-container">
          <div
            className={`${
              screenWidth < 800 ? "w-[47%]" : "box"
            }  bg-black text-white flex flex-col justify-center items-start p-3 rounded gap-1 h-[350px]`}
          >
            <div className=" ">
              <h6 className="font-semibold uppercase text-xs sm:text-sm">
                Big screen
              </h6>
              <h1 className="text-lg sm:text-2xl font-bold my-1.5 sm:my-2">
                Smart Watch Series 7
              </h1>
              <p className="text-xs sm:text-sm">
                From $399 or $16.62/mo. for 24 mo. "
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src="/images/Watch-3.jpg"
                alt="Watch"
                width={500} // Static width in pixels
                height={300} // Static height in pixels
                className="bg-black w-[100%]"
              />
            </div>
          </div>
          <div
            className={`${
              screenWidth < 800 ? "w-[47%]" : "box"
            } h-[350px] bg-white flex flex-col justify-center items-start p-3 rounded gap-7 `}
          >
            <div className=" ">
              <h6 className="font-semibold uppercase text-xs sm:text-sm">
                Studio display
              </h6>
              <h1 className="text-lg sm:text-2xl font-bold my-2">
                600 nits of brightness.
              </h1>
              <p className="text-xs sm:text-sm capitalize">
                27 inch 5k Retina display
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src="/images/screenshot-2022-04-25-at-14-18-31-tab-p12-pro-premium-tablet-with-12-6-2k-amoled-display-lenovo-us.png"
                alt=""
                width={500} // Static width in pixels
                height={300} // Static height in pixels
                className="bg-white w-[600px]"
              />
            </div>
          </div>
          <div
            className={`${
              screenWidth < 800 ? "w-[47%]" : "box"
            } bg-white flex flex-col justify-center items-start  p-3 rounded h-[350px] `}
          >
            <div className=" ">
              <h6 className="font-semibold text-xs">SmartPhones</h6>
              <h1 className="text-lg sm:text-2xl font-bold capitalize my-2">
                Smart phone note 20 ultra
              </h1>
              <p className="text-xs sm:text-sm capitalize">
                New in green from $999.00 or $41.62/mo. for 24 mo. Footnote*
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-[65%]">
                <Image
                  src="/images/Samsung.jpg"
                  alt="Samsung"
                  layout="responsive" // Responsive layout
                  width={70} // Aspect ratio width
                  height={70} // Aspect ratio height
                  className="bg-white"
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              screenWidth < 800 ? "w-[47%]" : "box"
            } bg-white  flex flex-col justify-center items-start  p-3 rounded h-[350px] `}
          >
            <div className=" ">
              <h6 className="font-semibold text-sm">Big screen</h6>
              <h1 className="text-lg sm:text-2xl font-bold my-2">
                Smart Watch Series 7
              </h1>
              <p className="text-xs sm:text-sm">
                From $399 or $16.62/mo. for 24 mo. "
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-[77%] sm:w-[70%] relative">
                <Image
                  src="/images/acc-removebg-preview.png"
                  alt="Account Image"
                  layout="responsive" // Responsive layout
                  width={100} // Aspect ratio width
                  height={100} // Aspect ratio height (square in this case)
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Products Section */}

      <section className="py-5 sm:py-8 bg-gray-200 flex">
        <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto">
          <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
            Special Products
          </h1>
          <div className="flex justify-evenly 2xl:justify-start items-center mt-5 flex-wrap gap-3">
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
          </div>
        </div>
      </section>

      {/* Popular Products Section */}

      <section className="py-5 sm:py-8 bg-gray-200 flex">
        <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto">
          <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
            Our Popular Products
          </h1>
          <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-1.5 sm:gap-3">
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
            <ProductCard productSize={getSize(screenWidth)} />
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-5 sm:py-8 bg-gray-200 flex">
        <div className="Px-2 w-[95%] sm:w-[90%] max-w-[1500px] mx-auto bg-white py-2.5 sm:py-5 shadow-lg rounded ">
          <Marquee>
            <div className=" Px-2 flex justify-between items-center w-[6%] sm:w-full gap-8 sm:gap-10">
              <Image src="/images/brand-01.png" width={100} height={100} alt="brand-01" />
              <Image src="/images/brand-02.png" width={100} height={100} alt="brand-02" />
              <Image src="/images/brand-03.png" width={100} height={100} alt="brand-03" />
              <Image src="/images/brand-04.png" width={100} height={100} alt="brand-04" />
              <Image src="/images/brand-05.png" width={100} height={100} alt="brand-05" />
              <Image src="/images/brand-06.png" width={100} height={100} alt="brand-06" />
              <Image src="/images/brand-07.png" width={100} height={100} alt="brand-07" />
              <Image src="/images/brand-08.png" width={100} height={100} alt="brand-08" />
            </div>
          </Marquee>
        </div>
      </section>

      {/* Latest Blogs Section */}

      <section className="py-5 sm:py-8 bg-gray-200 flex ">
        <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto ">
          <h1 className="font-bold tracking-wide text-xl sm:text-2xl">
            Our Latest Blogs
          </h1>
          <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-1.5 sm:gap-3">
            <Blogs blogSize={getSize(screenWidth)} />
            <Blogs blogSize={getSize(screenWidth)} />
            <Blogs blogSize={getSize(screenWidth)} />
            <Blogs blogSize={getSize(screenWidth)} />
            <Blogs blogSize={getSize(screenWidth)} />
            <Blogs blogSize={getSize(screenWidth)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
