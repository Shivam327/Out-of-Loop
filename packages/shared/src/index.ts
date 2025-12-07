export type PromiseStatus = "pending" | "done" | "skipped";

export interface MicroPromise {
  id: string;
  title: string;
  createdAt: string;
  status: PromiseStatus;
}
