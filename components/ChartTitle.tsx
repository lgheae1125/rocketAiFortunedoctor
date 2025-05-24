import React from "react";

interface ChartTitleProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

function ChartTitle({ text1, text2, text3, text4 }: ChartTitleProps) {
  return (
    <div className="grid grid-cols-5 w-full border-b-2 border-black">
      <div className="border-r-2 border-black flex items-center justify-center"></div>
      <div className="border-r-[1px] border-black py-2 flex items-center justify-center">
        <p className="font-zenantique text-2xl">{text1}</p>
      </div>
      <div className="border-r-[1px] border-black py-2 flex items-center justify-center">
        <p className="font-zenantique text-2xl">{text2}</p>
      </div>
      <div className="border-r-[1px] border-black py-2 flex items-center justify-center">
        <p className="font-zenantique text-2xl">{text3}</p>
      </div>
      <div className="border-r-2 border-black py-2 flex items-center justify-center">
        <p className="font-zenantique text-2xl">{text4}</p>
      </div>
    </div>
  );
}

export default ChartTitle;
