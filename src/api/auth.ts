// src/api/auth.ts
export type RegisterPayload = {
  fullname: string;
  company: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

async function request<T>(path: string, options: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    // ignore
  }

  if (!res.ok) {
    const msg =
      data?.detail ||
      data?.message ||
      `HTTP ${res.status} ${res.statusText}`;
    throw new Error(msg);
  }

  return data as T;
}

export async function registerUser(payload: RegisterPayload) {
  return request<{ email: string; message: string }>(`/auth/register`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload: LoginPayload) {
  return request<{ access_token: string; token_type: string }>(`/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
