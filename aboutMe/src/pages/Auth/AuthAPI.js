import axios from "axios";

const TOKEN = localStorage.getItem("token");

export const AuthApi = axios.create({
  baseURL: "https://port-0-seorangje-aboutme-be-2024-1ru12mlwc1mxvw.sel5.cloudtype.app",
  headers: {
    "Content-Type": "application/json",
  },
});

/** LOGIN API */
export const login = async ({ email, password }) => {
  const data = { email, password };
  const response = await AuthApi.post(`/api/login`, data);
  return response.data;
};

/** SIGNUP API */
export const signUp = async ({
  email,
  password,
  username,
  // theme
  flower,
  animal,
  season,
  color,
  charac,
  place,
  food,
  hobby,
  job,
}) => {
  const data = {
    email,
    password,
    username,
    flower,
    animal,
    season,
    color,
    charac,
    place,
    food,
    hobby,
    job,
  };
  const response = await AuthApi.post(`/api/join`, data);
  return response.data;
};

AuthApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/** FETCH USER INFO API */
export const fetchUserInfo = async () => {
  const response = await AuthApi.get(`/api/info`);
  return response.data;
};
/** FETCH DEFAULT IMAGE API */
export const fetchImages = async (userId) => {
  const response = await AuthApi.get(`/api/DefaultImage/${userId}`);
  return response.data;
};
/** FETCH USER CATEGORY API */
export const fetchUserCategories = async (userId) => {
  const response = await AuthApi.get(`/api/MyImageSubject/${userId}`);
  return response.data;
};
//생성된 다이어리
export const submitImage = async (formData) => {
  const response = await AuthApi.post("/api/MyImage", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
