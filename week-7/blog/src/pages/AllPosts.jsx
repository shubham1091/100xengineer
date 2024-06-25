import { useEffect, useState } from "react";
import { service } from "../appwrite/database";
import { Container, PostCard } from "../components";

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await service.getPosts([]);
        if (response) {
          setPosts(response.documents);
        } else {
          setError("Failed to fetch posts.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading posts...</p>;
  }

  if (error) {
    return <p className="text-red-600 text-center mt-4">{error}</p>;
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div
              className="p-2 w-1/4"
              key={post.$id}
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
