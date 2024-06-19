import React from "react";

function Card({ username, btnText = "Visit me", imgUrl, about }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        alt="AirMax Pro"
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h3 className="text-lg font-semibold text-white">{username}</h3>
        <p className="mt-2 text-sm text-gray-300">{about}</p>
        <button className="mt-2 inline-flex items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
