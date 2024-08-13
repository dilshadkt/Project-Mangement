import SonerProvider from "@/libs/SonnerProvider";
import StoreProvider from "@/libs/StoreProvider";
import { lexendDex } from "@/libs/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { AuthContextProvider } from "@/libs/context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
        <GoogleOAuthProvider clientId={`${process.env.CLIENT_ID}`}>
          <AuthContextProvider>
            <StoreProvider>{children}</StoreProvider>
          </AuthContextProvider>
        </GoogleOAuthProvider>
        <SonerProvider />
      </body>
    </html>
  );
}
