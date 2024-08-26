import React from "react";
import "./Search.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <span className="search-icon">
      <IoSearchOutline />
      </span>
    </div>
  );
};

export default SearchBar;
