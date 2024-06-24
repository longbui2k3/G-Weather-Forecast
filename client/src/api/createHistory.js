import axios from "axios";

export const createHistory = async (body) => {
  try {
    const res = await axios.post("http://localhost:8000/api/v1/message", body);
    return res.data;
  } catch (err) {
    console.log(err);
    if (err) return err.response?.data;
  }
};
