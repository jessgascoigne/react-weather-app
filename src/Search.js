import React from "react";

import "./Search.css";

export default function Search(props) {
  return (
    <div className="search-wrapper">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="search-input form-control"
              placeholder="Search for a city..."
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              className="search form-control"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
