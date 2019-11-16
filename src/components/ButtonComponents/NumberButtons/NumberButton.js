import React from "react";

const NumberButton = props => {
  return (
    <button className='btn btn-numbers'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button}
      </span>
    </button>
  );
};

export default NumberButton;