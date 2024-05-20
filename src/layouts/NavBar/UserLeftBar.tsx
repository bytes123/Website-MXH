"use client";
import React, { useEffect, useRef, useState } from "react";
import NavList from "./components/NavList";
import NavItem from "./components/NavItem";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { NavData } from "@/data";

interface props {
  className?: string;
}
export const UserLeftBar = ({ className }: props) => {
  const pathname = usePathname();
  const NavBarRef = useRef<HTMLInputElement>(null);
  const [isMouseMove, setIsMouseMove] = useState<boolean>(false);

  const onMouseMove = () => {
    setIsMouseMove(true);
  };

  const onMouseOut = () => {
    setIsMouseMove(false);
  };

  return (
    <nav
      ref={NavBarRef}
      className={
        className +
        ` ${
          isMouseMove ? "overflow-y-auto" : "overflow-y-hidden"
        }  h-[100vh]  border-r-1 w-[400px]`
      }
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
    >
      <NavList>
        {NavData.map((item) => {
          return (
            <NavItem key={item.slug}>
              <Link
                href={"/" + item.slug}
                className={
                  "/" + item.slug == pathname ||
                  (pathname === "/" && item.slug === "home")
                    ? styles.navLinkActive
                    : styles.navLink
                }
              >
                {item.icon}
                {item.title}
              </Link>
            </NavItem>
          );
        })}
      </NavList>
    </nav>
  );
};
