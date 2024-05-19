import React, { ReactNode } from "react";
interface props {
  className?: string;
  children: ReactNode;
}
export default function NavItem({ className = "", children }: props) {
  return <li className={"text-xl " + className}>{children}</li>;
}
