import React from "react";

function NextButton({ handleNext }) {
  return <i className="fas fa-chevron-right" onClick={handleNext}></i>;
}

export default NextButton;
