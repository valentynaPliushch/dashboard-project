import React from "react";
import Layout from "@/app/components/Layout";
import { ProgressBar } from "../components/ProgressBar";

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="mb-6">
      <h2 className="title">Performance Metrics</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <Layout>
          <div>
            <p className="title-sm">Winnability</p>
            <p className="title-highlight">Very Strong</p>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-4 flex items-center">
            See all factors <span className="ml-1">→</span>
          </a>
        </Layout>
        <Layout>
          <div>
            <p className="title-sm">Loss Ratio</p>
            <p className="title-highlight">
              25% <span className="subtitle">vs 42% target</span>
            </p>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-4 flex items-center">
            View history <span className="ml-1">→</span>
          </a>
        </Layout>
        <Layout>
          <div>
            <p className="title-sm">Premium Growth</p>
            <p className="title-highlight">
              12.4%{" "}
              <span className="subtitle">
                YoY increase $123M vs $150M Target
              </span>
            </p>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-4 flex items-center">
            View trend <span className="ml-1">→</span>
          </a>
        </Layout>
        <Layout>
          <p className="title-sm">Exposute Distribution</p>
          <div className="flex sm:flex-col lg:flex-row gap-3 mb-1.5">
            <ProgressBar value={71.4} display={false} />
            <div className="text-sm mt-1 flex-shrink-0 self-center">
              {" "}
              Marine Cargo: <span className="font-semibold">71.4%</span>
            </div>
          </div>

          <div className="flex sm:flex-col lg:flex-row gap-3 mb-1.5">
            <ProgressBar value={40} display={false} />
            <div className="text-sm mt-1 flex-shrink-0 self-center">
              General Liability: <span className="font-semibold">20%</span>
            </div>
          </div>
          <div className="flex sm:flex-col lg:flex-row gap-3 mb-1.5">
            <ProgressBar value={30} display={false} />
            <div className="text-sm mt-1 flex-shrink-0 self-center">
              {" "}
              Workers Comp: <span className="font-semibold">8.6%</span>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
