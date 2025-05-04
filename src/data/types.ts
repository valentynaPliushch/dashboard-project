export type WorkItem = {
  id: number;
  originator: string;
  client: string;
  type: "Underwriter Referral" | "Email";
  status: "New" | "Pending Review" | "Completed";
  date: string;
};

export type AccountItem = {
  id: number;
  account: {
    name: string;
    type: string;
  };
  line: string;
  broker: string;
  renewaldate: string;
  premium: string | number;
  ratedpremium: string | number;
  lossratio: number;
  appetite: "high" | "medium" | "cautious";
  status: "active" | "under review";
  triage: number;
  winnability: string;
};

export type PolicyItem = {
  id: number;
  line: {
    icon: string;
    name: string;
    lineNumber: string;
  };
  effDate: string;
  expDate: string;
  status: "Active" | "Pending";
  expTech: number | string;
  expPremium: number | string;
  renewalToTech: number | string;
  renewalTech: number | string;
  renewalPremium: number | string;
  rateChange: string;
  lossRatio: number | undefined;
};
