"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const SideMenu = () => {
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
    <div className="w-full lg:w-[30%] border-r-2 border-gray-700 border-dashed pr-2">
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="w-full bg-inherit "
      >
        {menuItems.map((item, i) => {
          const value = `item-${i + 1}`;

          return (
            <AccordionItem
              key={i}
              value={value}
              className="data-[state=open]:bg-midnight-700 data-[state=open]:rounded-md border-none transition-colors px-2"
            >
              <AccordionTrigger className="uppercase [&>svg]:hidden">
                <span className="self-center">{item.title} </span>
                <span className="p-2 rounded-md bg-gray-800">
                  {item.children.length}
                </span>
              </AccordionTrigger>
              {item.children.map((child, i) => (
                <AccordionContent key={i} className="pl-6">
                  {child}
                </AccordionContent>
              ))}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default SideMenu;
