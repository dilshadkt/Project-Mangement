import { useContext } from "react";

import { TimerContext } from "./TimerContext";
import { TaskContext } from "./taskContext";
import { AuthContext } from "./AuthContext";

export const TimerCnxt = () => useContext(TimerContext);
export const TaskCnxt = () => useContext(TaskContext);
export const AuthCnxt = () => useContext(AuthContext);
