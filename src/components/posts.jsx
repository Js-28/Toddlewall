//eslint-disable-next-line 
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import pos from "../posts.js";
import Posted from "./Posted";


function Post() {
  const [posts, setPosts] = useState(pos);

  function addPost(newPost) {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  }

  function deletePost(id) {
    setPosts(prevPosts => {
      return prevPosts.filter((boardItem, index) => {
        return index !== id;
      });
    });
  }

  return (
      <div>
      <Header  onAdd={addPost} buttonName="Post" />
     
      <hr />
      
      <h2 className="heading-tag">My Posts</h2>
      <br />
      
      <div className="row">
      {posts.map((boardItem, index) => {
        return (
          <Posted
            key={index}
            id={index}
            title={boardItem.title}
            image={boardItem.img}
            content={boardItem.content}
            onDelete={deletePost}
           
          />
        );
      })}
     
      
      </div>
      
      <Footer />
    </div>
  );
}

export default Post;
