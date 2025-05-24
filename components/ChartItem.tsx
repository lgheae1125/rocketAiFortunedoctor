import Image from "next/image";
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
function ChartItem({ items }: ChartItemProps) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="h-full flex items-center">
          {item.imgURL ? (
            <Image src={item.imgURL} alt="chartImg" className="h-full" />
          ) : (
            <div className="py-[2px]">
              <p className="font-zenantique text-lg -mb-1">
                {item.chineseText}
              </p>
              <p className="font-gapyeong">({item.koreanText})</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ChartItem;
