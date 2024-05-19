"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import Image from "next/image";
interface loginBtnProp {
  className?: string;
}

export const GoogleLoginButton = ({ className }: loginBtnProp) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "http://localhost:3000/" });
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      className={`${className}`}
      onClick={loginWithGoogle}
    >
      {isLoading && (
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          width="50px"
          height="50px"
        >
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="50 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )}
      <div className="flex text-lg justify-center items-center gap-x-2">
        <span>Sign In with</span> <FcGoogle className="text-2xl" />
      </div>
    </Button>
  );
};
