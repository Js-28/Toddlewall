//eslint-disable-next-line 
import React from "react";
import Search from "./search";
import Createwall from "./Createwall";
import HighlightIcon from "@material-ui/icons/Highlight";
// import AddIcon from "@material-ui/icons/Add";
import Createpost from './Createpost';

function Header(props) {
  return (
    <header className='navbar navbar-expand-lg '>
  <div className="container-fluid">
  <HighlightIcon />
    <a className="navbar-brand" href="\">Toddle Wall</a>
    <Search />
    {props.buttonName=== "Board" ?
    <Createwall addWall={props.onAdd} buttonType={props.buttonName}/>:
    <Createpost addWall={props.onAdd} buttonType={props.buttonName}/>}
  </div>
    </header>
  );
}

export default Header;
