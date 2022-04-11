import React from "react";

// Pass in center for customized centering
const RatingText = ({ heading, description, center }) => {
  return (
    <div className={center}>
      <h1 className="text-white text-3xl mb-2 font-semibold">{heading}</h1>
      <p className="text-[15px] text-MediumGrey mt-5">{description}</p>
    </div>
  );
};

export default RatingText;
