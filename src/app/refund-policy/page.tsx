"use client";

import BreadCumb from "@/components/BreadCumb";

const RefundPolicy = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Refund Policy" />
            {/* Privacy Policy Container */}

            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 refund-policy-container bg-white py-5 px-8 rounded"></div>
        </div>
    );
};

export default RefundPolicy;
