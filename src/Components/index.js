import { useCallback, useState } from "react";
import { Button } from "./Button";

export const Index = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  },[]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Start</button>
      <div>{count}</div>
      <Button buttonName="Click me" handleClick={handleClick} />
    </div>
  );
};
