"use client";
import HomePost from "./HomePost";
import { UserRightBar } from "@/layouts";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Box, Collumn, Row } from "@/components";
import { HomeSortData } from "@/data";
import { FaAngleDown } from "react-icons/fa6";
import wait from "wait";
import { Post } from "@/types";
interface slugProp {
  slug: string;
}

export function HomePage() {
  const [sortBy, setSortBy] = useState<string>("best");
  const [posts, setPosts] = useState<Post[]>([
    {
      avatar: "/logo/logo.svg",
      name: "r/funny",
      title: "How much is this worth ?",
      time: 2,
      image: "/images/nextjs.jpg",
    },
    {
      avatar: "/logo/logo.svg",
      name: "r/funny",
      title: "How much is this worth ?",
      time: 2,
      image: "/images/nextjs.jpg",
    },
    {
      avatar: "/logo/logo.svg",
      name: "r/funny",
      title: "How much is this worth ?",
      time: 2,
      image: "/images/nextjs.jpg",
    },
    {
      avatar: "/logo/logo.svg",
      name: "r/funny",
      title: "How much is this worth ?",
      time: 2,
      image: "/images/nextjs.jpg",
    },
  ]);
  const onSort = (key: string) => {
    setSortBy(key);
  };

  const defaultSort = HomeSortData.find((item) => item.key === sortBy)?.title;

  return (
    <main className="grid grid-cols-4">
      <Box classNames="px-10 xl:px-20 py-5 col-span-4 xl:col-span-3 ">
        <Box classNames="mb-5">
          <Popover>
            <PopoverTrigger>
              <Row classNames="items-center gap-x-1 text-slate-500 font-semibold">
                <span>{defaultSort}</span>
                <FaAngleDown />
              </Row>
            </PopoverTrigger>
            <PopoverContent className="!w-[100px] p-0">
              <Collumn classNames="gap-y-2">
                {HomeSortData.length
                  ? HomeSortData.map((item) => (
                      <Box
                        onClick={() => onSort(item.key)}
                        key={item.key}
                        classNames={`text-xl p-5 w-full cursor-pointer ${
                          sortBy == item.key ? "bg-slate-100" : ""
                        }`}
                      >
                        {item.title}
                      </Box>
                    ))
                  : ""}
              </Collumn>
            </PopoverContent>
          </Popover>
        </Box>
        <Box>
          {posts.length
            ? posts.map((item, index) => <HomePost {...item} key={index} />)
            : ""}
        </Box>
      </Box>
      <UserRightBar />
    </main>
  );
}
