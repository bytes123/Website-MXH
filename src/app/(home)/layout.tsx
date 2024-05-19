"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header, Footer, UserLeftBar } from "@/layouts";
import Providers from "@/api/Providers";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " overflow-hidden"}>
        <Suspense fallback={<Loading />}>
          <NextUIProvider>
            <Providers>
              <Header />
              <div className="flex ">
                <UserLeftBar className="navBar sticky top-[92px] hidden xl:block" />
                <div className="w-full overflow-y-auto h-[100vh]">
                  {children}
                </div>
              </div>
            </Providers>
          </NextUIProvider>
        </Suspense>
      </body>
    </html>
  );
}
