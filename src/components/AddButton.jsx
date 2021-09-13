import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const AddButton = (props) => {
  const [counter, setCounter] = useState(1);
  let increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrement = () => setCounter(1);
  }

  return (
    <div className='add'>
      <FontAwesomeIcon
        className='arrow'
        onClick={increment}
        icon={faArrowCircleUp}
        size={props.desktop ? "2x" : "1x"}
      />
      <p className='counter'>{counter}p</p>
      <FontAwesomeIcon
        className='arrow'
        onClick={decrement}
        icon={faArrowCircleDown}
        size={props.desktop ? "2x" : "1x"}
      />
    </div>
  );
};

export default AddButton;
