"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Building2,
  File,
  House,
  KeyRound,
  Layers,
  LocateFixed,
  Users,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <House /> },
  { name: "Accounts", href: "/accounts", icon: <Layers /> },
  { name: "Brokers", href: "/brokers", icon: <Users /> },
  { name: "Submission", href: "/submission", icon: <File /> },
  { name: "Organizations", href: "/Organizations", icon: <Building2 /> },
  { name: "Goals & Rules", href: "/goals", icon: <LocateFixed /> },
  { name: "Admin", href: "/admin", icon: <KeyRound /> },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-2">
      {navItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <Button
            variant={pathname === item.href ? "secondary" : "main"}
            size="lg"
            className="flex flex-row gap-1"
          >
            {item.icon}
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
