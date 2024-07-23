"use client";

import { Slides } from "../types/types";

const Slider = ({ data }: { data: Slides }) => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        ${data.title}
      </div>
    </div>
  );
};

export default Slider;
