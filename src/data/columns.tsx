"use client";

import { ColumnDef } from "@tanstack/react-table";
import { WorkItem, AccountItem, PolicyItem } from "./dataTables";
import { CircleEllipsis, Shield, Ship, Umbrella, Users } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import clsx from "clsx";
import { useDebugValue } from "react";

export const columnsWorkQueue: ColumnDef<WorkItem>[] = [
  {
    accessorKey: "originator",
    header: "Originator",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const item = row.getValue("status");
      let formatted;
      switch (item) {
        case "New":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
          );
          break;
        case "Pending Review":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
          );
          break;
        case "Completed":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          );
          break;
        default:
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-white mr-2"></span>
          );
      }

      return (
        <div className="flex items-center ">
          {formatted}
          <div className="font-medium">{row.getValue("status")}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Created",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return <CircleEllipsis className="rotate-90 cursor-pointer" />;
    },
  },
];

function formattedValue(amount: number) {
  let formatted;

  if (amount >= 1_000_000) {
    formatted = `$${(amount / 1_000_000).toFixed(1)}M`;
  } else if (amount < 1_000_000 && amount >= 100_000) {
    formatted = `$${(amount / 100_000).toFixed(1)}K`;
  } else {
    formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
  return formatted;
}

export const columnsMyAccounts: ColumnDef<AccountItem>[] = [
  {
    accessorKey: "account",
    header: "ACCOUNT NAME/TYPE",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      const cell: { name: string; type: string } = row.getValue("account");
      return (
        <>
          <div>{cell.name}</div>
          <div className="text-slate-500">{cell.type}</div>
        </>
      );
    },
  },
  {
    accessorKey: "line",
    header: "LINE",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "broker",
    header: "BROKER",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "renewaldate",
    header: "RENEWAL DATE",
  },

  {
    accessorKey: "premium",
    header: "PREMIUM",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("premium"));
      const formatted = formattedValue(amount);

      return (
        <div className="text-right font-medium text-blue-500">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "ratedpremium",
    header: "RATED PREMIUM",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("ratedpremium"));
      const formatted = formattedValue(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "lossratio",
    header: "LOSS RATIO",
    cell: ({ row }) => {
      const value: number = row.getValue("lossratio");
      let color;
      if (value >= 60) {
        color = "bg-red-500";
      } else if (value >= 30) {
        color = "bg-yellow-500";
      } else {
        color = "bg-green-500";
      }
      return (
        <div className={clsx(color, " text-center rounded-3xl p-2")}>
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "appetite",
    header: "APPETITE",
    cell: ({ row }) => {
      const value: string = row.getValue("appetite");
      return (
        <div className="p-2 text-center bg-blue-950 rounded-2xl">{value}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const item = row.getValue("status");
      let formatted;
      switch (item) {
        case "active":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 "></span>
          );
          break;
        case "under review":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-2"></span>
          );
          break;
        default:
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-white mr-2"></span>
          );
      }

      return (
        <div className="flex items-center ">
          {formatted}
          <div className="font-medium capitalize">{row.getValue("status")}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "triage",
    header: "TRIAGE",
    cell: ({ row }) => {
      const item: number = row.getValue("triage");
      return (
        <div className="border-blue-500 border-solid border-2 rounded-4xl p-1 text-center">
          {item}
        </div>
      );
    },
  },
  {
    accessorKey: "winnability",
    header: "WINNABILITY",
    cell: ({ row }) => {
      const item: string = row.getValue("winnability");
      return (
        <div className="border-blue-500 border-solid border-2 rounded-4xl p-1 text-center">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-2"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-2"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-2"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-blue-700 mr-2"></span>
          {item}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return <CircleEllipsis className="rotate-90 cursor-pointer" />;
    },
  },
];

export const columnsPolicies: ColumnDef<PolicyItem>[] = [
  {
    accessorKey: "line",
    header: "ACCOUNT NAME/TYPE",
    enableGlobalFilter: true,
    cell: ({ row }) => {
      const cell: { icon: string; name: string; lineNumber: string } =
        row.getValue("line");
      let formatted;
      switch (cell.icon) {
        case "ship":
          formatted = (
            <Avatar className="bg-blue-500">
              <Ship />
            </Avatar>
          );
          break;
        case "users":
          formatted = (
            <Avatar className="bg-violet-500">
              <Users />
            </Avatar>
          );

          break;
        case "shield":
          formatted = (
            <Avatar className="bg-green-500">
              <Shield />
            </Avatar>
          );

          break;
        case "umbrella":
          formatted = (
            <Avatar className="bg-red-500">
              <Umbrella />
            </Avatar>
          );

          break;
      }
      return (
        <>
          <div className="flex flew-row gap-0.5">
            <span>
              {formatted}
              {cell.name}
            </span>
          </div>
          <div className="text-slate-500">{cell.lineNumber}</div>
        </>
      );
    },
  },
  {
    accessorKey: "effDate",
    header: "effDate",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "expDate",
    header: "expDate",
    enableGlobalFilter: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const item = row.getValue("status");
      let formatted;
      switch (item) {
        case "Active":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          );
          break;
        case "Pending":
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
          );
          break;
        default:
          formatted = (
            <span className="inline-block w-2 h-2 rounded-full bg-white mr-2"></span>
          );
      }

      return (
        <div className="flex items-center ">
          {formatted}
          <div className="font-medium">{row.getValue("status")}</div>
        </div>
      );
    },
  },

  {
    accessorKey: "expTech",
    header: "expTech",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("expTech"));
      const formatted = formattedValue(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "expPremium",
    header: "expPremium",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("expPremium"));
      const formatted = formattedValue(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "renewalToTech",
    header: "renewalToTech",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("renewalToTech"));
      const formatted = formattedValue(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "renewalTech",
    header: "renewalTech",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("renewalTech"));
      const formatted = formattedValue(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "renewalPremium",
    header: "renewalPremium",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("renewalPremium"));
      const formatted = formattedValue(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "rateChange",
    header: "rateChange",
    cell: ({ row }) => {
      const value: string = row.getValue("rateChange");
      return (
        <div className="p-2 text-center bg-blue-950 rounded-2xl">{value}</div>
      );
    },
  },
  {
    accessorKey: "lossRatio",
    header: "LOSS RATIO",
    cell: ({ row }) => {
      let value: number | undefined = row.getValue("lossRatio");
      let color;

      if (value && value >= 60) {
        color = "bg-red-500";
      } else if (value && value >= 30) {
        color = "bg-yellow-500";
      } else {
        color = "bg-green-500";
      }
      return typeof value === "undefined" ? (
        <div className="p-2">N/A</div>
      ) : (
        <div className={clsx(color, " text-center rounded-3xl p-2")}>
          {value}%
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return <CircleEllipsis className="rotate-90 cursor-pointer" />;
    },
  },
];
