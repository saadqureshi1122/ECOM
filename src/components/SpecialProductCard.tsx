"use client";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

const SpecialProductCard = () => {
    return (
        <div className="flex justify-between items-center bg-white p-2 sm:p-4 rounded shadow-lg gap-3 w-[400px] xl:w-[450px]">
            {/* Image Section */}
            <div className="relative w-[120px] sm:w-[155px] h-[120px] sm:h-[155px]">
                <Image
                    src="/images/headphone.jpg"
                    fill
                    alt="headphone"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 155px, 120px"
                    className="rounded object-contain"
                />
            </div>

            {/* Details Section */}
            <div className="w-[60%] flex justify-center items-start flex-col">
                <h1 className="font-semibold text-sm sm:text-base">Havels</h1>
                <p className="capitalize text-[10px] sm:text-[13px] font-semibold">
                    Samsung Galaxy Note 10+ Mobile Phones; Sim...
                </p>
                <ReactStars
                    count={5}
                    size={20}
                    activeColor="#ffd700"
                    edit={false}
                    value={3}
                />
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    $100
                    <span className="line-through">$200</span>
                </p>

                {/* Countdown Timer */}
                <div className="flex justify-start items-center gap-1.5 sm:gap-2 my-1.5 sm:my-2">
                    <p className="text-sm sm:text-base">5 Days</p>
                    <div className="flex justify-center items-center gap-2">
                        <span className="bg-red-700 rounded-full text-white w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] flex justify-center items-center">
                            1
                        </span>
                        :
                        <span className="bg-red-700 rounded-full text-white w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] flex justify-center items-center">
                            1
                        </span>
                        :
                        <span className="bg-red-700 rounded-full text-white w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] flex justify-center items-center">
                            1
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <h6 className="text-sm sm:text-base">Products: 5</h6>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2.5 mb-2 sm:mb-4 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-1.5 sm:h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "45%" }}
                    ></div>
                </div>

                {/* Add to Cart Button */}
                <button className="bg-footer-color rounded-full px-3 sm:px-5 py-1 sm:py-2 text-white text-xs sm:text-sm hover:bg-light-yellow hover:text-black duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SpecialProductCard;
