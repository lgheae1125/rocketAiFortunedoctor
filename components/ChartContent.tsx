import React from "react";
import ChartTitle from "./ChartTitle";
import ChartContentLine from "./ChartContentLine";

// 가상 데이터 구조
const chartContentData = [
  {
    contentLine: [
      [{ chineseText: "十星", koreanText: "십성" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [
        { chineseText: "傷官", koreanText: "상관" },
        { chineseText: "傷官", koreanText: "상관" },
        { chineseText: "傷官", koreanText: "상관" },
      ],
    ],
  },
  {
    contentLine: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [
        {
          imgURL: "byeong.png",
        },
      ],
      [
        {
          imgURL: "byeong.png",
        },
      ],
      [
        {
          imgURL: "byeong.png",
        },
      ],
      [
        {
          imgURL: "byeong.png",
        },
      ],
    ],
  },
  {
    contentLine: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [
        {
          imgURL: "byeong.png",
        },
      ],
      [
        {
          imgURL: "byeong.png",
        },
      ],
      [
        {
          imgURL: "byeong.png",
        },
      ],
      [
        {
          imgURL: "byeong.png",
        },
      ],
    ],
  },
  {
    contentLine: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [{ chineseText: "天乙", koreanText: "천을" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
    ],
  },
  {
    contentLine: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [{ chineseText: "天乙", koreanText: "천을" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
    ],
  },
  {
    contentLine: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [{ chineseText: "天乙", koreanText: "천을" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
    ],
  },
];

function ChartContent() {
  return (
    <div className="w-full px-5 pb-4">
      <ChartTitle text1="時" text2="日" text3="月" text4="年" />
      {chartContentData.map((chartContentData, index) => (
        <ChartContentLine key={index} chartLineData={chartContentData} />
      ))}
    </div>
  );
}

export default ChartContent;
