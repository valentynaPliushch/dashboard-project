import Layout from "@/app/components/Layout";
import { DataTable } from "../accounts/data-table";
import { dataPolicies } from "@/data/dataTables";
import { columnsPolicies } from "@/data/columns";

const PoliciesTable = () => {
  return (
    <>
      <h2 className="title mb-2">Policies</h2>
      <Layout>
        <DataTable columns={columnsPolicies} data={dataPolicies} />
      </Layout>
    </>
  );
};
export default PoliciesTable;
