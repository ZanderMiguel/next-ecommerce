"use client";

import { useEffect, useState } from "react";

const Slider = () => {
  const [isData, setData] = useState();
  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setData(json));
  //   }, []);

  //   console.log(isData);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"></div>
    </div>
  );
};

export default Slider;
