"use client";

import Blogs from "@/components/Blogs";
import "@/styles/style.css";
import BreadCumb from "@/components/BreadCumb";
const Blog = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Blogs" />

            <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 flex justify-center items-center gap-1 sm:gap-5">
                <div className="w-[30%] bg-white py-3 px-2 sm:px-5 self-start">
                    <h2 className="font-semibold mb-8 text-xs">Find By Categories</h2>
                    <ul className="flex flex-col justify-center items-start text-xs sm:text-sm gap-1.5 sm:gap-3 text-gray-500">
                        <li>Watch</li>
                        <li>Tv</li>
                        <li>Camera</li>
                        <li>Laptop</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-2.5 sm:gap-5 w-full">
                    <Blogs blogSize="50%" />
                    <Blogs blogSize="50%" />
                    <Blogs blogSize="50%" />
                    <Blogs blogSize="50%" />
                    <Blogs blogSize="50%" />
                    <Blogs blogSize="50%" />
                    <Blogs blogSize="50%" />
                </div>
            </div>
        </div>
    );
};

export default Blog;
