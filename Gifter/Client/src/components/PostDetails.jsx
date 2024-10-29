import React, { useEffect, useState } from "react";
// import { ListGroup, ListGroupItem } from "reactstrap";
import { getPost } from "../services/PostService";
import { useParams } from "react-router-dom";
import { Post } from "./Post";

export const PostDetails = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then(setPost);
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Post post={post} />
          {/* <ListGroup>
            {post.comments.map((c) => (
              <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup> */}
        </div>
      </div>
    </div>
  );
};
