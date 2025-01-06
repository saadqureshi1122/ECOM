"use client";

import BreadCumb from "@/components/BreadCumb";
import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 pb-8">
      <BreadCumb title="Login" />
      {/* Login Container */}
      <div className="w-[90%] max-w-[1500px] mx-auto mt-8 login-container flex justify-center items-center h-[60vh]">
        {/* Login Box */}

        <div className="login-box bg-white p-5 rounded w-[450px]">
          <h1 className="font-semibold tracking-widest text-center mb-4">
            Login
          </h1>
          <form action="">
            <div className="flex flex-col w-full gap-3">
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
            </div>
            <p className="text-sm font-semibold my-5">
              <Link href={"/forgot-password"}>Forgot Password ?</Link>
            </p>
            <div className="flex gap-3 items-center justify-center mt-3">
              <button className="capitalize bg-footer-color text-white w-[90px] h-[30px] text-sm rounded-full hover:bg-light-yellow hover:text-black duration-300">
                Login
              </button>
              <button
                type="button"
                className="capitalize bg-light-yellow text-black w-[90px] h-[30px] text-sm rounded-full hover:bg-footer-color hover:text-white duration-300"
                onClick={() => router.push("/sign-up")}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
