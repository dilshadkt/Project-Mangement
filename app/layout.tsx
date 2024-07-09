import type { Metadata } from "next";
import { lexendDex } from "@/libs/fonts";
import "./globals.css";
import StoreProvider from "@/libs/StoreProvider";

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
