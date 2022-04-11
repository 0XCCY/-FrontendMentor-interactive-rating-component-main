import React, { useState } from "react";
import Rate from "./components/Rate";
import Submitted from "./components/Submitted";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center align-middle bg-DarkBG min-h-screen min-w-screen">
      {submitted ? (
        <Submitted rating={rating} />
      ) : (
        <Rate
          setSubmitted={setSubmitted}
          setRating={setRating}
          rating={rating}
        />
      )}
    </div>
  );
}

export default App;
