import { ReactNode } from "react";
import { IoHome } from "react-icons/io5";
import { SiShopee } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
interface props {
  slug: string;
  icon: ReactNode;
  title: string;
}

export const NavData: props[] = [
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
