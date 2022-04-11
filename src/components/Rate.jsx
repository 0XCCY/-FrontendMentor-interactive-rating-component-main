import React from "react";
import Button from "./Button";
import Ratings from "./Ratings";
import RatingText from "./Text";
import Star from "./Star";

const Rate = ({ setSubmitted, setRating, rating }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col p-8 rounded-3xl bg-gradient-to-tr from-GradientStart to-DarkBlue  md:max-w-md max-w-[26rem]">
      <div className="mb-8">
        <Star />
      </div>
      <RatingText
        heading="How did we do?"
        description="Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!"
      />
      <div>
        <Ratings setRating={setRating} />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Button />
      </form>
    </div>
  );
};

export default Rate;
