import { useState, useEffect } from "react";

function ExampleUseEffect2() {
  const [counter, setCounter] = useState(0);

  // This effect runs every time counter changes
  useEffect(() => {
    console.log("Counter value changed:", counter);
  }, [counter]); // Dependency array with counter

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default ExampleUseEffect2;
