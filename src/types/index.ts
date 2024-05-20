import type { MouseEventHandler, ReactNode, RefObject } from "react";

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
