import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/authStore';


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // 요청 타임아웃을 설정합니다 (10초).
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = useAuthStore.getState().accessToken;

    // 토큰이 존재하면 Authorization 헤더에 추가
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     const refreshToken = useAuthStore.getState().refreshToken;

//     // 토큰 만료 시, refreshToken을 사용하여 토큰 재발급 처리
//     if (error.response?.status === 401 && refreshToken && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`, null, {
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         });

//         const { accessToken } = response.data;

//         // 새로운 토큰 저장 및 요청 재시도
//         useAuthStore.getState().login(accessToken, refreshToken);
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

//         return api(originalRequest);
//       } catch (refreshError) {
//         // 리프레시 토큰도 만료된 경우 로그아웃 처리
//         useAuthStore.getState().logout();
//         return Promise.reject(refreshError);
//       }
//     }

//     // 다른 모든 오류 처리
//     return Promise.reject(error);
//   }
// );

export default api;