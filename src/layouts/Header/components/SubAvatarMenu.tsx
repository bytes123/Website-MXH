import React from "react";
import { signOut } from "next-auth/react";
import styles from "../header.module.scss";
import { Session } from "next-auth";
import Image from "next/image";
import { MdLogout } from "react-icons/md";
interface props {
  session: Session | null;
}

export default function SubAvatarMenu({ session }: props) {
  return (
    <div className={styles.SubAvatarMenu}>
      <div className={"flex cursor-pointer " + styles.SubAvatarMenu__item}>
        <div>
          <Image
            className="rounded-full cursor-pointer"
            alt="avatar"
            src={session?.user?.image || "/default-avatar.png"}
            width={50}
            height={50}
          />
        </div>
        <div className="font-normal ml-2">
          <p>View Profile</p>
          <p className="text-left text-gray-600">{session?.user?.name}</p>
        </div>
      </div>
      <div className={styles.SubAvatarMenu__item} onClick={() => signOut()}>
        <div className="flex gap-x-2 items-center ">
          <MdLogout className="text-3xl" />
          <p>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
}
