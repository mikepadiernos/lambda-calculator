import React, {useState} from "react";
import {cx, css} from "emotion";

//import any components needed
//Import your array data to from the provided data file

import SpecialButton from './SpecialButton';
import { specials } from '../../../data'

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [specialButtons, setSpecialButtons] = useState(specials);

  const contSpecials = css`
    grid-area: specials;
    padding-right: 8%;
    padding-bottom: 10px;
  `;

  const ntSpecials = css`
    display: grid;
    margin: 0;
    grid-template-columns: repeat(3, 100px);
    justify-content: space-between;
  `;

  return (
    <div className={cx(contSpecials)}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className={cx(ntSpecials)}>
        {specialButtons.map((value, index) => {
          return (
            <SpecialButton
              key={index}
              button={value}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Specials;