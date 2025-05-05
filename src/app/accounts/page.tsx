import AccountDetails from "./AccountDetails";
import AccountStatus from "./AccountStatus";
import PerformanceMetrics from "./PerformanceMetrics";
import PoliciesBlock from "./PoliciesBlock";
import Communication from "./Communication";
import PoliciesTable from "./PoliciesTable";
import { Input } from "@/app/components/ui/input";
import { Navigation } from "@/app/components/Navigation";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";

const Dashboard = () => {
  return (
    <div className="bg-midnight-900 ">
      <div className="container flex justify-between">
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

      <div className="container flex flex-col gap-2">
        <Navigation />
        <PerformanceMetrics />
        <PoliciesBlock />
        <AccountStatus />
        <AccountDetails />
        <Communication />
        <PoliciesTable />
      </div>
    </div>
  );
};

export default Dashboard;
