import React, { useState } from "react";

const Ratings = ({ rating, setRating }) => {
  const [selection, setSelection] = useState(0);
  const handleClick = (v) => {
    setSelection(v);
    setRating(v);
  };

  return (
    <div className="flex flex-row place-content-between mt-8 mb-8">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div key={i + 1}>
            <button
              className={`${
                i + 1 === selection
                  ? "bg-LightGrey text-white"
                  : "bg-DarkBlue text-LightGrey "
              }   rounded-full  py-2 px-4  sm:py-3 sm:px-5 hover:bg-Orange`}
              onClick={() => handleClick(i + 1)}
            >
              {i + 1}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
