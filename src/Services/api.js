import axios from "axios";

const URL = 'http://localhost:3000';

const getDonars = () => axios.get(`${URL}/donars`)
const addDonars = (data) => axios.post(`${URL}/donars`, data)

export {addDonars , getDonars}