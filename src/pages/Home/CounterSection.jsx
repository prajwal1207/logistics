import React, { useEffect, useState } from "react";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // animation duration in ms
    const increment = target / (duration / 30); // adjust speed
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);
    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold">{count}+</h2>
      <p className="mt-2 text-gray-600 text-center capitalize">{label}+</p>
    </div>
  );
};

const CounterSection = () => {
  const counters = [
    { target: 27000, label: "Serviceable Pin Codes" },
    { target: 25, label: "Million Sq.ft Warehouse Storage spaces" },
    { target: 750, label: "Branches" },
    { target: 2500, label: "Scheduled Destination" },
    { target: 50, label: "Cross Docks Center" },
    { target: 6000, label: "Closed Body Vehicles" },
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-6 gap-8 md:gap-6  py-10 bg-white">
      {counters.map((counter, index) => (
        <Counter key={index} target={counter.target} label={counter.label} />
      ))}
    </div>
  );
};

export default CounterSection;
