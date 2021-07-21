import { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";

const CocktailList = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch(`https:www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
        .then(response => response.json())
        .then(data => setCocktails(data.drinks))
        
    }, []);
    
    return (
        <>
            <h1>Cocktails List</h1>   
            {cocktails.map((cocktail) => (
                <div>
                    <CocktailCard Key={cocktail.idDrink} {...cocktail} />
                </div>
               ))
            }
        </>
    )
};

export default CocktailList;


