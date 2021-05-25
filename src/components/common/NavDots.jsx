import React from "react";

function NavDots({ current, imagesArr }) {
  return (
    <div className="nav-dot-btns-div">
      {imagesArr &&
        imagesArr.map((el, i) => (
          <i
            className={i === current ? "fas fa-circle active" : "fas fa-circle"}
            key={i}
          ></i>
        ))}
    </div>
  );
}

export default NavDots;
