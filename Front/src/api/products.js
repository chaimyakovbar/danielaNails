import axios from 'axios'

const baseurl = 'https://racheldatabase2.onrender.com/products'

 export const patchDeleteProductById = async (taskId, body) => await axios.patch(`${baseurl}/${taskId}`, body)

 export const patchCompleteProductById = async (taskId, body) => await axios.patch(`${baseurl}/${taskId}`, body) 

 export const putProductById = async (taskId, body) => await axios.put(`${baseurl}/${taskId}`, body) 

 export const postProduct = async (body) => await axios.post(baseurl, body) 
 
 export const getProduct = async () => await axios.get(baseurl)

