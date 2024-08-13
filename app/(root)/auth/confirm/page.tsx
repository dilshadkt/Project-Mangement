"use client";
import ConfirmationSection from "@/container/auth-page/confirm-page";
import { AuthCnxt, TaskCnxt } from "@/libs/context";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ConfirmEmail = () => {
  const { isOtpSend } = AuthCnxt();
  const router = useRouter();
  // Check the user has permission to enter this page
  useEffect(() => {
    if (!isOtpSend) {
      router.push("/auth/register");
    }
  }, [isOtpSend, router]);

  if (!isOtpSend) {
    return null; // Don't render anything if isOtpSend is false
  }
  return (
    <main>
      <ConfirmationSection />
    </main>
  );
};

export default ConfirmEmail;
