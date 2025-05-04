"use client";
import Layout from "@/components/Layout";
import Image from "next/image";

interface Goal {
  id: number;
  label: string;
  current: number;
  total: number;
}

const mockGoals: Goal[] = [
  { id: 1, label: "Target Premium", current: 75000, total: 100000 },
  { id: 2, label: "Client Retention", current: 82, total: 100 },
  { id: 3, label: "Upsell Opportunities", current: 12, total: 20 },
];

const PortfolioGoals = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h3 className="title">Portfolio goals</h3>
        <p className="text-sm text-gray-400 mb-1">
          Portfolio Loss Ratio Target{" "}
        </p>
        <div className="h-full relative">
          <div className="flex flex-col justify-between h-full w-4 relative left-[60%]">
            <p className="text-xs text-grey-400">-6.8% (GOOD)</p>
            <Image
              src="/blue_arrow.png"
              width={500}
              height={500}
              className="mb-[-4px]"
              alt="Picture of the author"
            />
          </div>
          <div className="rounded-full h-[30px] w-full overflow-hidden flex">
            <div className="bg-green-500 h-full w-[50%]">
              {" "}
              <p className="text-sm text-white p-3">48.2%</p>
            </div>
            <div className="bg-yellow-400 h-full w-[15%]"></div>
            <div className="bg-red-500 h-full flex-1"></div>
          </div>
          <div className="flex flex-col justify-between h-4 w-4  relative left-[50%]">
            <Image
              src="/green_arrow.png"
              width={500}
              height={500}
              className="rotate-180 mt-[-4px]"
              alt="Picture of the author"
            />
            <p className="text-xs text-green-400">-6.8% (GOOD)</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-1">RENEWAL RETENTION</p>
        <div className="h-full relative">
          <div className="rounded-full h-[30px] w-full overflow-hidden flex">
            <div className="bg-red-500 h-full flex-1"></div>
            <div className="bg-yellow-400 h-full flex-2"></div>
            <div className="bg-green-500 h-full flex-1/2">
              {" "}
              <p className="text-sm text-white p-3">48.2%</p>
            </div>
            <div className="bg-yellow-400 h-full flex-2"></div>
          </div>
          <div className="flex flex-col justify-between h-4 w-4 relative left-[50%]">
            <Image
              src="/green_arrow.png"
              width={500}
              height={500}
              className="rotate-180 mt-[-4px]"
              alt="Picture of the author"
            />
            <p className="text-xs text-green-400">-6.8% (GOOD)</p>
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
              <span className="absolute right-0 top-100">68%</span>
            </div>
          </div>
          <div className="text-sm mt-1 flex-1 self-center"> $42M</div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioGoals;
