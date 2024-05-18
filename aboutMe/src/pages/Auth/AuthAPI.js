import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

export const AuthApi = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
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