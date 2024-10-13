import axios from "axios";

const baseurl = "https://daniela-clinic.netlify.app/users";
export const getUsers = async () => await axios.get(baseurl);

export const getUsersTime = async () => {
  const response = await axios.get(baseurl);
  return response.data.map((user) => user.time);
};

export const postUsers = async (data) => {
  return await axios.post(baseurl, data);
};

export const deleteUsers = async (id) => {
  return await axios.delete(`${baseurl}/${id}`);
};
