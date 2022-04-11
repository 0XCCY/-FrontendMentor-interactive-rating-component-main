import React from "react";
import thankyou from "../assets/images/illustration-thank-you.svg";
import RatingText from "./Text";

const Submitted = ({ rating }) => {
  return (
    <div className="flex flex-col p-8 rounded-3xl bg-gradient-to-tr from-GradientStart to-DarkBlue max-w-[26rem] min-h-[27rem] place-items-center">
      <img className="w-[50%]" src={thankyou} alt="Thank You"></img>
      <div className="m-6 rounded-full bg-DarkBlue">
        <p className="text-[15px] mx-5 my-2 text-Orange">
          You selected {rating} out of 5
        </p>
      </div>
      <div className="mt-4">
        <RatingText
          heading="Thank you!"
          description="We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!"
          center="text-center"
        />
      </div>
    </div>
  );
};

export default Submitted;
