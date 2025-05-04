import Layout from "@/app/components/Layout";

const MarketIntelligence = () => {
  return (
    <Layout>
      <h2 className="title">MarketIntelligence</h2>
      <ul className="list-disc pl-5">
        <li className="marker:text-red-500">
          Rate handening in Cyber Market - +15% YoY
        </li>
        <li className="marker:text-yellow-500">
          New capacity entering Marine Market
        </li>
        <li className="marker:text-blue-500">
          Enviromental regulatory changes in CA
        </li>
      </ul>
    </Layout>
  );
};

export default MarketIntelligence;
