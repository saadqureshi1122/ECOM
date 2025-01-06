"use client";

import BreadCumb from "@/components/BreadCumb";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";

const ForgotPassword = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Login" />
            {/* Forgot Password Container */}
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 login-container flex justify-center items-center h-[60vh]">
                {/* Forgot Password Box */}

                <div className="login-box bg-white p-5 rounded w-[450px]">
                    <h1 className="font-semibold tracking-widest text-center mb-3">
                        Reset Your Password
                    </h1>
                    <p className="text-xs tracking-wider text-gray-500 text-center mb-4">
                        We will send you an email to reset your password
                    </p>
                    <form action="">
                        <CustomInput
                            type="email"
                            name=""
                            id=""
                            className=""
                            placeholder="Email"
                        />
    
                        <div className="flex gap-3 items-center justify-center mt-3 flex-col">
                            <button className="capitalize bg-footer-color text-white w-[90px] h-[30px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300">
                                Login
                            </button>
                            <p className="capitalize text-sm rounded-full ">
                                <Link href={"/login"}>Cancle</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
