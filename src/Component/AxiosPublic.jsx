import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://job-task-server-beta-jade.vercel.app',
})
export default axiosPublic