import { HomePage } from "@/layouts";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mạng xã hội lớn nhất Việt Nam",
  description: "Deverse nơi giành riêng cho bạn",
};

export default function Home() {
  return <HomePage />;
}
