import React from "react";
import {cx, jsx, css} from "emotion";
import {btn} from "../../styles";

const NumberButton = props => {
  return (
    <button className={cx(btn, 'btn btn-numbers')}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button}
      </span>
    </button>
  );
};

export default NumberButton;