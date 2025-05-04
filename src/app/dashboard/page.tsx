import PortfolioGoals from "@/app/dashboard/PortfolioGoals";
import QuickActions from "@/app/dashboard/QuickActions";
import WorkQueue from "@/app/dashboard/Workqueue";
import MarketIntelligence from "@/app/dashboard/MarketIntelligence";
import MyAccounts from "@/app/dashboard/MyAccounts";

import { Input } from "@/app/components/ui/input";
import { Navigation } from "@/app/components/Navigation";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-900 ">
        <div className="container flex lg:justify-between md:justify-center">
          <p className="text-white text-2xl">
            Hi Artur, welcome! You have 12 open tasks.
          </p>
          <div className="flex flex-row gap-2">
            {" "}
            <Input
              placeholder="Search..."
              value={""}
              className="max-w-sm rounded-4xl"
            />
            <Avatar>
              <AvatarFallback className="bg-blue-500">AR</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <hr className="bg-gray-200 border-0 w-full" />
        <div className="container flex flex-col gap-4">
          <Navigation />
          <div className="grid lg:grid-cols-6 md:grid-cols-1 gap-2 w-full">
            <div className="col-span-4">
              <WorkQueue />
            </div>
            <PortfolioGoals />
            <div className="flex flex-col gap-2 items-stretch">
              <QuickActions />
              <MarketIntelligence />
            </div>
          </div>
          <MyAccounts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
