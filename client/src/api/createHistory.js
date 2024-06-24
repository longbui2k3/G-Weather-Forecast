import axios from "axios";
import { API_ORIGIN } from "../utils/globalVariable";

export const createHistory = async (body) => {
  try {
    const res = await axios.post(`${API_ORIGIN}/api/v1/history`, body, {
      withCredentials: false,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    if (err) return err.response?.data;
  }
};
