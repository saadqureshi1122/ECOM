
import { FaArrowLeft } from "react-icons/fa";
import Blog from "@/images/blog-1.jpg"
import BreadCumb from "@/components/BreadCumb";
import Link from "next/link";
import Image from "next/image";

const SingleBlog = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Dynamic Blog Name" />
            {/* Single Blog Container */}
            <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 single-blog-container">
                <Link
                    href={"/blog"}
                    className="flex items-center gap-2 text-gray-500"
                >
                    <FaArrowLeft />
                    Go Back To Blogs
                </Link>
                {/* Single Blog Box */}

                <div className="single-blog-box px-16 mt-5 flex flex-col justify-center items-start gap-5">
                    <h2 className="text-3xl font-semibold capitalize">
                        A Beautiful sunday morning renaissance
                    </h2>
                    <Image src={Blog} alt="Blog-1-Img" className="w-[80%] " />
                    <p className="text-sm text-gray-500 ">
                        There’s something magical about Sunday mornings. The
                        world seems to slow down, allowing us to savor the
                        peaceful moments that often slip away during the hectic
                        weekdays. As the first rays of sunlight gently pierce
                        through the curtains, the promise of a beautiful day
                        unfolds.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
