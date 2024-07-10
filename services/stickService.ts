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
export const saveChanges = async (
  stickId: string,
  dataTochange: { title?: string; desc?: string }
) => {
  try {
    const res = await axios.patch(`${API_URL}stick/${stickId}`, dataTochange);
    return res.data.stick;
  } catch (error) {
    console.log(error);
  }
};
