import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const handleDecrement = () => {
    if (counter < 1) {
      alert("negative number is not allowed");
    } else {
      const decrementNumber = counter - 1;
      setCounter(decrementNumber);
    }
  };
  return (
    <div>
      <button onClick={handleDecrement}>decrement</button>
      <p>{counter}</p>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Counter;
