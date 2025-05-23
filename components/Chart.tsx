import React from "react";
import ChartList from "./ChartList";

interface ChartProps {
  name: string;
  birthDay: string;
}

function Chart({ name, birthDay }: ChartProps) {
  return (
    <div className="w-full absolute top-[65.6%] p-2">
      <div className="w-full relative bg-[#F5F3EC] shadow-[0px_4px_4px_#00000040] border-black border-[4px] pb-[20px] flex flex-col items-center">
        <div className="w-full h-[2px] bg-[#2B557E] top-[6px] absolute"></div>
        <div className="w-[2px] h-full bg-[#2B557E] right-[6px] absolute"></div>
        <div className="w-full h-[2px] bg-[#2B557E] bottom-[6px] absolute"></div>
        <div className="w-[2px] h-full bg-[#2B557E] left-[6px] absolute"></div>
        <img
          className="absolute left-0 top-10 w-[16%]"
          src="leftCloud.png"
          alt="leftCloud"
        />
        <img
          className="absolute right-0 top-4 w-[16%]"
          src="rightCloud.png"
          alt="rightCloud"
        />
        <p className="font-gapyeong text-xl mt-8 mb-2">{name}님의 사주</p>
        <p className="font-gapyeong text-2xl font-semibold mb-6">{birthDay}</p>
        <ChartList />
      </div>
    </div>
  );
}

export default Chart;
