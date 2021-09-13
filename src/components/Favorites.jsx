import CocktailListFavorite from "./CocktailListFavorite";

import "./FavoritesList.css";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h5 className='favorites-title'>Your favorites cocktails</h5>
      <CocktailListFavorite favorites={favorites} />
    </div>
  );
};

export default Favorites;
