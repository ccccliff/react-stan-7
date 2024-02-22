import axios from "axios";
import { authApi } from "./auth";

// 로그인이 필요한 api
// comments를 가져오기 위해서는 꼭 로그인 정보가 필요합니다.
const commentsAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/comments/`,
  timeout: 1500,
});

commentsAxios.interceptors.request.use(
  async (config) => {
    await authApi.get("user");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use((response) => {
  console.log("요청 성공입니다.");
  return response;
});

export default commentsAxios;
