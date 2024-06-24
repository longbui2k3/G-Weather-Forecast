import axios from "axios";
import { API_ORIGIN } from "../utils/globalVariable";

export const sendEmail = async (email) => {
  try {
    const res = await axios.post(
      `${API_ORIGIN}/api/v1/email/send`,
      { email },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    if (err) return err.response?.data;
  }
};
