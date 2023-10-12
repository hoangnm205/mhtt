"use client";
import { Menu_Children } from "@/utils/constants/common.constants";
import { IConfigSubMenu } from "@/utils/types/common.types";
import Link from "next/link";

interface Props {
  config: IConfigSubMenu;
}

const FlyoutMenus = ({ config }: Props) => {
  const menuItemsQuant = Object.keys(Menu_Children[config.type]).length;
  const menuItems = Object.keys(Menu_Children[config.type]).map((item) => {
    return (Menu_Children[config.type] as any)[item];
  });
  return (
    <div
      className={`p-6 bg-red ${
        config.isOpen ? "block" : "hidden"
      } grid grid-cols-${menuItemsQuant} gap-8 border-x-0 border-y border-solid border-gray-200 absolute bg-[rgba(255,255,255,.9)] w-full z-10`}
    >
      {menuItems.map((item) => (
        <div key={item.label}>
          <div className="font-bold">
            <Link href={item.href}>{item.label}</Link>
          </div>
          {item.children && item.children.length > 0 && (
            <div className="mt-4">
              {item.children.map(
                (
                  each: { id: string; label: string; href: string },
                  index: number
                ) => (
                  <div key={each.id} className={index > 0 ? "mt-1" : ""}>
                    <Link href={each.href}>{each.label}</Link>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlyoutMenus;
