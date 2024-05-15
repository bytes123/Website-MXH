import React from "react";
import { IoIosSearch } from "react-icons/io";
interface headerSearchProps {
  isInputHeaderFocus: Boolean;
  onInputHeaderFocus: React.EventHandler<any>;
}

export default function HeaderSearch({
  isInputHeaderFocus,
  onInputHeaderFocus,
}: headerSearchProps) {
  return (
    <>
      <div
        className={`absolute w-full flex items-center z-10 px-4 ${
          isInputHeaderFocus
            ? "bg-white border-b pb-5 rounded-t-3xl"
            : "bg-slate-200 rounded-3xl"
        }  `}
        onFocus={onInputHeaderFocus}
      >
        <IoIosSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search Deverse"
          className={`w-full rounded-full font-medium h-full p-4  ${
            isInputHeaderFocus ? "bg-white" : "bg-slate-200"
          } outline-none`}
        />
      </div>
      {isInputHeaderFocus ? (
        <div className="absolute rounded-t-3xl rounded-b-3xl z-0 shadow-s-1 top-0 left-0 right-0 h-[300px] bg-white"></div>
      ) : (
        ""
      )}
    </>
  );
}
