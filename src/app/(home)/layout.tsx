"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header, Footer, UserLeftBar } from "@/layouts";
import Providers from "@/api/Providers";
import { NextUIProvider } from "@nextui-org/react";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import Row from "@/components/Core/Row";
import Box from "@/components/Core/Box";
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
              <Row>
                <UserLeftBar className="navBar sticky top-[92px] hidden xl:block" />
                <Box classNames="w-full overflow-y-auto h-[85vh] xl:h-[88vh]">
                  {children}
                </Box>
              </Row>
            </Providers>
          </NextUIProvider>
        </Suspense>
      </body>
    </html>
  );
}
