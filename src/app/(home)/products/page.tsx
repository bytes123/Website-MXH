import type { Metadata } from "next";
import wait from "wait";
export const metadata: Metadata = {
  title: "Sản phẩm của Deverse",
  description: "Deverse nơi giành riêng cho bạn",
};

export default async function Products() {
  await wait(2000);
  return <div className="p-10"></div>;
}
