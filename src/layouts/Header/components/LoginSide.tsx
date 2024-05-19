import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Session } from "next-auth";
import SubAvatarMenu from "./SubAvatarMenu";

interface UserProps {
  session: Session | null;
}

const LoginSide: React.FC<UserProps> = ({ session }) => {
  const [isOpenAvatarMenu, setIsOpenAvatarMenu] = useState(false);
  const SubAvatarMenuRef = useRef<HTMLInputElement>(null);
  const onToggleMenuAvatar = () => {
    setIsOpenAvatarMenu(!isOpenAvatarMenu);
  };

  const onInputSubMenuOutside = (event: MouseEvent) => {
    if (
      SubAvatarMenuRef.current &&
      !SubAvatarMenuRef.current.contains(event.target as Node)
    ) {
      setIsOpenAvatarMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onInputSubMenuOutside);
    return () => {
      document.removeEventListener("mousedown", onInputSubMenuOutside);
    };
  }, []);

  return (
    <div className="flex justify-end">
      <div ref={SubAvatarMenuRef}>
        <div className="relative">
          <Image
            onClick={onToggleMenuAvatar}
            className="rounded-full cursor-pointer"
            alt="avatar"
            src={session?.user?.image || "/default-avatar.png"}
            width={50}
            height={50}
          />

          {isOpenAvatarMenu && <SubAvatarMenu session={session} />}
        </div>
      </div>
    </div>
  );
};

export default LoginSide;
