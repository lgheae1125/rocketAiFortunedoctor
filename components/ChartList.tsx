import React from "react";
import ChartTitle from "./ChartTitle";
import ChartContent from "./ChartContent";

// 가상 데이터 구조
const chartContentDatas = [
  {
    contents: [
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
    contents: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
    ],
  },
  {
    contents: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
      [
        {
          imgURL:
            "https://aifortunedoctor.com/images/moonlight/kanji/%E4%B8%99.png",
        },
      ],
    ],
  },
  {
    contents: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [{ chineseText: "天乙", koreanText: "천을" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
    ],
  },
  {
    contents: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [{ chineseText: "天乙", koreanText: "천을" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
    ],
  },
  {
    contents: [
      [{ chineseText: "貴人", koreanText: "귀인" }],
      [{ chineseText: "天乙", koreanText: "천을" }],
      [{ chineseText: "比肩", koreanText: "비견" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
      [{ chineseText: "傷官", koreanText: "상관" }],
    ],
  },
];

function ChartList() {
  return (
    <div className="w-full px-5 pb-4">
      <ChartTitle text1="時" text2="日" text3="月" text4="年" />
      {chartContentDatas.map((chartContentData, index) => (
        <ChartContent key={index} chartContentData={chartContentData} />
      ))}
    </div>
  );
}

export default ChartList;
