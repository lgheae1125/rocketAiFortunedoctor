import Chart from "@/components/Chart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <div className="w-full relative">
        <Image src="analysis.png" alt="analysis" className="w-full" />
        <div className="flex flex-col w-[58%] h-[5.7%] absolute top-[30.5%] left-[6%] items-center justify-center rounded-[100%] overflow-hidden">
          <p className="font-gapyeong">이제 본격적으로</p>
          <p className="font-gapyeong">OO님의 사주팔자를</p>
          <p className="font-gapyeong">분석해볼 차례네요.</p>
        </div>
        <div className="flex flex-col w-[64%] h-[5.6%] absolute top-[47.7%] left-[6%] items-center justify-center rounded-[100%] overflow-hidden">
          <p className="font-gapyeong">제가 oo님의 사주를</p>
          <p className="font-gapyeong">보기 쉽게 표로 정리했어요</p>
        </div>
        <Chart name="김로켓" birthDay="1980년 8월27일 08:10" />
      </div>
    </div>
  );
}
