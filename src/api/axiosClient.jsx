import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://course-api.com/react-store-products',
});

export default axiosClient;
