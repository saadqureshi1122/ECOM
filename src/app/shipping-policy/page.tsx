"use client";

import BreadCumb from "@/components/BreadCumb";

const ShippingPolicy = () => {
    return (
        <div className="bg-gray-200 pb-8">
            <BreadCumb title="Shipping Policy" />
            {/* Shipping Policy Container */}

            <div className="w-[90%] max-w-[1500px] mx-auto mt-8 shipping-policy-container bg-white py-5 px-8 rounded"></div>
        </div>
    );
};

export default ShippingPolicy;
