import React from "react";

const Search = props => {
  const { title, query, onChange, searchBy } = props;
  return (
    <div className="col-md-12 row">
      <h1>{title}</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="search"
          placeholder={searchBy}
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
