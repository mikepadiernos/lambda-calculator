import React from "react";
import {cx, css} from "emotion";
import {btn} from "../../styles";

const btnOperators = css`
  background-color: #007291;
  color: #fff;
`;

const OperatorButton = props => {
  return (
    <button className={cx(btn, btnOperators,'btn btn-operators')}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button.char}
      </span>
    </button>
  );
};

export default OperatorButton;