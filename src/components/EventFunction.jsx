"use client";

import { Butterfly_Kids } from "next/font/google";
import React, { useState } from "react";

const EventFunction = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("hello Geeeee ");
  };
  const handleCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <h2>Making Butoon CLick Event </h2>
      {/*  when ever you use the event function then it will show you error that will be that next is npt able to understand this is the client
      component because all the event is handled by the at the side of client side that and next js render all the componnet from the 
      server sidet that is why we have to include the "useStric client";
       */}
      <button onClick={handleClick}>click me</button>
      <br></br>
      <br></br>
      <h2>Count Value is : {count}</h2>
      <button onClick={() => handleCount()}>+1</button>
    </div>
  );
};

export default EventFunction;
