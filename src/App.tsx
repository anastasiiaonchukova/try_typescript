//@ts-ignore

import React, { useState } from "react";
import styles from "./App.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { SearchResults } from "./SearchResults";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [userRequest, setUserRequest] = useState("");
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyB3xVZ7r2uVRwrEpEtNlyngkvHCzjD05iw&cx=010783210426545237979:zlkcjyg1oya&q=${userRequest}`;

  const handleChange = (e: any) => {
    setUserRequest(e.target.value);
  };
  const handleClick = () => {
    axios({ method: "get", url: `${apiUrl}` }).then((response) => {
      console.log(response.data);
      setData({
        ...response.data,
      });
    });
  };
  return (
    <div className={styles.app}>
      <header className="App-header">
        <div id="search-container" className={styles.searchBar}>
          <input
            id="searchBar"
            type="search"
            placeholder="Search me"
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={handleClick}
            className={styles.searchButton}
          >
            <SearchIcon fontSize="small" />
          </button>
        </div>
      </header>
      <div id="main">
        <div className="gcse-search"></div>
        <SearchResults data={data} />
      </div>
    </div>
  );
}

export default App;
