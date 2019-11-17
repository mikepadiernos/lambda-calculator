import React, {useState} from "react";
import {cx, css} from "emotion";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import NumberButton from './NumberButton';
import { numbers } from '../../../data'

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [numberButtons, setNumberButtons] = useState(numbers);

  const contNumbers = css`
    grid-area: numbers;
  `;

  const ntNumbers = css`
    display: grid;
    margin: 0;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto auto auto auto;
    grid-auto-flow: row dense;
  `;

  return (
    <div className={cx(contNumbers)}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className={cx(ntNumbers)}>
        {numberButtons.map((value, index) => {
          return (
            <NumberButton
              key={index}
              button={value}
            />
          )
        })}
       </div>
    </div>
  );
};

export default Numbers;