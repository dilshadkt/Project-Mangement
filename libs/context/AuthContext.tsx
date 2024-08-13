"use client";
import { createContext, ReactNode, useState } from "react";

type AuthContext = {
  isOtpSend: boolean;
  setIsOtpSend: () => {};
};
export const AuthContext = createContext<AuthContext | any>("");

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOtpSend, setIsOtpSend] = useState(false);
  const updateOtStatus = () => {
    setIsOtpSend(true);
  };
  return (
    <AuthContext.Provider value={{ isOtpSend, updateOtStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
