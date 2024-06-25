import { service } from "../appwrite/database";
import { Link } from "react-router-dom";

export const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link
      to={`/post/${$id}`}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={service.previewFile(featuredImage)} // Assuming this returns a valid image URL
          alt={title}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {/* Additional metadata or excerpt can be added here if needed */}
      </div>
    </Link>
  );
};
