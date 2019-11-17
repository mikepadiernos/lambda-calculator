import React from "react";
import {cx, css} from "emotion";

const SpecialButton = props => {
  return (
    <button className='btn btn-specials'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button}
      </span>
    </button>
  );
};

export default SpecialButton;