import Layout from "@/app/components/Layout";
import { columnsMyAccounts } from "@/data/columns";
import { dataMyAccounts } from "@/data/dataTables";
import { DataTable } from "./data-table";

const MyAccounts = () => {
  return (
    <Layout>
      <DataTable
        columns={columnsMyAccounts}
        data={dataMyAccounts}
        type="accounts"
      />
    </Layout>
  );
};

export default MyAccounts;
