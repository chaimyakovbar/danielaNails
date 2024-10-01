import axios from 'axios';

const baseurl = 'https://racheldatabase2.onrender.com/users'

export const getUsers = async () => await axios.get(baseurl)

export const postUsers = async (data) => {
    return await axios.post(baseurl, data)
};

export const deleteUsers = async (id) => {
    return await axios.delete(`${baseurl}/${id}`)
};


