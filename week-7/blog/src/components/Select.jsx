import { forwardRef, useId } from "react";

export const Select = forwardRef(
  ({ options = [], label, className = "", ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block mb-1 pl-1 text-sm text-gray-600"
          >
            {label}
          </label>
        )}
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border border-gray-300 w-full ${className}`}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
