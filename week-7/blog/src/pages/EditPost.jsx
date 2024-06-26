import { Container, PostForm } from "../components";
import { service } from "../appwrite/database";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py=8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};
