import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const getDonars = () => axios.get(`${BASE_URL}/donate`);
const addDonars = (data) => axios.post(`${BASE_URL}/donate`, data);

export { addDonars, getDonars };
