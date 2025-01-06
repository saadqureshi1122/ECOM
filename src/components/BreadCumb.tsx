import Link from "next/link";

const BreadCumb = ({ title }: { title: string }) => {
    return (
        <div className="bg-white py-2 sm:py-4 flex justify-center items-center text-sm">
            <p className="text-xs sm:text-base">
                <Link href={"/"}>Home</Link> / {title}
            </p>
        </div>
    );
};

export default BreadCumb;
