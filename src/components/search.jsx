//eslint-disable-next-line 
import React from "react";

import HighlightIcon from "@material-ui/icons/Highlight";
import AddIcon from "@material-ui/icons/Add";

function Search() {
  return (
        <div className="collapse navbar-collapse search" id="navbarScroll">
      <form className="d-flex search-bar" role="search">
        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    );
}

export default Search;