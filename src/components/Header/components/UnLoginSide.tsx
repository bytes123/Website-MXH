import React from "react";
import { PrimaryButton } from "../../Button/PrimaryButton";
export default function UnLoginSide() {
  return (
    <div className="flex justify-end gap-x-2">
      <PrimaryButton text="Get app" className="bg-slate-200 hidden xl:block" />
      <PrimaryButton text="Log in" className="bg-orange-600 text-white" />
    </div>
  );
}
