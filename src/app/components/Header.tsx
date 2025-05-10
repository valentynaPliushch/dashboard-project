"use client";

import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="container flex lg:justify-between md:justify-center">
        <p className="text-white text-2xl">
          Hi Artur, welcome! You have 12 open tasks.
        </p>
        <div className="flex flex-row gap-2">
          {" "}
          <Input
            placeholder="Search..."
            className="max-w-sm rounded-4xl"
            readOnly
          />
          <Avatar>
            <AvatarFallback className="bg-blue-500">AR</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <hr className="bg-gray-200 border-0 w-full" />
      <Navigation />
    </div>
  );
};
export default Header;
