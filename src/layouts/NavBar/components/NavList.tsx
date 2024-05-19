import React, { ReactNode } from "react";
import NavItem from "./NavItem";

interface props {
  children: ReactNode;
}

export default function NavList({ children }: props) {
  return <ul className="mx-5 py-3 gap-y-1 flex flex-col">{children}</ul>;
}
