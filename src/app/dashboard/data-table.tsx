"use client";

import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Row } from "@tanstack/react-table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  type: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  type,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState("");

  const globalFilterFn = (row: Row<TData>, _: string, filterValue: string) => {
    const filter = filterValue.toLowerCase();

    const searchableKeys = [
      "line",
      "broker",
      "renewaldate",
      "renewaldate",
      "status",
      "appetite",
    ];

    const matchesFlatFields = searchableKeys.some((key) => {
      const value = row.getValue(key);
      return value && String(value).toLowerCase().includes(filter);
    });

    const account: { name: string; type: string } = row.getValue("account");
    const matchesAccount =
      account?.name.toLowerCase().includes(filter) ||
      account?.type.toLowerCase().includes(filter);

    return matchesFlatFields || matchesAccount;
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn,
  });

  const tabs = ["Assigned to me", "Pending Review", "Referrals"];
  return (
    <div className="w-full">
      <div className="flex flex-row items-center pr-3">
        {type === "accounts" && (
          <div className="flex flex-col gap-2 w-full lg:flex-row mb-2">
            <h2 className="title flex-1">My accounts</h2>
            <Input
              placeholder="Search..."
              value={globalFilter ?? ""}
              onChange={(event) => table.setGlobalFilter(event.target.value)}
              className="max-w-sm"
            />
            <div className="flex flex-row flex-wrap">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
              <Button variant="outline">Group</Button>
              <Button variant="secondary">+New</Button>
            </div>
          </div>
        )}
        {type === "work-queue" && (
          <div className="flex flex-col gap-2 mb-2">
            <h2 className="title">Work Queue</h2>
            <div className="flex flex-col gap-1.5 lg:flex-row overflow-x-auto">
              {tabs.map((tab, index) => (
                <Button
                  key={index}
                  variant={tab === "Assigned to me" ? "secondary" : "default"}
                  className="mr-2"
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table className="border-none [&_th]:text-white w-full">
          <TableHeader className="border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border-none">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-none"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
