import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { service } from "../appwrite/database";

export const Post = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  // Determine if the current user is the author of the post
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  // Fetch the post based on the slug parameter
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (slug) {
          const fetchedPost = await service.getPost(slug);
          if (fetchedPost) {
            setPost(fetchedPost);
          } else {
            navigate("/"); // If post not found, navigate to home page
          }
        } else {
          navigate("/"); // If no slug, navigate to home page
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        navigate("/"); // Handle error by navigating to home page
      }
    };

    fetchPost();
  }, [slug, navigate]);

  // Delete post handler
  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage); // Assuming this function deletes the featured image
        navigate("/"); // After deletion, navigate to home page
      }
    });
  };

  // Render the post details if post exists
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={service.previewFile(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="mr-3"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null; // If post is not fetched yet, render nothing (null)
};
