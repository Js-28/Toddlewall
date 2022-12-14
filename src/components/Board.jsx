// eslint-disable-next-line
import React from "react";
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";


function Board(props) {
	function handleClick() {
    props.onDelete(props.id);
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
			          <p className="info">{props.color}</p>
			          {/*<p className="info">{props.post}</p>*/}
			          <button onClick={handleClick} className="dbuttons">
			          <DeleteIcon />
			          </button>
			    </div>
			   
			</div>
			
		);
 }
 export default Board;