import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (SearchData) => {
    setSearch(SearchData);
    onSearchChange(SearchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(`geoApiOptions.url?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <AsyncPaginate
      placeholder="search for city "
      debounceTimeout={300}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
