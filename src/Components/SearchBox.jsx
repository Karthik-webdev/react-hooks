import React from "react";

// import "./SearchBox.css";

const SearchBox = props => (
  <input
    className="search-box"
    type="search"
    placeholder="Search..."
    onChange={e => props.onChange(e.target.value)}
  />
);

export default SearchBox;
