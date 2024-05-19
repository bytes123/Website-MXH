"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import UnLoginSide from "./components/UnLoginSide";
import LoginSide from "./components/LoginSide";
import HeaderSearch from "./components/HeaderSearch";
import { useSession } from "next-auth/react";
import Image from "next/image";
type headerProps = { className?: string };

export const Header = ({ className }: headerProps) => {
  const [isInputHeaderFocus, setIsInputHeaderFocus] = useState<Boolean>(false);
  const SearchHeaderRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();

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
    <div className="sticky top-0 z-[997] bg-white">
      <div className={"relative w-full  p-5 font-bold xl:block h-[92px]"}>
        <div
          className={`absolute w-full left-0 right-0 bottom-0 h-[1px] z-20 bg-slate-200`}
        ></div>
        <div className=" grid xl:grid-cols-5 2xl:grid-cols-3 grid-cols-6">
          <div className="xl:col-span-1 2xl:col-span-1 col-span-1">
            <Link
              href="/products"
              className="text-4xl text-orange-500 hidden xl:inline"
            >
              Deverse
            </Link>
            <Image
              alt="logo "
              width={50}
              height={50}
              src="/logo/logo.svg"
              className="xl:hidden block ml-5"
            />
          </div>
          <div
            className=" relative  xl:col-span-3 2xl:col-span-1 col-span-4"
            ref={SearchHeaderRef}
          >
            <HeaderSearch
              isInputHeaderFocus={isInputHeaderFocus}
              onInputHeaderFocus={onInputHeaderFocus}
            />
          </div>
          <div className="xl:col-span-1 2xl:col-span-1 col-span-1">
            {session && session.user ? (
              <LoginSide session={session} />
            ) : (
              <UnLoginSide />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
