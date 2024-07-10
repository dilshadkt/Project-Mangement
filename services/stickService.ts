import { API_URL } from "@/constants";
import { RootState } from "@/libs/store";
import axios from "axios";
import { useSelector } from "react-redux";

export const deleteStick = async (stickId: string) => {
  try {
    await axios.delete(`${API_URL}stick/${stickId}`);
  } catch (error) {
    error;
  }
};
