import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AddButton from "./AddButton.jsx";
import CoeurDeRockeur from "./CoeurDeRockeur.jsx";
import Search from "./Search.jsx";

import "./CocktailDetails.css";

const CocktailDetails = ({ toogleFavorite, favorites }) => {
  const [cocktail, setCocktail] = useState({});
  const { idDrink } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]));
  }, [idDrink]);

  const isMobile = useMediaQuery({
    query: "(max-width: 688px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 688px)",
  });

  const getIngredients = (cocktail) => {
    let ingredients = [];
    const ingredientsName = Object.entries(cocktail)
      .filter((ing) => ing[0].includes("Ingredient") && ing[1] !== null)
      .map((i) => i[1]);
    const measure = Object.entries(cocktail)
      .filter((mea) => mea[0].includes("Measure") && mea[1] !== null)
      .map((m) => m[1]);
    ingredientsName.forEach((name, i) =>
      ingredients.push({
        name: name,
        measure: measure[i],
      })
    );
    return ingredients;
  };

  return (
    <>
      <Search />
      <section className='details-container'>
        <div className='card-container media-details'>
          <Link to='/cocktails' className='link'>
            <FontAwesomeIcon
              className='back'
              icon={faChevronLeft}
              size={isDesktop ? "2x" : "lg"}
            />
          </Link>
          <div className='cocktail-card media-details'>
            <img
              className='image media-details'
              src={cocktail.strDrinkThumb}
              alt='cocktail'
            />
            <div className='grand-background media-details'>
              <div className='parent-background media-details'>
                <div className='child-background media-details'>
                  <h2 className='cocktail-name'>{cocktail.strDrink}</h2>
                </div>
              </div>
            </div>

            {isMobile && (
              <CoeurDeRockeur
                desktop={false}
                name={cocktail.strDrink}
                image={cocktail.strDrinkThumb}
                handleFavoriteClick={() => toogleFavorite(cocktail)}
                isFavorite={Boolean(
                  favorites.find((c) => favorites.includes(c.idDrink))
                )}
              />
            )}
            <div className='parent-ingredients'>
              {isDesktop && (
                <CoeurDeRockeur
                  desktop={isDesktop}
                  name={cocktail.strDrink}
                  image={cocktail.strDrinkThumb}
                  handleFavoriteClick={() => toogleFavorite(cocktail)}
                  isFavorite={Boolean(
                    favorites.find((c) => favorites.includes(c.idDrink))
                  )}
                />
              )}
              <AddButton className='arrowBtn' desktop={isDesktop} />
              <div className='child-ingredients arrow'>
                <ul className='basic'>
                  {getIngredients(cocktail).map((ingredient, i) => (
                    <li className='ingredients-list' key={i}>
                      {" "}
                      {ingredient.measure} {ingredient.name}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='recipe'>
              <p>{cocktail.strInstructions}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CocktailDetails;
