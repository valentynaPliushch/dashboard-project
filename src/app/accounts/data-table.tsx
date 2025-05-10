"use client";

import React from "react";
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
  TableFooter,
} from "@/app/components/ui/table";
import { Button } from "@/app/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = React.useState("");

  const globalFilterFn = (row: Row<TData>, _c: string, filterValue: string) => {
    const filter = filterValue.toLowerCase();

    const searchableKeys = ["line", "status"];

    const matchesFlatFields = searchableKeys.some((key) => {
      const value = row.getValue(key);
      return value && String(value).toLowerCase().includes(filter);
    });

    const account: { name: string; lineNumber: string } = row.getValue("line");
    const matchesAccount =
      account?.name.toLowerCase().includes(filter) ||
      account?.lineNumber.toLowerCase().includes(filter);

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

  table.getFooterGroups().map((footerGroup) =>
    footerGroup.headers.map((header) => {
      const test = header.column.columnDef.footer;
      console.log(header.getContext());
    })
  );

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex items-center py-4">
          <Input
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="max-w-sm rounded-4xl"
          />
        </div>
        <Button variant="outline">Filter</Button>
        <Button variant="outline">Group</Button>
      </div>

      <div className="rounded-md text-white">
        <Table className="border-none [&_th]:text-white">
          <TableHeader className="text-white border-none uppercase">
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
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-none"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border-transparent">
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
          <TableFooter className="bg-transparent">
            {table.getFooterGroups().map((footerGroup) => (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.footer === "function"
                      ? header.column.columnDef.footer(header.getContext())
                      : header.column.columnDef.footer}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
