import React from "react";

function SliderCard({ name, url }) {
  return (
    <>
      <img src={url} alt={`slider-item`} />
      <div>
        <p>{name}</p>
      </div>
    </>
  );
}

export default SliderCard;
