import React, { useState } from "react";
import Button from "./Button";

function MyUseState() {
  const [count, setCount] = useState<number>(0);

  const handleInc = () => {
    setCount(count + 1);
    // setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <Button label="Tăng Count" color="blue" onClick={handleInc} />
      <Button label="Tăng Count 2" color="red" onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default MyUseState;
