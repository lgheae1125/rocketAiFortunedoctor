import React from "react";

interface ItemsType {
  // 표 한 칸의 구조
  chineseText?: string;
  koreanText?: string;
  imgURL?: string;
}
interface ChartItemProps {
  items: ItemsType[];
}
function ChartItem({ items }: { items: ItemsType[] }) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="h-full flex items-center">
          {item.imgURL ? (
            <img src={item.imgURL} alt="chart-img" className="h-full" />
          ) : (
            <div>
              <p className="font-zenantique">{item.chineseText}</p>
              <p className="font-gapyeong text-xs">({item.koreanText})</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ChartItem;
