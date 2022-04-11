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
                i + 1 === selection ? "bg-LightGrey" : "bg-DarkBlue"
              }  w-14 h-14 rounded-full text-white font-bold hover:bg-Orange`}
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
