"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import UnLoginSide from "./components/UnLoginSide";
import LoginSide from "./components/LoginSide";
import HeaderSearch from "./components/HeaderSearch";
import styles from "./header.module.scss";
type headerProps = { className?: string };

export const Header = ({ className }: headerProps) => {
  const [isInputHeaderFocus, setIsInputHeaderFocus] = useState<Boolean>(false);
  const SearchHeaderRef = useRef<HTMLInputElement>(null);

  const LoginSideBar = true ? UnLoginSide : LoginSide;

  const onInputHeaderFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsInputHeaderFocus(true);
  };

  const onInputHeaderOutside = (event: MouseEvent) => {
    if (
      SearchHeaderRef.current &&
      !SearchHeaderRef.current.contains(event.target as Node)
    ) {
      setIsInputHeaderFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onInputHeaderOutside);
    return () => {
      document.removeEventListener("mousedown", onInputHeaderOutside);
    };
  }, []);

  return (
    <div className={styles.header + " " + className}>
      <div className="grid xl:grid-cols-5 2xl:grid-cols-3 grid-cols-6">
        <div className="xl:col-span-1 2xl:col-span-1 col-span-1">
          <Link
            href="https://www.reddit.com/"
            className="text-4xl text-orange-500 inline"
          >
            Deverse
          </Link>
        </div>
        <div
          className="relative  xl:col-span-3 2xl:col-span-1 col-span-4"
          ref={SearchHeaderRef}
        >
          <HeaderSearch
            isInputHeaderFocus={isInputHeaderFocus}
            onInputHeaderFocus={onInputHeaderFocus}
          />
        </div>
        <div className="xl:col-span-1 2xl:col-span-1 col-span-1">
          <LoginSideBar />
        </div>
      </div>
    </div>
  );
};
