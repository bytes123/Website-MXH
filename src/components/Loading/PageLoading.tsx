"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export const PageLoading = () => {
  return (
    <div className="fixed top-0 bottom-0 !z-[9999] left-0 right-0 h-full w-full bg-orange-300 flex justify-center items-center">
      <Image src="/icon/loading.svg" width="80" height="80" alt="loading" />
      <p className="text-white text-6xl ml-5">Loading...</p>
    </div>
  );
};
