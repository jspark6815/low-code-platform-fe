import api from '@/utils/api';

// Application 데이터 타입 정의
export interface ApplicationCreate {
  name: string;
  description: string;
}

export interface ApplicationUpdate {
  name?: string;
  description?: string;
}

export interface ApplicationResponse {
  id: string;
  name: string;
  description: string;
}

// 새로운 Application 생성
export const createApplication = async (application: ApplicationCreate) => {
  const response = await api.post<ApplicationResponse>('/applications/', application);
  return response.data;
};

// 특정 Application 조회
export const getApplication = async (appId: string) => {
  const response = await api.get<ApplicationResponse>(`/apps/${appId}`);
  return response.data;
};

// 모든 Applications 조회
export const getApplications = async (skip = 0, limit = 30) => {
  const response = await api.get<ApplicationResponse[]>(`/apps?skip=${skip}&limit=${limit}`);
  return response.data;
};

// 기존 Application 업데이트
export const updateApplication = async (appId: string, application: ApplicationUpdate) => {
  const response = await api.put<ApplicationResponse>(`/apps/${appId}`, application);
  return response.data;
};

// 기존 Application 삭제
export const deleteApplication = async (appId: string) => {
  const response = await api.delete<ApplicationResponse>(`/apps/${appId}`);
  return response.data;
};
