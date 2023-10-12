import { Flyout_Menu_Item } from "../constants/common.constants";

export interface IConfigSubMenu {
  isOpen: boolean;
  type: Flyout_Menu_Item.PRODUCT | Flyout_Menu_Item.SOLUTION;
}

export type IMenuItem =
  | Flyout_Menu_Item.CONTACT
  | Flyout_Menu_Item.HOME
  | Flyout_Menu_Item.PRODUCT
  | Flyout_Menu_Item.SOLUTION;
