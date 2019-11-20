import React from "react";
import {cx, css} from "emotion";
import {btn} from "../../styles";

const btnNumbers = css`
  background-color: #094377;
  color: #fff;
`;


const NumberButton = props => {
  return (
    <button onClick={() => props.setDisplay(props.button)} className={cx(btn, btnNumbers, 'btn btn-numbers')}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button}
      </span>
    </button>
  );
};

export default NumberButton;