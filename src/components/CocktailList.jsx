import { useMediaQuery } from "react-responsive";
import CocktailCard from "./CocktailCard";
import SelectBar from "./SelectBar";
import Search from "./Search";

const CocktailList = ({ cocktails, handleChange, sentence }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 688px)",
  });

  return (
    <>
      <div>{isDesktop && <SelectBar onResultChange={handleChange} />}</div>
      <Search />
      <div className='list-container'>
        <h5>{sentence}</h5>
        {cocktails.map((cocktail) => (
          <CocktailCard
            cocktails={cocktails}
            key={cocktail.idDrink}
            {...cocktail}
          />
        ))}
      </div>
    </>
  );
};

export default CocktailList;
