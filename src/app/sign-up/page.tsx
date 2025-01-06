"use client";

import BreadCumb from "@/components/BreadCumb";
import CustomInput from "@/components/CustomInput";

const SignUp = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Sign Up" />
            {/* Sign Up Container */}
            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 login-container flex justify-center items-center h-[60vh]">
                {/* Sign Up Box */}

                <div className="login-box bg-white p-5 rounded w-[450px]">
                    <h1 className="font-semibold tracking-widest text-center mb-4">
                        Create Account
                    </h1>
                    <form action="" className="flex flex-col gap-4">
                        <CustomInput
                            type="text"
                            name="first-name"
                            id="first-name"
                            className=""
                            placeholder="First Name"
                        />
                        <CustomInput
                            type="text"
                            name="last-name"
                            id="last-name"
                            className=""
                            placeholder="Last Name"
                        />
                        <CustomInput
                            type="email"
                            name="email"
                            id="email"
                            className=""
                            placeholder="Email"
                        />
                        <CustomInput
                            type="password"
                            name="password"
                            id="password"
                            className=""
                            placeholder="Password"
                        />

                        <button className="capitalize bg-footer-color text-white w-[90px] h-[30px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300 self-center">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
