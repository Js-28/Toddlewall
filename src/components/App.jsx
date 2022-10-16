//eslint-disable-next-line 
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import boar from "../boards.js";
import Board from "./Board";
import {BrowserRouter as Router,Routes,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import Posts from "./posts";
import Appboard from "./appboard";

function App() {
  const [boards, setBoards] = useState(boar);

  function addBoard(newBoard) {
    setBoards(prevBoards => {
      return [...prevBoards, newBoard];
    });
  }

  function deleteBoard(id) {
    setBoards(prevBoards => {
      return prevBoards.filter((boardItem, index) => {
        return index !== id;
      });
    });
  }

  return (
      <div>
      {/*<Header  onAdd={addBoard} />
     
      <hr />*/}
      
     
      <Routes>
      <Route path="/" element={<Appboard boards={boards} addBoard={addBoard} onDelete={deleteBoard} />} />
      <Route path="/board" element={<Posts />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
