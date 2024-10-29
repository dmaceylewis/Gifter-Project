import  { useEffect,  useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams } from "react-router-dom";
import { Post } from "./Post";
import { getPost } from "../services/PostService";
import { getUserByIdWithPosts } from "../services/UserService";

export const UserPosts = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUserByIdWithPosts(id).then(setUser);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
        <h1>{user.name}</h1>
          <ListGroup>
            {user.posts?.map((p) => (
              <ListGroupItem><Post post={p}/></ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};
