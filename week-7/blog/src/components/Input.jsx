import { forwardRef, useId } from "react";

export const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium text-gray-300 mb-1"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-4 py-2 rounded-lg bg-gray-800 text-gray-100 outline-none focus:bg-gray-700 duration-200 border border-gray-600 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);
