"use client";

import { useEffect, useState } from "react";
import Watch from "../../images/watch.jpg";
import BreadCumb from "@/components/BreadCumb";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cart = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const router = useRouter()

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
            <BreadCumb title="Cart" />
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 flex flex-col gap-12">
                <div className="w-full flex flex-col gap-8 ">
                    <div className="w-full flex justify-center  items-center  gap-3 sm:gap-5 font-semibold tracking-widest">
                        <h1 className="w-[40%]">Product</h1>
                        <h1 className="w-[20%]">Price</h1>
                        <h1 className="w-[20%]">Quantity</h1>
                        <h1 className="w-[20%]">Total</h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-full  -black flex justify-between items-center gap-5  ">
                            <div className="w-[40%] flex flex-col sm:flex-row gap-1 sm:gap-2 ">
                                <Image src={Watch} alt="" className="w-[60px] h-[60px] sm:w-[100px]" width={60} height={60}  />
                                <div>
                                    <h6 className="text-[10px] sm:text-base">
                                        Kids watches bulk 10 pack multi colored
                                        for students
                                    </h6>
                                    <p className="text-xs">
                                        Size : <span className="text-[10px]">L</span>
                                    </p>
                                    <p className="text-xs">
                                        Color : <span className="text-[10px]">#ffffff</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest text-sm sm:text-base">
                                <p>$ 100</p>
                            </div>
                            <div className="w-[20%] flex items-center">
                                <div className="flex flex-col">
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="bg-white h-[40px] flex justify-center items-center w-[25px] text-sm font-semibold">
                                    {quantity}
                                </p>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest text-sm sm:text-base">
                                <p>$ 100</p>
                            </div>
                        </div>
                        <div className="w-full  -black flex justify-between items-center gap-5  ">
                            <div className="w-[40%] flex flex-col sm:flex-row gap-1 sm:gap-2 ">
                                <Image src={Watch} alt="" className="w-[60px] h-[60px] sm:w-[100px]" width={60} height={60}  />
                                <div>
                                    <h6 className="text-[10px] sm:text-base">
                                        Kids watches bulk 10 pack multi colored
                                        for students
                                    </h6>
                                    <p className="text-xs">
                                        Size : <span className="text-[10px]">L</span>
                                    </p>
                                    <p className="text-xs">
                                        Color : <span className="text-[10px]">#ffffff</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest text-sm sm:text-base">
                                <p>$ 100</p>
                            </div>
                            <div className="w-[20%] flex items-center">
                                <div className="flex flex-col">
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <button
                                        className="w-[25px] h-[20px] rounded flex justify-center items-center bg-white"
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="bg-white h-[40px] flex justify-center items-center w-[25px] text-sm font-semibold">
                                    {quantity}
                                </p>
                            </div>
                            <div className="w-[20%] font-semibold tracking-widest text-sm sm:text-base">
                                <p>$ 100</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="flex justify-between gap-5 w-full ">
                    <button className="capitalize bg-footer-color text-white w-[170px] sm:w-[200px] h-[35px] sm:h-[45px] text-[10px] sm:text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300" onClick={() => router.push("/product")}>
                        Continue To Shopping
                    </button>
                    <div className="self-end flex flex-col gap-3 items-end">
                      <h1 className="font-bold text-base sm:text-2xl "> SubTotal: $ 1000 </h1>
                      <p className="text-xs sm:text-base"> Taxes and shipping calculated at checkout </p>
                      <button className=" capitalize bg-footer-color text-white w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] text-[10px] sm:text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300" onClick={() => router.push("/checkout")}>
                        Checkout
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
