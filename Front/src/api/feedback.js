import axios from "axios";

const baseurl = "https://daniela-clinic.netlify.app/feedbacks";

export const getFeedback = async () => await axios.get(baseurl);

export const postFeedback = async (data) => {
  return await axios.post(baseurl, data);
};

export const deleteFeedback = async (id) => {
  return await axios.delete(`${baseurl}/${id}`);
};