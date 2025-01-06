type CustomInputProp = {
    name: string;
    type: string;
    placeholder: string;
    className: string;
    id: string;
};

const CustomInput = ({
    name,
    className,
    placeholder,
    type,
    id,
}: CustomInputProp) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className={`w-full border-none outline-none text-sm font-semibold tracking-widest px-3 py-1.5 bg-gray-100 ${className}`}
            placeholder={placeholder}
        />
    );
};

export default CustomInput;
