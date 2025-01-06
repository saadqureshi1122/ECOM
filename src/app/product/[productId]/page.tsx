"use client"
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbGitCompare } from "react-icons/tb";
import ReactStars from "react-rating-stars-component";
import Watch from "@/images/watch.jpg";
import "@/styles/style.css";
import BreadCumb from "@/components/BreadCumb";
import Image from "next/image";
import Color from "@/components/Color";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    const screenWidth = window.innerWidth;

    const getSize = (screenWidth: number) => {
        if (screenWidth < 640) {
            return "50%";
        } else {
            return "287px";
        }
    };

    const copyToClipboard = (text: string) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    useEffect(() => {
        setOrderedProduct(true);
    }, []);

    useEffect(() => {
        if (quantity > 10) {
            setQuantity(10);
            alert("Can hold a maximum of 10");
        }
        if (quantity < 1) {
            setQuantity(1);
            alert("Can have at least 1");
        }
    }, [quantity]);

    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Dynamic Product Name" />
            {/* Single Product Container */}
            <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 single-product-container ">
                <div className="flex flex-col">
                    <div className="w-full flex flex-wrap gap-3 bg-white">
                        <div className=" w-full sm:w-[40%]  p-3 bg-white">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <Image
                                    src={Watch}
                                    alt=""
                                    className="w-[75%] sm:w-full object-cover object-center border"
                                />
                                <div className="flex gap-3 flex-wrap justify-between items-center small-product-img">
                                    <Image
                                        src={Watch}
                                        alt=""
                                        className=" border"
                                    />
                                    <Image
                                        src={Watch}
                                        alt=""
                                        className=" border"
                                    />
                                    <Image
                                        src={Watch}
                                        alt=""
                                        className=" border"
                                    />
                                    <Image
                                        src={Watch}
                                        alt=""
                                        className=" border"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" bg-white h-fit px-5 py-3 w-full sm:w-[55%]">
                            <div className="border-b-gray border-b pb-2">
                                <h1 className="font-semibold text-lg sm:text-2xl">
                                    Kids watches bulk 10 pack multi colored for
                                    students
                                </h1>
                            </div>
                            <div className="border-b-gray border-b pb-2 mt-5">
                                <h6 className="font-bold text-sm sm:text-base">
                                    $ 100
                                </h6>
                                <div className="flex items-center gap-3">
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        activeColor="#ffd700"
                                        edit={false}
                                        value={3}
                                    />
                                    <p className="text-gray-500 text-sm">
                                        ( 2 Reviews )
                                    </p>
                                </div>
                                <a
                                    href="#review"
                                    className="capitalize text-sm text-gray-500"
                                >
                                    write a review
                                </a>
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3.5 pb-2 mt-5">
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base">
                                        Type :
                                    </h4>
                                    <p className="text-sm text-gray-500 tracking-wider">
                                        Watch
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base">
                                        Brand :
                                    </h4>
                                    <p className="text-sm text-gray-500 tracking-wider">
                                        Havells
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base">
                                        Category :
                                    </h4>
                                    <p className="text-sm text-gray-500 tracking-wider">
                                        Watch
                                    </p>
                                </div>
                                <div className="flex items-start gap-5">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base ">
                                        Tags :
                                    </h4>
                                    <ul
                                        className={`flex flex-wrap gap-1.5 sm:gap-3   ${
                                            screenWidth < 640
                                                ? "product-tags-container-mob"
                                                : "product-tags-container"
                                        }`}
                                    >
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
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base">
                                        Avalability :
                                    </h4>
                                    <p className="text-sm text-gray-500 tracking-wider">
                                        In Stock
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base">
                                        Size :
                                    </h4>
                                    <span className="border w-[30px] h-[30px] flex justify-center items-center cursor-pointer font-bold text-xs">
                                        S
                                    </span>
                                    <span className="border w-[30px] h-[30px] flex justify-center items-center cursor-pointer font-bold text-xs">
                                        M
                                    </span>
                                    <span className="border w-[30px] h-[30px] flex justify-center items-center cursor-pointer font-bold text-xs">
                                        L
                                    </span>
                                    <span className="border w-[30px] h-[30px] flex justify-center items-center cursor-pointer font-bold text-xs">
                                        Xl
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center gap-2">
                                    <h4 className="font-semibold tracking-wider text-sm sm:text-base">
                                        Color :
                                    </h4>
                                    <Color />
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center-center gap-1.5 sm:gap-3 my-4">
                                    <div className="flex items-center gap-2">
                                        <h4 className="whitespace-nowrap font-semibold tracking-wider text-sm sm:text-base">
                                            Quantity :
                                        </h4>
                                        <div className="flex items-center gap-2 font-semibold">
                                            <button
                                                className="w-[25px] h-[25px] rounded bg-gray-200 flex justify-center items-center"
                                                onClick={() =>
                                                    setQuantity(
                                                        (prev) => prev - 1
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <p className="text-xs">
                                                {quantity}
                                            </p>
                                            <button
                                                className="w-[25px] h-[25px] rounded bg-gray-200 flex justify-center items-center"
                                                onClick={() =>
                                                    setQuantity(
                                                        (prev) => prev + 1
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="capitalize bg-footer-color text-white w-[120px] h-[30px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300">
                                            Add To Cart
                                        </button>
                                        <button className="capitalize bg-light-yellow text-black w-[120px] h-[30px] text-sm rounded-full hover:bg-footer-color hover:text-white duration-300">
                                            Buy It Now
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-2">
                                        <TbGitCompare />
                                        <p>Add To Compare</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AiOutlineHeart />
                                        <p>Add To Wishlist</p>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-1 flex-col">
                                    <h4 className="font-semibold tracking-wider flex items-center gap-1.5 sm:gap-3">
                                        <LiaShippingFastSolid />
                                        <p className="text-sm sm:text-base">
                                            Shipping & Returns :
                                        </p>
                                    </h4>
                                    <p className="text-xs sm:text-sm text-gray-500 tracking-wider capitalize">
                                        Free shipping and returns available on
                                        all orders! <br />
                                        we ship all us domestic orders within{" "}
                                        <strong className="text-black">
                                            5-10 business days!
                                        </strong>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <h4 className="font-semibold tracking-wider sm:text-base text-sm">
                                        Product Link
                                    </h4>
                                    <a
                                        href="javascripy:void(0);"
                                        onClick={() =>
                                            copyToClipboard("abcdaf")
                                        }
                                        className="text-gray-500 text-base sm:text-sm"
                                    >
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <h1 className="text-lg sm:text-2xl font-bold my-3">
                            Description
                        </h1>
                        <div className="px-5 py-4 rounded bg-white">
                            <p className="text-xs sm:text-sm text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Vel necessitatibus eaque, odit
                                nesciunt, sit eum veritatis cumque rem mollitia
                                fugiat, facere reiciendis incidunt voluptatibus
                                tempora! Perferendis ex accusantium
                                necessitatibus accusamus.
                            </p>
                        </div>
                    </div>
                    <div className="my-5" id="review">
                        <h1 className="text-lg sm:text-2xl font-bold my-3">
                            Reviews
                        </h1>
                        <div className="  px-5 py-4 rounded bg-white flex flex-col gap-3">
                            <div className="flex justify-between items-center border-gray border-b-1px pb-3 ">
                                <div className="flex flex-col gap-2">
                                    <h4 className="capitalize font-semibold">
                                        Customer reviews
                                    </h4>
                                    <div className="flex justify-normal items-center gap-2">
                                        <ReactStars
                                            count={5}
                                            size={18}
                                            activeColor="#ffd700"
                                            edit={false}
                                            value={3}
                                        />
                                        <p className="capitalize text-xs">
                                            Based on 2 reviews
                                        </p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <Link
                                            href={""}
                                            className="underline text-xs sm:text-base"
                                        >
                                            Write a review
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="border-gray border-b-1px pb-3 ">
                                <form
                                    action=""
                                    className="flex flex-col gap-3 w-full"
                                >
                                    <div>
                                        <h4 className="capitalize font-semibold te text-sm sm:text-base">
                                            Write a review
                                        </h4>
                                        <ReactStars
                                            count={5}
                                            size={18}
                                            activeColor="#ffd700"
                                            edit={true}
                                            value={3}
                                        />
                                    </div>
                                    <textarea
                                        name=""
                                        id=""
                                        className="border h-[120px] w-full outline-none px-2 py-1.5 font-semibold tracking-widest rounded resize-none text-sm"
                                        placeholder="Comment"
                                        required={true}
                                    ></textarea>
                                    <button
                                        className="text-xs sm:text-sm uppercase text-white px-8 py-[6px] sm:py-[8px] mt-4 rounded-full bg-footer-color self-end"
                                        type="submit"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </div>
                            <div className="pb-3 ">
                                <div className="flex items-center gap-2">
                                    <h2 className="font-semibold">Saad</h2>
                                    <ReactStars
                                        count={5}
                                        size={18}
                                        activeColor="#ffd700"
                                        edit={false}
                                        value={3}
                                    />
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatem aperiam amet
                                    est magnam, molestias facilis dignissimos
                                    nisi repellat eaque recusandae. Culpa eos
                                    officiis nemo asperiores quas est nesciunt
                                    modi! Nam?
                                </p>
                            </div>
                        </div>
                    </div>
                    <section className="mt-5">
                        <div className="w-full max-w-[1500px] mx-auto">
                            <h1 className="font-bold tracking-wide text-lg sm:text-2xl">
                                Our Popular Products
                            </h1>
                            <div className="flex justify-center xl:justify-start items-center mt-5 flex-wrap gap-3">
                                <ProductCard
                                    productSize={getSize(screenWidth)}
                                />
                                <ProductCard
                                    productSize={getSize(screenWidth)}
                                />
                                <ProductCard
                                    productSize={getSize(screenWidth)}
                                />
                                <ProductCard
                                    productSize={getSize(screenWidth)}
                                />
                                <ProductCard
                                    productSize={getSize(screenWidth)}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
