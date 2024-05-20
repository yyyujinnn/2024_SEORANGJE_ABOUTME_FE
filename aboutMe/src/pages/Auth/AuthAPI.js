import axios from "axios";

const TOKEN = localStorage.getItem("token");

export const AuthApi = axios.create({
    baseURL: 'https://port-0-seorangje-aboutme-be-2024-1ru12mlwc1mxvw.sel5.cloudtype.app',
    headers: {
        'Content-Type': 'application/json'
    },
});

/** LOGIN API */
export const login = async ({ email, password }) => {
    const data = { email, password };
    const response = await AuthApi.post(`/api/login`, data);
    return response.data;
}
  

/** SIGNUP API */
export const signUp = async ({ 
    email, password, username,
    // theme
    flower, animal, season, color, charac, place, food, hobby, job
    }) => {
    const data = { email, password, username,
        flower, animal, season, color, charac, place, food, hobby, job
     };
    const response = await AuthApi.post(`/api/join`, data);
    return response.data;
}