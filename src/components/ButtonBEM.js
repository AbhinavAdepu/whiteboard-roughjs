import React from "react";

const ButtonBEM = ({ btnText = "Register" }) => {
  return (
    <>
      <a href="#" class="btn btn--trans">
        <span class="btn__text">{btnText}</span>
        <span class="btn__icon"></span>
      </a>
    </>
  );
};

export default ButtonBEM;
