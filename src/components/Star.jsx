import React from "react";
import star from "../assets/images/icon-star.svg";

const Star = () => {
  return (
    <div className="w-fit p-4 rounded-full bg-DarkBlue">
      <img className="w-[3.5]" src={star} alt="star" />
    </div>
  );
};

export default Star;
