import React, {useState, useEffect} from 'react';
import CharacterContainer from '../Character-Container/Character-Container';
import axios from "axios";
import {CharacterDataStyle} from "./Character-Data-Style"



function CharacterPage() {
  const [url] = useState(`https://rickandmortyapi.com/api/character/`);
  const [Characters, setCharacters] = useState({});
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${url}?page=${page}&name=${search}`)
      .then((result) => {
        setCharacters(result.data.info);
        setResults(result.data.results);
      })
      .catch((error) => {
        console.log(error);
        setPage(1);
      });
  }, [search, page, url]);
  const nextHandler = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    if (page <= Characters.pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };
  const prevHandler = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(Characters.pages);
    }
  };
  return (
    <CharacterDataStyle>
      <div className="character-page-top">
        <h1>Character List</h1>
        <p>
          Welcome to our character list, all the various Rick and Morty
          Characters are in these following pages. Click on the button at the
          bottom of each character to see more information about them. Browse
          through the entire list and spend some time familiarizing yourself
          with all the interesting beings that make up the Rick and Morty
          multiverse. Or, if browsing isn't for you, use our search bar to find
          your favorite characters!
        </p>
      </div>
      <div className="searchAndPageButton">
        <div className="search-and-button">
          <div className="searchBar">
            <h2>Search</h2>
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              type="text"
              placeholder="Character Name"
            />
          </div>
          <div className="characterPageButton">
            <button onClick={(event) => prevHandler(event)}>Previous</button>
            <p>
              {page}/{Characters.pages}
            </p>
            <button onClick={(event) => nextHandler(event)}>Next</button>
          </div>
        </div>
        <div className="characters">
          {results.map((result, index) => (
            <CharacterContainer key={index} result={result} />
          ))}
        </div>
        <div className="characterPageButton">
          <button onClick={(event) => prevHandler(event)}>Previous</button>
          <p>
            {page}/{Characters.pages}
          </p>
          <button onClick={(event) => nextHandler(event)}>Next</button>
        </div>
      </div>
    </CharacterDataStyle>
  );
}

export default CharacterPage;