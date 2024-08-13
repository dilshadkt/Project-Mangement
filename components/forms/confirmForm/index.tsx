"use client";
import ActionButton from "@/components/buttons/ActionButton";
import { signInUser } from "@/libs/features/user/action";
import { AppDispatch, RootState } from "@/libs/store";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import React, {
  useState,
  useRef,
  FormEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfirmationForm = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((store: RootState) => store.user);
  const router = useRouter();
  useEffect(() => {
    if (user.logged === true) {
      router.replace("/");
    }
  }, [user.logged]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const enteredCode = code.join("");
      if (enteredCode.length === 6) {
        const userDetails = JSON.parse(
          localStorage.getItem("userDetails") as string
        );
        const result = await axios.post("auth/verify-otp", {
          otp: enteredCode,
          email: userDetails.email,
        });
        if (result.data.success) {
          dispatch(signInUser(userDetails));
        }
      } else {
        setError("Please enter a 6-digit code");
      }
    } catch (error: any) {
      setError(error.response.data.error);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="my-4 bold-38">Verify Email</h4>
      <p>
        Enter the 6-digit code we sent to your email address to verify your
        account
      </p>
      <div className="grid grid-cols-6 gap-3 my-7">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            className="code-input border p-3 flexCenter text-center rounded-lg  aspect-square  "
          />
        ))}
      </div>
      {error && <p className="text-xs text-red-500 ">{error}</p>}
      <ActionButton text="Vefiy" ButtonStyle="w-full mt-7" />
    </form>
  );
};

export default ConfirmationForm;
