import axios from "axios";

const baseurl = "http://localhost:3005/admins";

export const login = async (data) => {
  return await axios.get(baseurl, { params: data });
};

export const signup = async (data) => {
  return await axios.post(baseurl, data);
};
