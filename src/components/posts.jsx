//eslint-disable-next-line 
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import boar from "../boards.js";
import pos from "../posts.js";
import Posted from "./Posted";
import {BrowserRouter as Router,Routes,Route,Link,useRouteMatch,useParams} from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState(pos);

  function addPost(newPost) {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  }

  function deletePost(id) {
    setPosts(prevPosts => {
      return prevPosts.filter((noteItem, index) => {
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
