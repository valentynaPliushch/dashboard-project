"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const SideMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: "Dashboard",
      children: ["Overview", "Stats", "Reports"],
    },
    {
      title: "Risk Assessment",
      children: ["Overview", "Stats", "Reports"],
    },
    {
      title: "Documents and Compliance",
      children: ["Overview", "Stats", "Reports"],
    },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white p-4 rounded-lg border-r-2 border-gray-700 border-dashed">
      {/* {menuItems.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-700 rounded"
          >
            <span className="uppercase">{item.title}</span>
          </div>
          {openIndex === index && (
            <ul className="pl-4 text-sm text-gray-300">
              {item.children.map((child, idx) => (
                <li key={idx} className="py-1 hover:text-white cursor-pointer">
                  {child}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))} */}

      <Accordion type="single" collapsible className="w-full bg-inherit">
        {menuItems.map((item, i) => {
          const value = `item-${i}`;

          return (
            <AccordionItem
              value={value}
              className="data-[state=open]:bg-midnight-600 transition-colors"
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              {item.children.map((child, i) => (
                <AccordionContent>{child}</AccordionContent>
              ))}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SideMenu;
