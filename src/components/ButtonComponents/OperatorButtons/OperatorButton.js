import React from "react";

const OperatorButton = props => {
  return (
    <button
      className='btn btn-operators'
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>
        {props.button.value}
      </span>
    </button>
  );
};

export default OperatorButton;