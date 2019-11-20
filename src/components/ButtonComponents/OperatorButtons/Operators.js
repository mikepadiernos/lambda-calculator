import React, {useState} from "react";
import {cx, css} from "emotion";

//import any components needed
//Import your array data to from the provided data file

import  OperatorButton from './OperatorButton';
import { operators } from '../../../data'

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorButtons, setOperatorButtons] = useState(operators);

  const contOperators = css`
    grid-area: operators;
  `;

  const ntOperators = css`
    display: grid;
    margin: 0;
    grid-template-columns: 100px;
    grid-template-rows: repeat(5, 100px);
    grid-gap: 10px;
  `;

  return (
    <div className={cx(contOperators)}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className={cx(ntOperators)}>
        {operatorButtons.map((value, index) => {
          return (
              <OperatorButton
                key={index}
                button={value}
              />
            )
        })}
       </div>
    </div>
  );
};

export default Operators;