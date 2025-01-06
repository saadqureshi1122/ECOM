"use client";

import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiInfoCircle } from "react-icons/bi";
import BreadCumb from "@/components/BreadCumb";

const Contact = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Contact" />
            <div className="w-[95%] sm:w-[90%] max-w-[1500px] mx-auto mt-8 flex flex-col items-center justify-center gap-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1724.9997721951272!2d71.49137971064944!3d30.15142903971839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b37279cfd016b%3A0xca56fad3ed786ee6!2sRescue%201122!5e0!3m2!1sen!2s!4v1720580331297!5m2!1sen!2s"
                    width="100%"
                   
                    className="border-0 h-[350px] sm:h-[450px]"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="flex justify-between xl:justify-evenly flex-wrap items-center bg-white p-4 rounded w-full gap-5">
                    <form action="" className="flex flex-col gap-2 sm:gap-3 lg:w-[40%] w-full">
                        <h1 className="font-bold text-lg sm:text-2xl mb-2 sm:mb-4">Contact</h1>
                        <input
                            type="text"
                            className="bg-gray-100 border-0 outline-none px-2 py-1.5 font-semibold tracking-widest rounded text-sm"
                            placeholder="Name"
                            required={true}
                        />
                        <input
                            type="text"
                            className="bg-gray-100 border-0 outline-none px-2 py-1.5 font-semibold tracking-widest rounded text-sm"
                            placeholder="Email *"
                            required={true}
                        />
                        <input
                            type="text"
                            className="bg-gray-100 border-0 outline-none px-2 py-1.5 font-semibold tracking-widest rounded text-sm"
                            placeholder="Phone Number"
                            required={true}
                        />
                        <textarea
                            name=""
                            id=""
                            className="text-sm bg-gray-100 border-0 outline-none px-2 py-1.5 font-semibold tracking-widest rounded resize-none h-[150px]"
                            placeholder="Comment"
                            required={true}
                        ></textarea>
                        <button
                            className="self-start text-xs sm:text-sm uppercase text-white px-8 py-[6px] mt-4 rounded-full bg-footer-color"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                    <div className="self-start w-full lg:w-[40%] flex flex-col justify-start items-start gap-3">
                        <h1 className="font-bold text-2xl sm:mb-4 my-4 self-start">
                            Get In Touch
                        </h1>
                        <div className="flex gap-2 items-center">
                            <FaHome />
                            <address className="text-sm text-gray-500">
                                5F2R+PRW, Bahawalpur Rd, Basti Allahabad,
                                Multan, Punjab
                            </address>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoCall />
                            <a
                                className="text-sm text-gray-500"
                                href="tel:+92 3366351600"
                            >
                                +92 3366351600
                            </a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdEmail />
                            <a
                                className="text-sm text-gray-500"
                                href="mailto:saadqurashi333@gmail.com"
                            >
                                saadqurashi333@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <BiInfoCircle />
                            <p className="text-sm text-gray-500">
                                Monday - Friday 10pm - 8pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
