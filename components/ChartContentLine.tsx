import React from "react";
import ChartItem from "./ChartItem";

interface ItemsType {
  chineseText?: string;
  koreanText?: string;
  imgURL?: string;
}

interface ChartContentLineType {
  contentLine: ItemsType[][];
}

interface ChartContentLineProps {
  chartLineData: ChartContentLineType;
}

function ChartContentLine({ chartLineData }: ChartContentLineProps) {
  return (
    <div className="grid grid-cols-5 w-full border-b-2 border-black">
      <div className="border-r-2 border-black flex py-1 flex-col items-center justify-center">
        <p className="font-zenantique">
          {chartLineData.contentLine[0][0].chineseText}
        </p>
        <p className="font-gapyeong text-xs">
          ({chartLineData.contentLine[0][0].koreanText})
        </p>
      </div>
      {chartLineData.contentLine.slice(1).map((items, index) => (
        <div
          key={index}
          className="border-r-[1px] last:border-r-2 border-black bg-white flex p-1 flex-col items-center justify-center"
        >
          <ChartItem items={items} />
        </div>
      ))}
    </div>
  );
}

export default ChartContentLine;
