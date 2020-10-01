import React from "react";
import bg from "../content-bg1.png";
import ButtonBEM from "./ButtonBEM";

const BoxContentWithBG = ({ imgSrc = bg, upperText, lowerText }) => {
  return (
    <>
      <div class="boxblock">
        <img class="boxblock__imgresponsive" src={imgSrc} alt="header image" />
        <div class="boxblock__imgtitle">
          <div class="boxblock__displayText">{upperText}</div>
          <ButtonBEM />
          <div>{lowerText}</div>
        </div>
      </div>
    </>
  );
};

export default BoxContentWithBG;
