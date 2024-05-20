import type { MouseEventHandler, ReactNode, RefObject } from "react";
import { IconType } from "react-icons";
export interface RecentPost {
  id: number;
  img: string;
  name: string;
  title: string;
  upvoteQuantity: number;
  commentQuantity: number;
}

export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
}

export interface NavBarProps {
  slug: string;
  icon: ReactNode;
  title: string;
}

export interface HomeSortByProps {
  key: string;
  title: string;
}

export interface Post {
  avatar?: string;
  name?: string;
  title?: string;
  time?: number;
  image?: string;
}
