"use client";

import Image from "next/image";
import FlyoutMenus from "../FlyoutMenus";
import { Fragment, useState } from "react";
import {
  Flyout_Menu_Item,
  MENU_HREF,
} from "@/utils/constants/common.constants";
import { useRouter } from "next/navigation";
import { IConfigSubMenu } from "@/utils/types/common.types";
import Images from "@/public/images";
import { Drawer } from "antd";
import Link from "next/link";

const LayoutHeader = () => {
  const router = useRouter();

  const [configSubMenu, setConfigSubMenu] = useState<IConfigSubMenu>({
    isOpen: false,
    type: Flyout_Menu_Item.PRODUCT,
  });

  const handleClickMenuItem = (
    key:
      | Flyout_Menu_Item.HOME
      | Flyout_Menu_Item.CONTACT
      | Flyout_Menu_Item.PRODUCT
      | Flyout_Menu_Item.SOLUTION
  ) => {
    router.push(MENU_HREF[key]);
  };
  const handleConfigSubMenu = (
    key: Flyout_Menu_Item.PRODUCT | Flyout_Menu_Item.SOLUTION
  ) => {
    setConfigSubMenu({
      isOpen: true,
      type: key,
    });
  };
  return (
    <Fragment>
      <div className="hidden xl:block">
        <div className="bg-black ">
          <div className="max-w-[1200px] mx-auto flex items-center py-3">
            <Image src={Images.ic_phone} alt="ic-phone" />
            <span className="text-white ml-2 font-semibold">
              Hotline: 091 216 5811
            </span>
          </div>
        </div>
        <div
          className="max-w-[1200px] mx-auto relative"
          onMouseLeave={() => {
            setConfigSubMenu((prev) => ({ ...prev, isOpen: false }));
          }}
        >
          <div className="py-4 flex items-center justify-between">
            <div className="flex-1 flex items-center">
              <div className="w-24">
                <Link href="/">
                  <Image
                    style={{ width: "100%" }}
                    src={Images.img_brand_logo}
                    alt="brand-logo"
                  />
                </Link>
              </div>
              <div className="uppercase ml-5 text-3xl font-bold text-center flex-1 text-[#8D3032]">
                Màn hình tương tác thông minh ESING unso
              </div>
            </div>

            {/* <div className="flex items-center">
              <div
                className="uppercase font-bold cursor-pointer"
                onClick={() => handleClickMenuItem(Flyout_Menu_Item.HOME)}
              >
                home
              </div>
              <div
                className="uppercase font-bold ml-16 cursor-pointer"
                onClick={() => handleClickMenuItem(Flyout_Menu_Item.PRODUCT)}
                onMouseOver={() =>
                  handleConfigSubMenu(Flyout_Menu_Item.PRODUCT)
                }
              >
                product +
              </div>
              <div
                className="uppercase font-bold ml-16 cursor-pointer"
                onClick={() => handleClickMenuItem(Flyout_Menu_Item.SOLUTION)}
                onMouseOver={() =>
                  handleConfigSubMenu(Flyout_Menu_Item.SOLUTION)
                }
              >
                solution +
              </div>
              <div
                className="uppercase font-bold ml-16 cursor-pointer"
                onClick={() => handleClickMenuItem(Flyout_Menu_Item.CONTACT)}
              >
                contact
              </div>
            </div> */}
          </div>

          <FlyoutMenus config={configSubMenu} />
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="bg-black px-2 py-3 flex items-center">
          <span className="text-white ml-2 font-semibold text-xs">
            Hotline: 091 216 5811
          </span>
        </div>
        <div className="py-6 px-2">
          <div className="flex items-center">
            <Image src={Images.img_brand_logo} alt="" className="w-1/6" />
            <div className="font-bold ml-4 text-xl text-[#8D3032]">
              Màn hình tương tác <br /> thông minh ESING unso
            </div>
          </div>
          {/* <div className="grid grid-cols-4 gap-4 mt-6 border-x-0 border-t border-b-0 border-gray-100 pt-6">
            <div
              className="text-center"
              onClick={() => handleClickMenuItem(Flyout_Menu_Item.HOME)}
            >
              home
            </div>
            <div
              className="text-center"
              onClick={() => handleClickMenuItem(Flyout_Menu_Item.PRODUCT)}
            >
              product +
            </div>
            <div
              className="text-center"
              onClick={() => handleClickMenuItem(Flyout_Menu_Item.SOLUTION)}
            >
              solution +
            </div>
            <div
              className="text-center"
              onClick={() => handleClickMenuItem(Flyout_Menu_Item.CONTACT)}
            >
              contact
            </div>
          </div> */}
        </div>
      </div>
      <Drawer />
    </Fragment>
  );
};

export default LayoutHeader;
