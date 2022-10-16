// eslint-disable-next-line
import React from "react";
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";


function Posted(props) {
	function handleClick() {
    props.onDelete(props.id);
  }

  function handleLike() {
    
  }

  return (
  		
			<div className="card col-md-3 col-lg-3">
			<Link to="/board">
			    <div className="top">
			   {/* <p>{props.id}</p>*/}
			        <h2 className="name">{props.title}</h2>
			        
			        </div>
			  </Link>
			        <div className="bottom">
			          <p className="info">{props.img}</p>
			          <p className="info">{props.content}</p>
			          <button onClick={handleClick}>
			          	<DeleteIcon />
			          </button>
			          <button onClick={handleLike}>DELETE</button>
			    </div>
			   
			</div>
			
		);
 }
 export default Posted;