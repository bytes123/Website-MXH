"use client";
import { RecentPost } from "@/types/RecentPost";
import Image from "next/image";
import React, { useState } from "react";

export default function UserRightBar() {
  const [isClearPost, setIsClearPost] = useState<boolean>(false);
  const [fakeRecentPosts, setRecentPosts] = useState<RecentPost[]>([
    {
      id: 1,
      img: "/logo/logo.svg",
      name: "r/nextks",
      title: " How to render the same component for different routes?",
      upvoteQuantity: 15,
      commentQuantity: 4,
    },
    {
      id: 2,
      img: "/logo/logo.svg",
      name: "r/nextks",
      title: " How to render the same component for different routes?",
      upvoteQuantity: 15,
      commentQuantity: 4,
    },
    {
      id: 3,
      img: "/logo/logo.svg",
      name: "r/nextks",
      title: " How to render the same component for different routes?",
      upvoteQuantity: 15,
      commentQuantity: 4,
    },
  ]);

  const onClear = () => {
    setRecentPosts([]);
  };

  return fakeRecentPosts.length ? (
    <div className="hidden py-10 px-5 xl:block xl:col-span-1 sticky top-0 overflow-hidden h-[100vh]">
      <div className="rounded-xl py-5 bg-slate-100 ">
        <div className="flex justify-between mb-5 px-5">
          <h4 className="uppercase text-gray-500">RECENT POSTS</h4>
          <span className="text-sky-400 cursor-pointer" onClick={onClear}>
            Clear
          </span>
        </div>
        <div className="post__recent">
          <ul>
            {fakeRecentPosts.map((post) => (
              <li key={post.id} className="px-5 border-b-2 mb-2">
                <div className="flex items-center gap-x-2 mb-3">
                  <Image src={post.img} alt="abc" width={30} height={30} />
                  <h5 className="text-gray-400 font-normal"></h5>
                </div>
                <div className="mb-3">
                  <h4 className="text-gray-500 font-semibold text-md">
                    {post.title}
                  </h4>
                </div>
                <div className="flex gap-x-5 font-normal mb-3">
                  <h5>{post.upvoteQuantity} upvotes</h5>
                  <h5>{post.commentQuantity} comments</h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
