import { useState } from "react"

const CounterPage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => setCounter(counter + 1);
  const subtractValue = () => {
    if(!(counter === 0)) setCounter(counter - 1);
  };
  
  return (
    <div>
      <div>
      </div>
    </div>
  );
};

export default CounterPage