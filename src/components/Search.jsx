import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import './Header.css'

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setName(data.drinks))
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInput = () => {
    setSearchValue("");
  };

  return (
    <div className='parents-search'>
      <input
        value={searchValue}
        onChange={handleChange}
        type='text'
        placeholder='Search for a cocktail ?'
        id='input-search'
      />
      <div className='result'>
        <ul className='suggest-ul'>
          {searchValue &&
            name &&
            name.map((elem) => (
              <li className='suggest-li' key={elem.idDrink}>
                <NavLink
                  onClick={resetInput}
                  className='suggest'
                  to={`/cocktails/${elem.idDrink}`}
                >
                  {elem.strDrink}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
