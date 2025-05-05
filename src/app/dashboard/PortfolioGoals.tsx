"use client";
import Layout from "@/app/components/Layout";
import Image from "next/image";

const PortfolioGoals = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h3 className="title">Portfolio goals</h3>
        <p className="text-sm text-gray-400 mb-1">
          Portfolio Loss Ratio Target{" "}
        </p>
        <div className="h-full relative">
          <div className="flex flex-col items-center h-full w-[40px] relative left-[55%]">
            <p className="text-xs text-gray-400">TG 55%</p>
            <Image
              src="/blue_arrow.png"
              width={15}
              height={15}
              className="mb-[-2px]"
              alt="Picture of the author"
            />
          </div>
          <div className="rounded-full h-[30px] w-full overflow-hidden flex">
            <div className="bg-green-500 h-full w-[50%] flex justify-end items-center">
              {" "}
              <p className="text-sm text-white">48.2%</p>
            </div>
            <div className="bg-yellow-400 h-full w-[15%]"></div>
            <div className="bg-red-500 h-full flex-1"></div>
          </div>
          <div className="relative left-[35%] h-4 w-[80px] flex flex-col justify-between items-center">
            <Image
              src="/green_arrow.png"
              width={15}
              height={15}
              className="rotate-180 mt-[-2px]"
              alt="Picture of the author"
            />
            <p className="text-xs text-green-400">-6.8% (GOOD)</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-1">RENEWAL RETENTION</p>
        <div className="h-full relative">
          <div className="flex rounded-full h-[30px] w-full overflow-hidden ">
            <div className="bg-red-500 h-full flex-1"></div>
            <div className="bg-yellow-400 h-full flex-2"></div>
            <div className="bg-green-500 h-full flex-1 flex justify-center items-center">
              {" "}
              <p className="text-sm text-white">88%</p>
            </div>
            <div className="bg-yellow-400 h-full flex-2"></div>
          </div>
          <div className="flex flex-col justify-between items-center h-4 w-[70px] relative left-[50%]">
            <Image
              src="/green_arrow.png"
              width={15}
              height={15}
              className="rotate-180 mt-[-2px]"
              alt="Picture of the author"
            />
            <p className="text-xs text-green-400 uppercase">on target</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-1">New Business Target</p>
        <div className="flex flex-row gap-1">
          <div className=" w-full h-[30px] rounded-full bg-gray-700 relative flex flex-row">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-700 to-blue-500 rounded-full w-[67%] flex items-center justify-end">
              <div className="self-center mr-2">$8.1M</div>
            </div>
          </div>
          <div className="text-sm mt-1 flex-1 self-center"> $12M</div>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-400 mb-1">Annual GWP Target</p>
        <div className="flex flex-row gap-1">
          <div className=" w-full h-[30px] rounded-full bg-gray-700 relative flex flex-row">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-700 to-blue-500 rounded-full w-[67%] flex items-center justify-end">
              <div className="self-center mr-2">$28.4M</div>
            </div>
          </div>
          <div className="text-sm mt-1 flex-1 self-center"> $42M</div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioGoals;
