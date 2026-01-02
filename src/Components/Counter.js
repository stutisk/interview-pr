import { useRef } from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  const handleCount = (action) => {
    console.log(action);
    // if (action === "dec") {
    //   setCount((count) => count - 1);
    // } else {
    //   setCount((count) => count + 1);
    // }
  };

  const handleBut = (actionT) => {
    console.log(actionT);
    if (actionT === "start") {
      timerId.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }
  };

  return (
    <div>
      <button onClick={() => handleCount("dec")}>-</button>
      <button onClick={() => handleBut("start")}>Start</button>
      {count}
      <button onClick={() => handleBut("stop")}>Stop</button>
      <button onClick={() => handleCount("inc")}>+</button>
    </div>
  );
};
