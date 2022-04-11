import React from "react";

const Ratings = () => {
  return (
    <div className="flex flex-row place-content-between mt-8 mb-8">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <div key={i + 1}>
            <button className="bg-DarkBlue w-14 h-14 rounded-full text-white font-bold hover:bg-Orange">
              {i + 1}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Ratings;
