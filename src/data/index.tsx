import { IoHome } from "react-icons/io5";
import { SiShopee } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
import { HomeSortByProps, NavBarProps } from "@/types";

const NavData: NavBarProps[] = [
  {
    slug: "home",
    icon: <IoHome className="text-2xl relative bottom-[2px]" />,
    title: "Home",
  },
  {
    slug: "products",
    icon: <SiShopee className="text-2xl relative bottom-[2px]" />,
    title: "Products",
  },
  {
    slug: "popular",
    icon: <HiTrendingUp className="text-2xl relative bottom-[2px]" />,
    title: "Phổ biến",
  },
];

const HomeSortData: HomeSortByProps[] = [
  {
    key: "best",
    title: "Best",
  },
  {
    key: "hot",
    title: "Hot",
  },
  {
    key: "new",
    title: "New",
  },
  {
    key: "top",
    title: "Top",
  },
  {
    key: "rising",
    title: "Rising",
  },
];

export { NavData, HomeSortData };
