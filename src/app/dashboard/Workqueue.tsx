"use client";

import { columnsWorkQueue } from "@/data/columns";
import { mockData } from "../../data/dataTables";
import { DataTable } from "./data-table";
import Layout from "@/components/Layout";

const WorkQueue = () => {
  return (
    <Layout>
      <DataTable columns={columnsWorkQueue} data={mockData} type="work-queue" />
    </Layout>
  );
};

export default WorkQueue;
