import { useState, useEffect } from "react";
import SelectButton from "./SelectButton";

import "./SelectBar.css";

const SelectBar = ({ onResultChange }) => {
  const ingredientElements = [
    {
      value: "i=Vodka",
      name: "Vodka",
      sentence: "Vodka is so versatile isn't it?",
    },
    {
      value: "i=Rum",
      name: "Rum",
      sentence: "So you like Rum mate?",
    },
    {
      value: "i=Scotch",
      name: "Scotch",
      sentence: "Scotch, now we're talking!",
    },
  ];
  const categoryElements = [
    {
      value: "c=Shot",
      name: "Shot",
      sentence: "Shot, some like them strong!",
    },
    {
      value: "c=Cocktail",
      name: "Cocktail",
      sentence: "Cocktail, so you like mixology?",
    },
    {
      value: "c=Soft Drink / Soda",
      name: "Soft Drink / Soda",
      sentence: "Soda? Sweet tooth you!",
    },
  ];
  const alcoholicElements = [
    {
      value: "a=Alcoholic",
      name: "Alcoholic",
      sentence: "One drink of alcohol, one glass of water. You're welcome!",
    },
    {
      value: "a=Non_Alcoholic",
      name: "Non Alcoholic",
      sentence: "No alcohol for you babe!",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedSentence, setSelectedSentence] = useState("");

  const handleChange = (searchValue, sentence) => {
    setSelectedValue(searchValue);
    setSelectedSentence(sentence);
  };

  useEffect(() => {
    onResultChange(selectedValue, selectedSentence);
  }, [selectedValue]);

  return (
    <div className='container-full-height'>
      <div className='buttons-container'>
        <SelectButton
          title='Ingredient'
          name='ingredientButton'
          selectedValue={selectedValue}
          values={ingredientElements}
          handleChange={handleChange}
        />
        <SelectButton
          title='Category'
          name='categoryButton'
          selectedValue={selectedValue}
          values={categoryElements}
          handleChange={handleChange}
        />
        <SelectButton
          title='Alcoholic'
          name='alcoholicButton'
          selectedValue={selectedValue}
          values={alcoholicElements}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SelectBar;
