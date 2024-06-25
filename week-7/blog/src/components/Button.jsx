export const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverBgColor = "hover:bg-blue-700",
  focusBgColor = "focus:bg-blue-800",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${hoverBgColor} ${focusBgColor} focus:outline-none transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
