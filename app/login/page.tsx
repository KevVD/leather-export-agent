"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("cbsofttechltd@gmail.com");
  const [password, setPassword] = useState("•••••");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API authentication delay
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl border border-zinc-100">
        {/* Header / Logo Section */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-800 text-white font-bold text-xl shadow-md">
            LXP
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-950">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Sign in to manage your leather export compliance & shipments
          </p>
        </div>

        {/* Test Alert Banner */}
        {loginSuccess && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800 text-center font-medium animate-pulse">
            ✓ Connection Successful! LXP Dashboard Authenticated.
          </div>
        )}

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-zinc-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:z-10 focus:border-amber-800 focus:outline-none focus:ring-1 focus:ring-amber-800 sm:text-sm transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-zinc-900 placeholder-zinc-400 focus:z-10 focus:border-amber-800 focus:outline-none focus:ring-1 focus:ring-amber-800 sm:text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-300 text-amber-800 focus:ring-amber-800"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-zinc-700 select-none"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-amber-800 hover:text-amber-700"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-xl bg-amber-800 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-offset-2 transition-all shadow-md active:scale-[0.98] disabled:opacity-75"
            >
              {isLoading ? "Verifying Credentials..." : "Sign In to Agent"}
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-zinc-500">
          Authorized personnel only. Secure 256-bit SSL encrypted compliance
          portal.
        </p>
      </div>
    </div>
  );
}
