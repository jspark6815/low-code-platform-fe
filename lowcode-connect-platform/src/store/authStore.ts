import create from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

// 상태의 타입 정의
interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

// Zustand 스토어 생성
export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,

      // 로그인 함수: 액세스 토큰과 리프레시 토큰을 저장하고 로그인 상태를 true로 설정
      login: (accessToken: string, refreshToken: string) => {
        set({
          isLoggedIn: true,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      },

      // 로그아웃 함수: 토큰을 null로 설정하고 로그인 상태를 false로 설정
      logout: () => {
        set({
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
        });

        if (typeof window !== 'undefined') {
          document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
          document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
      },
    }),
    {
      name: 'auth-storage', // 로컬 스토리지에 저장될 이름
      getStorage: () => localStorage, // 로컬 스토리지를 사용할지, 기본 설정
    } as PersistOptions<AuthState> // persist의 옵션에 타입 명시
  )
);
