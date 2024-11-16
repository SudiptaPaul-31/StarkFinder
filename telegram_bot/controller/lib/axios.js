const axios = require('axios');
const MY_TOKEN = process.env.MY_TOKEN || '7687329995:AAGOlVnV8d_6Sj08-KC05b3TLOKy9rZIhro';

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
        },
        post(method, data) {
            return axios.post(`/${method}`, data, {
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            });
        },
    };
}

module.exports = { axiosInstance: getAxiosInstance()};