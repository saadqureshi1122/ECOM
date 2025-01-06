"use client";

import BreadCumb from "@/components/BreadCumb";
import CustomInput from "@/components/CustomInput";


const ResetPassword = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Reset Password" />
            {/* Reset Password Container */}
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 reset-password-container flex justify-center items-center h-[60vh]">
                {/* Reset Password Box */}

                <div className="reset-password-box bg-white p-5 rounded w-[450px]">
                    <h1 className="font-semibold tracking-widest text-center mb-4">
                        Reset Password
                    </h1>
                    <form action="" className="flex flex-col gap-4">
                        <CustomInput
                            type="text"
                            name=""
                            id=""
                            className=""
                            placeholder="Password"
                        />
                        <CustomInput
                            type="text"
                            name=""
                            id=""
                            className=""
                            placeholder="ConfirmPassword"
                        />

                        <button className="capitalize bg-footer-color text-white w-[90px] h-[30px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300 self-center">
                            ok
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
