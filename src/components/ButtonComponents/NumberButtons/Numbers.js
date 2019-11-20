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

const Numbers = (props) => {
  // STEP 2 - add the imported data to state

  const [numberButtons, setNumberButtons] = useState(numbers);

  const contNumbers = css`
    grid-area: numbers;
    padding-right: 8%;
  `;

  const ntNumbers = css`
    display: grid;
    margin: 0;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-auto-flow: row dense;
    justify-content: space-between;
    grid-gap: 10px;
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
              setDisplay={props.setDisplay}
            />
          )
        })}
       </div>
    </div>
  );
};

export default Numbers;