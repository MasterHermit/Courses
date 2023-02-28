import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          className=" px-10 md:px-20 lg:px-30 py-2 mr-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300 "
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button
          className="px-4 py-2  bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
