"use client";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

// Define the type for the context value
type TimerContextType = {
  time: number | null;
  setTime: Dispatch<SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
};

// Create the context with an initial value
export const TimerContext = createContext<TimerContextType | any>("");

export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState(Number(localStorage.getItem("time") || 600));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const storedTime = localStorage.getItem("time");
    const storedIsRunning = localStorage.getItem("isRunning");
    if (storedTime) setTime(Number(storedTime));
    if (storedIsRunning) setIsRunning(storedIsRunning === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("time", time.toString());
    localStorage.setItem("isRunning", isRunning.toString());
  }, [time, isRunning]);

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 1) return prevTime - 1;
          setIsRunning(false);
          new Audio("/sounds/alarm.wav").play();
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);
  return (
    <TimerContext.Provider value={{ time, setTime, isRunning, setIsRunning }}>
      {children}
    </TimerContext.Provider>
  );
};
