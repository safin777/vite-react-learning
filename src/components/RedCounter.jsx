import React from "react";
import { useState } from "react";

const RedCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className="justify-center">
      <h1 className="text-red-400 text-[30px] flex justify-center ">
        Red Counter
      </h1>
      <section className="pt-20">
        <div className="flex justify-center">
          <button
            className="bg-red-400 text-white px-4 py-2 rounded-md decrement"
            onClick={handleIncrement}
          >
            -
          </button>
          <h1 className="text-red-400 text-[30px] px-4 py-2">{count}</h1>
          <button
            className="bg-red-400 text-white px-4 py-2 rounded-md increment"
            onClick={handleDecrement}
          >
            +
          </button>
        </div>
      </section>
    </div>
  );
};

export default RedCounter;
