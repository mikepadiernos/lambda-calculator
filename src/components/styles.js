import React from "react";
import {css} from "emotion";

export const cont = css`
    padding: 1rem 0;
  `;


export const appContainer = css`
    padding: 2rem;
    width: 500px;
  `;

export const btnWrapper = css`
    display: grid;
    font-size: 1rem;
    margin: 0;
    padding: 1.5rem 0 0;
    width: 100%;
    grid-template-columns: 80% 100px;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "specials operators"
      "numbers operators";
    `;

export const btn = css`
		border-radius: 50px;
		font-size: 2rem;
		width: 100px;
		height: 100px;
		&:nth-child(10) {
      width: 235px;
      grid-column: span 2;
    }
	`;