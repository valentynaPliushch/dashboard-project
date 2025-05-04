"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const actions = [
  { id: 1, label: "New Submition" },
  { id: 2, label: "Quote Builder" },
  { id: 3, label: "Risks Models" },
  { id: 4, label: "Documets Upload" },
];

const QuickActions = () => {
  return (
    <Layout>
      <h3 className="title">Quick Actions</h3>
      <div className="flex flex-col gap-2 ">
        {actions.map((action) => (
          <Button variant="secondary">{action.label}</Button>
        ))}
      </div>
    </Layout>
  );
};

export default QuickActions;
