import { useState, useEffect } from "react";

const useFavoris = () => {

    const [favorites,setFavorites] = useState ([]);

    useEffect(() => {
          const favoritesInLS = JSON.parse(localStorage.getItem('favorite'));
          if (favoritesInLS) {
            setFavorites(favoritesInLS);
          }  
    }, []);
  
  
    useEffect (() => {
      localStorage.setItem('favorite', JSON.stringify(favorites))
    },[favorites])
  
    const toogleFavorite = (cocktailToAdd) => {
      if (favorites.find(c => c.idDrink === cocktailToAdd.idDrink)) {
        const newFavoriteList = favorites.filter((cocktail) => cocktail.idDrink !== cocktailToAdd.idDrink);
        setFavorites(newFavoriteList);
      } else {
        const newFavoriteList = [...favorites, cocktailToAdd]
        setFavorites(newFavoriteList);
      }
    }

    return [favorites, toogleFavorite];
}
 
export default useFavoris;