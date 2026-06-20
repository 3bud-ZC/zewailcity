"use client";

import { DEMO_STUDENTS } from "@/data/students";

const AUTH_KEY = "portal_auth_session";

export interface AuthSession {
  username: string;
  displayName: string;
  isLoggedIn: boolean;
}

export function login(username: string, password: string): AuthSession | null {
  const user = DEMO_STUDENTS.find(
    (u) =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );
  if (!user) return null;
  const session: AuthSession = {
    username: user.username,
    displayName: user.displayName,
    isLoggedIn: true,
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  }
  return session;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
  }
}

export function getSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as AuthSession;
    if (parsed.isLoggedIn) return parsed;
    return null;
  } catch {
    return null;
  }
}

export function requireAuth(): AuthSession | null {
  return getSession();
}
