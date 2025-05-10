import PortfolioGoals from "@/app/dashboard/PortfolioGoals";
import QuickActions from "@/app/dashboard/QuickActions";
import WorkQueue from "@/app/dashboard/Workqueue";
import MarketIntelligence from "@/app/dashboard/MarketIntelligence";
import MyAccounts from "@/app/dashboard/MyAccounts";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="container flex flex-col gap-4">
          <div className="lg:grid lg:grid-cols-6 sm:flex sm:flex-col gap-3 w-full">
            <div className="col-span-4 mb-3">
              <WorkQueue />
            </div>
            <div className="mb-3">
              <PortfolioGoals />
            </div>
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
