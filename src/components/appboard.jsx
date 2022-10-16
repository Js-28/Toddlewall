//eslint-disable-next-line 
import React, { useState } from "react";
import boar from "../boards.js";
import Board from "./Board";
import Header from "./Header";

function appboard(props) {

	return(
		<div>
		<Header  onAdd={props.addBoard} buttonName="Board"/>
     
      <hr />
		<h2 className="heading-tag">My Board</h2>
	      <br />
	       
	       {/*<Link to="/">Home</Link>*/}
	      
	      <div className="row">
	      
	      {props.boards.map((boardItem, index) => {
	        return (
	          
	          <Board
	            key={index}
	            id={index}
	            title={boardItem.name}
	            color={boardItem.color}
	            post={boardItem.posts}
	            onDelete={props.onDelete}
	           
	          />

	        );
	      })}
	      </div>

		
		</div>
    );
 }

 export default appboard;