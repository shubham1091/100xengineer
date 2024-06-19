import React from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();

  return (
    <section className="overflow-hidden bg-gray-100">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="bg-white shadow-md rounded-lg md:flex items-center">
          <div className="md:w-1/2 p-6">
            <img
              alt={data.login}
              src={data.avatar_url}
              className="rounded-lg object-cover w-full"
              style={{ height: "400px" }}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              {data.name}
            </h1>
            <h2 className="text-lg text-gray-600 font-medium">{data.login}</h2>
            <p className="text-gray-700 mt-4">
              {data.bio || "No bio available"}
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-gray-700">
                {data.location || "Location not specified"}
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-gray-700">{data.followers} Followers</span>
              <span className="text-gray-700 ml-4">
                {data.following} Following
              </span>
            </div>
            <div className="mt-6">
              <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shubham1091");
  const data = await response.json();
  return data;
};
