import Layout from "@/app/components/Layout";
import { Building2, ShieldCheck, Ship, Umbrella, Users } from "lucide-react";

const PoliciesBlock = () => {
  const title = [
    "Winnability",
    "General Liability",
    "Workers Comp",
    "Property",
    "Umbrella",
  ];
  const icons = [
    <Ship className="text-blue-500" />,
    <ShieldCheck className="text-green-500" />,
    <Users className="text-purple-500" />,
    <Building2 className="text-yellow-500" />,
    <Umbrella className="text-red-500" />,
  ];

  return (
    <div className="mb-4">
      <h2 className="title">Polities</h2>
      <Layout>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 p-4">
          {title.map((item, i) => (
            <div key={i} className="gap-0.5 justify-between inner-container">
              <div className="flex flex-row items-center gap-2">
                {icons[i]}
                <h4 className="text-m font-bold">{item}</h4>
              </div>
              <p className="subtitle">Premium: $625.000</p>
              <p className="subtitle">Eff.Date: 6/30/2026</p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default PoliciesBlock;
