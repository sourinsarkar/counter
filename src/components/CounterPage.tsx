import { useState } from "react"

const CounterPage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => setCounter(counter + 1);
  const subtractValue = () => {
    if(!(counter === 0)) {
      setCounter(counter - 1);
    }
  };
  
  return (
    <div>
      <h1>Counter app</h1>
      <h2>Counter value: {counter > 0 ? counter : 0}</h2>
      <button onClick={addValue}>ADD VALUE</button>
      <br />
      <button onClick={subtractValue}>SUBTRACT VALUE</button>
    </div>
  );
};

export default CounterPage;
