"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { BRANDING } from "@/config/branding";

export default function LoginCard() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUsernameNext = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }
    // For demo, allow direct login with just username if configured
    if (BRANDING.isDemo) {
      setShowPassword(true);
      setError("");
    } else {
      setShowPassword(true);
      setError("");
    }
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const session = login(username, password);
    if (session) {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200/80 p-5 sm:p-8 transition-all duration-300">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 mb-4">
          <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Sign In
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter your credentials to access your account
        </p>
      </div>

      {!showPassword ? (
        <form onSubmit={handleUsernameNext} noValidate>
          <div className="mb-5">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple/40 focus:border-brand-purple text-gray-900 placeholder-gray-400 transition-all duration-200"
              autoComplete="username"
              autoFocus
            />
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            </div>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-2.5 bg-brand-blue text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
            >
              NEXT
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Username</p>
            <p className="text-gray-900 font-semibold">{username}</p>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple/40 focus:border-brand-purple text-gray-900 placeholder-gray-400 transition-all duration-200"
              autoComplete="current-password"
              autoFocus
            />
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            </div>
          )}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => {
                setShowPassword(false);
                setError("");
              }}
              className="text-sm text-brand-blue hover:text-blue-800 font-medium transition-colors duration-150"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2.5 bg-brand-blue text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-60"
            >
              {loading ? "Signing in..." : "NEXT"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
