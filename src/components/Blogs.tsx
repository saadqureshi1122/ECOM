"use client";

import Image from "next/image";
import "../styles/style.css";
import { useRouter } from "next/navigation";

const Blogs = ({ blogSize }: { blogSize: string }) => {
  const router = useRouter();

  return (
    <div
      className={`relative  bg-white rounded flex flex-col justify-center items-center shadow-lg 
                ${blogSize === "287px" && "blog-box-home"}
                ${blogSize === "50%" && "blog-box"}
                 
            }`}
    >
      <div className="w-full">
        <Image src="/images/blog-1.jpg" alt="" className="w-full" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-1.5 sm:gap-3 px-2 pt-2 pb-3">
        <h6 className="text-sm sm:text-base font-semibold">6 Jun. 2024</h6>
        <h2 className="text-xs sm:text-base font-bold">
          A beautiful monday morning renaissance
        </h2>
        <p className="text-[9px] sm:text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae,
          natus cupiditate qui repudiandae pariatur.
        </p>
        <button
          className="bg-footer-color rounded-full px-3 sm:px-5 py-1 sm:py-2 text-white text-[10px] sm:text-sm self-start"
          onClick={() => router.push("/blog/dynamic-id")}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
