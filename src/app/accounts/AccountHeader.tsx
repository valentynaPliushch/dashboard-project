import { CircleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AccountHeader = () => {
  const details = [
    {
      type: "existing account",
      value: "54383",
    },
    {
      type: "Broker",
      value: "Marsch McLennan",
    },
    {
      type: "underwriter",
      value: "Kate Johnson",
    },
  ];
  const attention = [
    {
      title: "Marine Survey required",
      subtitle: "Sceduled for 06/12/2025",
      linkText: "Review details",
    },
    {
      title: "Loss Control Complete",
      subtitle: "Last inspection: 02/15/2025",
      linkText: "View report",
    },
    {
      title: "Claims Review Required",
      subtitle: "3 open claims // $245,000 TTL",
      linkText: "View claims",
    },
  ];

  return (
    <div className="text-white">
      <p className="text-sm">
        Dashboard//Accounts//
        <span className="text-blue-500 inline">
          Mantime Logistics Corp
        </span>{" "}
      </p>

      <div className="flex flex-col gap-2 justify-between lg:flex-row pt-6">
        <div>
          <Image
            src="logo.svg"
            alt="logo"
            className="mr-2 w-[70px] float-left"
          />
          <h1 className="title text-3xl mr-1 tracking-wide">
            Maritime Logistics Corp
          </h1>
          <div className="flex flew-row flex-wrap">
            <p className="text-sm md:flex-1">
              425 Harbor Boulevard, Suite 300 Seattle, WA 98104
            </p>
            {details.map((item, index) => (
              <div
                key={index}
                className="text-sm p-1 mr-3 border border-transparent border-l-midnight-600"
              >
                <p className="uppercase text-white/70">{item.type}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" border border-yellow-400 rounded-2xl p-4">
          <p className="text-yellow-400 text-lg pb-3">
            <CircleAlert className="inline-block mr-1.5" />
            Needs Attention
          </p>
          <div className="flex flex-row flex-wrap gap-5">
            {attention.map((item, index) => (
              <div key={index} className="">
                <p>{item.title}</p>
                <p className="text-white/50 text-sm">{item.subtitle}</p>
                <Link className="text-blue-500 hover:text-blue-600" href="#">
                  {item.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountHeader;
