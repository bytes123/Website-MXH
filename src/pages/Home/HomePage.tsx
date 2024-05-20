import Box from "@/components/Core/Box";
import HomePost from "@/components/Home/HomePost";
import UserRightBar from "@/layouts/NavBar/UserRightBar";
import React from "react";

export function HomePage() {
  return (
    <main className="grid grid-cols-4">
      <Box classNames="px-10 xl:px-20 py-5 col-span-4 xl:col-span-3 ">
        <HomePost />
        <HomePost />
      </Box>
      <UserRightBar />
    </main>
  );
}
