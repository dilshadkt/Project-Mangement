import axios from "@/utils/axios";

export const deleteStick = async (stickId: string) => {
  try {
    await axios.delete(`stick/${stickId}`);
  } catch (error) {
    error;
  }
};
export const saveChanges = async (
  stickId: string,
  dataTochange: { title?: string; desc?: string }
) => {
  try {
    const res = await axios.patch(`stick/${stickId}`, dataTochange);
    return res.data.stick;
  } catch (error) {
    console.log(error);
  }
};
