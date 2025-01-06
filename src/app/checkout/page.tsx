"use client";

import { BiArrowBack } from "react-icons/bi";
import Watch from "../../images/watch.jpg";
import BreadCumb from "@/components/BreadCumb";
import Link from "next/link";
import Image from "next/image";

const Checkout = () => {
    const screenWidth = window.innerWidth;

    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Checkout" />
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 ">
                <div className="w-full flex justify-between flex-wrap gap-5 checkout-container">
                    <div
                        className={`flex flex-col gap-3  ${
                            screenWidth > 620 ? "first-col" : "w-full"
                        } `}
                    >
                        <h1 className="text-lg sm:text-2xl font-bold tracking-widest">
                            Dev Corner
                        </h1>
                        <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                            <Link href={"/cart"}>Cart</Link>/
                            <p className="text-gray-700">Information</p>/
                            <p className="text-gray-700">Shipping</p>/
                            <p className="text-gray-700">Payment </p>
                        </div>
                        <div>
                            <h6 className="font-semibold tracking-widest ">
                                Contact Information{" "}
                            </h6>
                            <p className="text-xs sm:text-sm">
                                Saad Qurashi (saad@gmail.com)
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 mt-4">
                            <h1 className="text-lg sm:text-2xl font-bold tracking-widest">
                                Shipping Address
                            </h1>
                            <form
                                action=""
                                className="w-full flex flex-col gap-5"
                            >
                                <select
                                    name=""
                                    id=""
                                    defaultValue={"Select Country"}
                                    className="outline-none px-5 py-1.5 rounded w-full text-sm sm:text-base"
                                >
                                    <option value="Select Country">
                                        Select Country
                                    </option>
                                </select>
                                <div className="flex justify-between items-center">
                                    <input
                                        type="text"
                                        className="w-[45%] outline-none px-5 py-1.5 rounded text-sm sm:text-base"
                                        placeholder="First Name"
                                    />
                                    <input
                                        type="text"
                                        className="w-[45%] outline-none px-5 py-1.5 rounded text-sm sm:text-base"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-[100%] outline-none px-5 py-1.5 rounded text-sm sm:text-base"
                                    placeholder="Address"
                                />
                                <input
                                    type="text"
                                    className="w-[100%] outline-none px-5 py-1.5 rounded text-sm sm:text-base"
                                    placeholder="Apartment, Suite, etc"
                                />
                                <div className="flex justify-between items-center">
                                    <input
                                        type="text"
                                        className="w-[30%] outline-none px-5 py-1.5 rounded text-sm sm:text-base"
                                        placeholder="City"
                                    />
                                    <select
                                        name=""
                                        id=""
                                        defaultValue={"Select State"}
                                        className="w-[30%] outline-none px-2 sm:px-5 py-1.5 rounded text-xs sm:text-base"
                                    >
                                        <option value="Select State">
                                            Select State
                                        </option>
                                    </select>
                                    <input
                                        type="text"
                                        className="w-[30%] outline-none px-5 py-1.5 rounded text-sm sm:text-base"
                                        placeholder="Zip Code"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="w-full sm:flex justify-between items-center mt-5 hidden ">
                            <Link
                                href={"/cart"}
                                className="flex items-center gap-3"
                            >
                                <BiArrowBack />
                                Return To Cart
                            </Link>
                            <Link
                                href={""}
                                className=" flex justify-center items-center capitalize bg-footer-color text-white w-[200px] h-[40px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300"
                            >
                                Continue To Shipping
                            </Link>
                        </div>
                    </div>
                    <div className={` flex flex-col gap-5 ${
                            screenWidth > 620 ? "second-col" : "w-full mt-5"
                        } `}>
                        <div className="border-b-zinc-300 border-b pb-3 flex justify-between items-center">
                            <div className=" flex gap-3 items-center">
                                <div className="relative w-[65px] sm:w-[80px]">
                                    <Image
                                        src={Watch}
                                        alt=""
                                        className="w-[100%]"
                                        width={100}
                                        height={100}
                                    />
                                    <span className="-top-2 -right-2 absolute w-[20px] h-[20px] bg-zinc-700 rounded-full flex justify-center items-center text-xs text-white">
                                        1
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 text-gray-500 font-semibold text-sm sm:text-base">
                                    <p>dsadsads</p>
                                    <p>s/ #fdsafds</p>
                                </div>
                            </div>
                            <p className="font-bold tracking-widest text-sm sm:text-base">$ 100</p>
                        </div>
                        <div className="flex flex-col gap-2 border-b-zinc-300 border-b pb-3">
                            <div className="flex justify-between items-center text-sm sm:text-base">
                                <h6 className="font-semibold ">Subtotal</h6>
                                <p className="text-gray-500">$ 1000</p>
                            </div>
                            <div className="flex justify-between items-center text-sm sm:text-base">
                                <h6 className="font-semibold">Subtotal</h6>
                                <p className="text-gray-500">$ 1000</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <h6 className="font-bold tracking-widest">Total</h6>
                            <p className="text-gray-500">$ 1000</p>
                        </div>
                        <div className="w-full flex justify-between items-center mt-5 sm:hidden">
                            <Link
                                href={"/cart"}
                                className="flex items-center text-sm sm:text-base gap-2 sm:gap-3"
                            >
                                <BiArrowBack />
                                Return To Cart
                            </Link>
                            <Link
                                href={""}
                                className=" flex justify-center items-center capitalize bg-footer-color text-white w-[170px] h-[35px] sm:w-[200px] sm:h-[40px] text-xs sm:text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300"
                            >
                                Continue To Shipping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
