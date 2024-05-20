import React from "react";
import Row from "../Core/Row";
import Box from "../Core/Box";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
export default function HomePost() {
  return (
    <Box classNames="border-t py-3">
      <Box classNames="relative ">
        <Link
          href=""
          className="block py-2 px-5  hover:bg-slate-100 rounded-2xl "
        >
          <Box classNames="mb-2">
            <Row classNames="gap-x-2">
              <Row classNames="gap-x-2">
                <Box>
                  <Image
                    src="/logo/logo.svg"
                    alt="postImage"
                    width={30}
                    height={30}
                  />
                </Box>{" "}
                <Box>
                  <h5>r/funny</h5>
                </Box>
              </Row>
              <Row>
                <Box>
                  <span>•</span>
                </Box>
                <Box classNames="">
                  <span>2 days ago</span>
                </Box>
              </Row>
            </Row>
            <Box classNames="text-2xl font-semibold mb-5">
              <h3>How much is this worth ?</h3>
            </Box>
            <Box classNames="mb-20">
              <Image
                src="/images/nextjs.jpg"
                alt="post"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "90%" }}
              />
            </Box>
          </Box>
        </Link>
        <Box classNames="w-[100px] absolute bottom-5 left-[20px] z-10 py-2 px-4 rounded-full bg-slate-200 inline cursor-pointer">
          <Row classNames="items-center justify-center text-lg gap-x-2">
            <AiOutlineLike />
            <span>7k</span>
          </Row>
        </Box>
        <Box classNames="w-[100px] absolute bottom-5 left-[140px] text-lg xl:left-[160px] z-10 py-2 px-4 rounded-full bg-slate-200 inline cursor-pointer">
          <Row classNames="items-center justify-center text-lg gap-x-2">
            <FaRegCommentAlt />
            <span>139</span>
          </Row>
        </Box>
        <Box classNames="w-[100px] absolute bottom-5 left-[260px] text-lg xl:left-[300px] z-10 py-2 px-4 rounded-full bg-slate-200 inline cursor-pointer">
          <Row classNames="items-center justify-center text-lg gap-x-2">
            <IoShareSocialOutline />
            <span>139</span>
          </Row>
        </Box>
      </Box>
    </Box>
  );
}
