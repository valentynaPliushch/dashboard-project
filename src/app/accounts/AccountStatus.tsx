import Layout from "@/app/components/Layout";
import clsx from "clsx";
import { CircleCheck } from "lucide-react";

const AccountStatus = () => {
  const steps = ["Submitted", "Review", "Quote", "Bind", "Isuue", "Renew"];
  const compilanceItems = [
    "KYC verification",
    "Required Documentation",
    "Regulatory approval",
    "Financial verification",
  ];

  return (
    <div className="sm:flex lg:flex sm:flex-col lg:flex-row gap-2 items-start justify-evenly mb-6">
      {/* Account Status */}
      <div className="w-full mb-6">
        <h2 className="title">Account status</h2>
        <Layout>
          <div className="flex flex-row max-w-4xl mx-auto h-full overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start">
                <div className="flex flex-col items-center">
                  <CircleCheck
                    className={clsx(
                      index === steps.length - 1
                        ? "text-gray-400"
                        : "text-green-500",
                      "w-6 h-6"
                    )}
                  />
                  <span className="text-xs mt-1 text-white">{step}</span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={clsx(
                      index === steps.length - 2
                        ? "border-gray-500"
                        : "border-green-500",
                      "w-10 sm:w-20 border-t-2 border-dashed mt-3 transform scale-x-135  mx-1"
                    )}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </Layout>
      </div>
      {/* Compliance */}
      <div className=" w-full">
        <div className="flex lg:flex-row sm:flex-col gap-2">
          <h2 className="title">Compliance & Documentation</h2>

          <a href="#" className="text-blue-400 text-sm mt-4 flex self-center">
            See history <span className="ml-1">→</span>
          </a>
        </div>

        <Layout>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            {compilanceItems.map((item, i) => (
              <div key={i} className="flex flex-row">
                <CircleCheck className="text-green-500" />
                <p className="text-white ml-1">{item}</p>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AccountStatus;
