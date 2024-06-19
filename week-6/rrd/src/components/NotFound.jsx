import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist. Please check the
          URL or go back to the{" "}
          <Link
            to="/"
            className="text-orange-700 hover:underline"
          >
            homepage
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
