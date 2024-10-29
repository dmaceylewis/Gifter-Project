import React from "react";
import { Routes, Route } from "react-router-dom";
import { PostList } from "./PostList";
import { PostForm } from "./PostForm";
import { PostDetails } from "./PostDetails";
import { UserPosts } from "./UserPosts";

const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<PostList />} />
        
        <Route path="/posts/add" element={<PostForm />} />
        
        <Route path="/posts/:id" element={<PostDetails />} />

        <Route path="/users/:id" element={<UserPosts />} />
                
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
