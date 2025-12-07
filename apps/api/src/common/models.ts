export type PromiseStatus = 'pending' | 'done' | 'skipped';

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface MicroPromise {
  id: string;
  userId: string;
  title: string;
  description?: string;
  targetDate: Date;
  status: PromiseStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Reflection {
  id: string;
  userId: string;
  date: string; // ISO date only, like 2025-12-07
  mood?: string;
  whatMattered?: string;
  whatStressed?: string;
  whatToRemove?: string;
  gratitude?: string;
  createdAt: Date;
}

export interface AttentionSession {
  id: string;
  userId: string;
  appName: string;
  startedAt: Date;
  endedAt: Date;
  totalSeconds: number;
  isDoomScroll: boolean;
}

export interface Insight {
  id: string;
  userId: string;
  periodStart: Date;
  periodEnd: Date;
  summary: string;
  createdAt: Date;
}
