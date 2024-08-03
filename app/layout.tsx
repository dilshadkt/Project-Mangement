import SonerProvider from "@/libs/SonnerProvider";
import StoreProvider from "@/libs/StoreProvider";
import { lexendDex } from "@/libs/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Organic Mind",
  description:
    "Organic Mind is customized for individuals seeking a stress-free way stay focused on thier goals, projects,and tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexendDex.className}>
        {/* <TimerContextProvider>
          <TaskContextProvider> */}
        <StoreProvider>{children}</StoreProvider>
        <SonerProvider />
        {/* </TaskContextProvider>
        </TimerContextProvider> */}
      </body>
    </html>
  );
}
