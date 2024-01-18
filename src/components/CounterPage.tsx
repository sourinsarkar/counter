import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"

const CounterPage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => setCounter(counter + 1);
  const subtractValue = () => {
    if(!(counter === 0)) setCounter(counter - 1);
  };
  
  return (
    <div className="flex justify-center items-center">
      <div onClick={subtractValue} className="flex justify-center items-center w-[140px] h-[140px] relative">
        <img src="/images/circle.png" alt="Decrease" className="w-full h-full" />
        <ChevronDownIcon className="absolute h-10 w-10 text-white stroke-white" />
      </div>

      <div className="flex justify-between items-center relative">
        <img src="/images/counterHolderImage.svg" alt="Increase" className="w-[400px] h-[400px]" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-9xl">{counter}</p>
      </div>

      <div onClick={addValue} className="flex justify-center items-center w-[140px] h-[140px] relative">
        <img src="/images/circle.png" alt="Increase" className="w-full h-full" />
        <ChevronUpIcon className="absolute h-10 w-10 text-white stroke-white" />
      </div>
    </div>
  );
};

export default CounterPage