import Images from "@/public/images";

export enum Flyout_Menu_Item {
  HOME = "HOME",
  PRODUCT = "PRODUCT",
  SOLUTION = "SOLUTION",
  CONTACT = "CONTACT",
}

export const MENU_HREF = {
  [Flyout_Menu_Item.HOME]: "/",
  [Flyout_Menu_Item.PRODUCT]: "/",
  [Flyout_Menu_Item.SOLUTION]: "/",
  [Flyout_Menu_Item.CONTACT]: "/",
};

export enum PRODUCT_MENU_CHILDREN {
  IR = "IR Interactive Display",
  BOARD = "PCAP Smart Blackboard",
  SOCIAL = "Commercial Display",
  ACCESSORIES = "Accessories",
}

export enum SOLUTION_MENU_CHILDREN {
  EDUCATION = "Education Solution",
  CONFERENCE = "Conference Solution",
}

export const Menu_Children = {
  [Flyout_Menu_Item.PRODUCT]: {
    [PRODUCT_MENU_CHILDREN.IR]: {
      label: PRODUCT_MENU_CHILDREN.IR,
      href: "/",
      image: Images.img_product_ir,
      children: [
        {
          id: "product-1",
          label: "Android 11.0 ST311D2-L",
          href: "/",
        },
        {
          id: "product-2",
          label: "Android 11.0 ST311D2-K",
          href: "/",
        },
        {
          id: "product-3",
          label: "Android 11.0 T311D2-K",
          href: "/",
        },
        {
          id: "product-4",
          label: "Android 11.0 T311D2-K",
          href: "/",
        },
        {
          id: "product-5",
          label: "Android 11.0 T982",
          href: "/",
        },
        {
          id: "product-6",
          label: "Android 11.0 T311D2-L",
          href: "/",
        },
        {
          id: "product-7",
          label: "Win OS Only D",
          href: "/",
        },
        {
          id: "product-8",
          label: "Win OS only - D series",
          href: "/",
        },
      ],
    },
    [PRODUCT_MENU_CHILDREN.BOARD]: {
      label: PRODUCT_MENU_CHILDREN.BOARD,
      href: "/",
      image: Images.img_product_board,
      children: [
        {
          id: "board-1",
          label: "LG In-Cell Smart Blackboard - Android 11.0 982",
          href: "/",
        },
        {
          id: "board-2",
          label: "LG In-Cell Smart Blackboard - Android 11.0 9632",
          href: "/",
        },
      ],
    },
    [PRODUCT_MENU_CHILDREN.SOCIAL]: {
      label: PRODUCT_MENU_CHILDREN.SOCIAL,
      href: "/",
      image: Images.img_product_commercial,
      children: [
        { id: "social-1", label: "Monitor", href: "/" },
        { id: "social-2", label: "Kiosk", href: "/" },
        { id: "social-3", label: "TV", href: "/" },
      ],
    },
    [PRODUCT_MENU_CHILDREN.ACCESSORIES]: {
      label: PRODUCT_MENU_CHILDREN.ACCESSORIES,
      href: "/",
      image: Images.img_product_accessories,
      children: [
        {
          id: "accessory-1",
          label: "External Video Conference Camera",
          href: "/",
        },
        {
          id: "accessory-2",
          label: "OPS mini Computer Moulder",
          href: "/",
        },
        {
          id: "accessory-3",
          label: "Wireless Microphone",
          href: "/",
        },
        {
          id: "accessory-4",
          label: "Wireless Miracast Dongle",
          href: "/",
        },
        {
          id: "accessory-5",
          label: "Smart Passive Pen",
          href: "/",
        },
        {
          id: "accessory-6",
          label: "Mobile Stand",
          href: "/",
        },
      ],
    },
  },
  [Flyout_Menu_Item.SOLUTION]: {
    [SOLUTION_MENU_CHILDREN.EDUCATION]: {
      label: SOLUTION_MENU_CHILDREN.EDUCATION,
      href: "/",
    },
    [SOLUTION_MENU_CHILDREN.CONFERENCE]: {
      label: SOLUTION_MENU_CHILDREN.CONFERENCE,
      href: "/",
    },
  },
};
