import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Post = ({ post }) => {
  return (
    <Card className="m-4">
      <h2 className="text-left px-2">
        <strong>Posted by:</strong> 
        <Link to={`/users/${post.userProfileId}`}>{post.userProfile?.name}</Link>
      </h2>
      <CardImg top src={post.imageUrl} alt={post.title} style={{ width: '200px', height: 'auto' }} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>
          <strong>Created on:</strong> 
          {new Date(post.dateCreated).toLocaleDateString()}
        </p>
        <p>{post.caption}</p>
        <h6>comments:</h6>
        { <ListGroup>
            {post.comments?.map((c) => (
            <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup>
        }
      </CardBody>
    </Card>
  );
};