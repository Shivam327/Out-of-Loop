import { apiGet, apiPatch, apiPost } from "./api";

export type PromiseStatus = "pending" | "done" | "skipped";

export interface MicroPromise {
  id: string;
  title: string;
  description?: string;
  status: PromiseStatus;
  targetDate: string;
  createdAt: string;
  updatedAt: string;
}

export function getTodayPromises() {
  return apiGet<MicroPromise[]>("/promises/today");
}

export function createPromise(data: {
  title: string;
  description?: string;
  targetDate: string;
}) {
  return apiPost<MicroPromise>("/promises", data);
}

export function updatePromiseStatus(id: string, status: PromiseStatus) {
  return apiPatch<MicroPromise>(`/promises/${id}/status`, { status });
}
