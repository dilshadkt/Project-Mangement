import axios from "@/utils/axios";

export const getUser = async () => {
  try {
    const res = await axios("profile");
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (changes: any) => {
  try {
    const res = await axios.patch("profile", changes);
    const { firstName, lastName } = res.data.user;
    return { firstName, lastName };
  } catch (error) {
    console.log(error);
  }
};
