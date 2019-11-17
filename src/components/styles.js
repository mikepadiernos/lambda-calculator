import React from "react";
import {csx, css} from "emotion";

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