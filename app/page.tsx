import ChartList from "../components/ChartList";

export default function Home() {
  return (
    <div className="max-w-md mx-auto">
      <div className="w-full relative">
        <img src="analysis.png" alt="analysis" className="w-full" />
        <div className="flex flex-col w-[58%] h-[5.7%] absolute top-[30.5%] left-[6%] items-center justify-center rounded-[100%] overflow-hidden">
          <p className="font-gapyeong">이제 본격적으로</p>
          <p className="font-gapyeong">OO님의 사주팔자를</p>
          <p className="font-gapyeong">분석해볼 차례네요.</p>
        </div>
        <div className="flex flex-col w-[64%] h-[5.6%] absolute top-[47.7%] left-[6%] items-center justify-center rounded-[100%] overflow-hidden">
          <p className="font-gapyeong">제가 oo님의 사주를</p>
          <p className="font-gapyeong">보기 쉽게 표로 정리했어요</p>
        </div>
        <div className="w-full absolute top-[65.6%] p-2">
          <div className="w-full relative bg-[#F5F3EC] shadow-2xl border-black border-[4px] pb-[20px] flex flex-col items-center">
            <div className="w-full h-[2px] bg-[#2B557E] top-[6px] absolute"></div>
            <div className="w-[2px] h-full bg-[#2B557E] right-[6px] absolute"></div>
            <div className="w-full h-[2px] bg-[#2B557E] bottom-[6px] absolute"></div>
            <div className="w-[2px] h-full bg-[#2B557E] left-[6px] absolute"></div>
            <p className="font-gapyeong text-xl mt-8 mb-2">김로켓님의 사주</p>
            <p className="font-gapyeong text-2xl font-semibold mb-6">
              1980년 8월27일 08:10
            </p>
            <ChartList />
          </div>
        </div>
      </div>
    </div>
  );
}
