import { useContext } from "react";

import { TimerContext } from "./TimerContext";
import { TaskContext } from "./taskContext";

export const TimerCnxt = () => useContext(TimerContext);
export const TaskCnxt = () => useContext(TaskContext);
