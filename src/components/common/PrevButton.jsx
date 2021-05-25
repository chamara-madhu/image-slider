import React from "react";

function PrevButton({ handlePrev }) {
  return <i className="fas fa-chevron-left" onClick={handlePrev}></i>;
}

export default PrevButton;
