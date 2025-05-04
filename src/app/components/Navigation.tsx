"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Accounts", href: "/accounts" },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-2">
      {navItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <Button variant={pathname === item.href ? "secondary" : "main"}>
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
