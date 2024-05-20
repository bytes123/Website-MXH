"use client";
import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Box, Row } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types";
import wait from "wait";

export default function HomePost(props: Post) {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    wait(3000);

    setPost(props);
  }, [props]);

  return (
    <Box classNames="border-t py-3">
      <Box classNames="relative ">
        <Link
          href=""
          className={`block py-2 px-5  ${
            post ? "hover:bg-slate-100" : "pointer-events-none"
          } rounded-2xl `}
        >
          <Box classNames="mb-5">
            <Row classNames="gap-x-2 items-center mb-5">
              <Row classNames="gap-x-2 items-center">
                <Box>
                  {post?.avatar ? (
                    <Image
                      src={post?.avatar}
                      alt="postImage"
                      width={30}
                      height={30}
                    />
                  ) : (
                    <Skeleton className="h-[30px] w-[30px] rounded-xl" />
                  )}
                </Box>
                <Box>
                  {post?.name ? (
                    <h5>{post?.name}</h5>
                  ) : (
                    <Skeleton className="h-4 w-[100px]" />
                  )}
                </Box>
              </Row>
              <Row>
                {post?.time ? (
                  <>
                    <Box>
                      <span>•</span>
                    </Box>
                    <Box classNames="">
                      <span>{post?.time} days ago</span>
                    </Box>
                  </>
                ) : (
                  <Skeleton className="h-4 w-[200px]" />
                )}
              </Row>
            </Row>
            <Box classNames="text-2xl font-semibold mb-5">
              {post?.title ? (
                <h3>{post?.title}</h3>
              ) : (
                <Skeleton className="h-6 w-[500px]" />
              )}
            </Box>
            <Box classNames="mb-20">
              {post?.image ? (
                <Image
                  src={post?.image}
                  alt="post"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "90%" }}
                />
              ) : (
                <Skeleton className="block w-full h-[500px] rounded-2xl" />
              )}
            </Box>
          </Box>
        </Link>

        {post?.title ? (
          <Box classNames="w-[100px] absolute bottom-5 left-[20px] z-10 py-2 px-4 rounded-full bg-slate-200 inline cursor-pointer">
            <Row classNames="items-center justify-center text-lg gap-x-2">
              <AiOutlineLike />
              <span>7k</span>
            </Row>
          </Box>
        ) : (
          <Box classNames="absolute bottom-5 left-[20px] z-10">
            <Skeleton className="w-[100px] h-10 rounded-full" />
          </Box>
        )}
        {post?.title ? (
          <Box classNames="w-[100px] absolute bottom-5 left-[140px] text-lg xl:left-[160px] z-10 py-2 px-4 rounded-full bg-slate-200 inline cursor-pointer">
            <Row classNames="items-center justify-center text-lg gap-x-2">
              <FaRegCommentAlt />
              <span>139</span>
            </Row>
          </Box>
        ) : (
          <Box classNames="absolute bottom-5 left-[140px] z-10">
            <Skeleton className="w-[100px] h-10 rounded-full" />
          </Box>
        )}
        {post?.title ? (
          <Box classNames="w-[100px] absolute bottom-5 left-[260px] text-lg xl:left-[300px] z-10 py-2 px-4 rounded-full bg-slate-200 inline cursor-pointer">
            <Row classNames="items-center justify-center text-lg gap-x-2">
              <IoShareSocialOutline />
              <span>139</span>
            </Row>
          </Box>
        ) : (
          <Box classNames="absolute bottom-5 left-[260px] z-10">
            <Skeleton className="w-[100px] h-10 rounded-full" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
