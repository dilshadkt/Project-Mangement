import axios from "@/utils/axios";
export const verifyEmail = async (
  router: any,
  email: string,
  setIsOtpSend: any,
  setError: any
) => {
  try {
    const result = await axios.post("auth/get-otp", { email });
    if (result.data.success) {
      setIsOtpSend(true);
      router.push("/auth/confirm");
    }
  } catch (error: any) {
    setError(error.response.data.error);
  }
};
