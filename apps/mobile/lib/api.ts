import { apiClient } from "./http/apiClient";

export async function apiGet<T>(url: string): Promise<T> {
  const res = await apiClient.get<T>(url);
  return res.data;
}

export async function apiPost<T>(url: string, body?: any): Promise<T> {
  const res = await apiClient.post<T>(url, body);
  return res.data;
}

export async function apiPatch<T>(url: string, body?: any): Promise<T> {
  const res = await apiClient.patch<T>(url, body);
  return res.data;
}

export async function apiDelete<T>(url: string): Promise<T> {
  const res = await apiClient.delete<T>(url);
  return res.data;
}
