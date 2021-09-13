import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import CocktailList from "./components/CocktailList";
import CocktailDetails from "./components/CocktailDetails";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Age from "./components/Age";
import Favorites from "./components/Favorites";
import useFavoris from "./components/useFavoris";

import "./components/Home.css";
import "./App.css";

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [sentence, setSentence] = useState(
    "Let's put some color in your drink!"
  );
  const [favorites, toogleFavorite] = useFavoris();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  const onSearchByCriteria = (selectedValue, selectedSentence) => {
    console.log(selectedValue, selectedSentence);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${selectedValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks);
        setSentence(selectedSentence);
      });
  };

  return (
    <div className='app'>
      <Age />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <CocktailList
              cocktails={cocktails}
              sentence={sentence}
              handleChange={onSearchByCriteria}
            />
          </Route>
          <Route exact path='/cocktails'>
            <CocktailList
              cocktails={cocktails}
              sentence={sentence}
              handleChange={onSearchByCriteria}
            />
          </Route>
          <Route exact path='/cocktails/:idDrink'>
            <CocktailDetails
              favorites={favorites}
              toogleFavorite={toogleFavorite}
            />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={favorites} />
          </Route>
        </Switch>
        <Footer handleChange={onSearchByCriteria} />
      </BrowserRouter>
    </div>
  );
};

export default App;
