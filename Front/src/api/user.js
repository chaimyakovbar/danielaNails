import axios from "axios";

const baseurl = "https://daniela-clinic.onrender.com/users";

export const getUsers = async () => await axios.get(baseurl);

export const getUsersTime = async () => {
  const response = await axios.get(baseurl);
  return response.data.map((user) => user.time);
};

export const getUsersStatus = async () => {
  const response = await axios.get(baseurl);
  return response.data.map((user) => user.status);
};

export const postUsers = async (data) => {
  return await axios.post(baseurl, data);
};

export const updateUser = async (id, data) => {
  return await axios.put(`${baseurl}/${id}`, data);
};

export const deleteUsers = async (id) => {
  return await axios.delete(`${baseurl}/${id}`);
};
