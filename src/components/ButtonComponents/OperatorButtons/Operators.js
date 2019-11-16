import React, {useState} from "react";

//import any components needed
//Import your array data to from the provided data file

import  OperatorButton from './OperatorButton';
import { operators } from '../../../data'

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorButtons, setOperatorButtons] = useState(operators);

  return (
    <div className='btn-container container-operators'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorButtons.map((value, index) => {
        return (
            <OperatorButton
              key={index}
              button={value}
            />
          )
      })}
    </div>
  );
};

export default Operators;