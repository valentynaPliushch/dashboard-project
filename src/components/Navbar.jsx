"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Accounts", href: "/account" },
  { name: "Settings", href: "/settings" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                "text-sm font-medium",
                pathname === item.href
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-500 hover:text-gray-800"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
