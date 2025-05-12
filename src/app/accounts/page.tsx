import AccountDetails from "./AccountDetails";
import AccountStatus from "./AccountStatus";
import PerformanceMetrics from "./PerformanceMetrics";
import PoliciesBlock from "./PoliciesBlock";
import Communication from "./Communication";
import PoliciesTable from "./PoliciesTable";
import AccountHeader from "./AccountHeader";

const Dashboard = () => {
  return (
    <div>
      <div className="container flex flex-col gap-2">
        <AccountHeader />
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
