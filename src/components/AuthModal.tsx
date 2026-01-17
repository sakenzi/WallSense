import React, { useState } from "react";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a1128] p-8 text-white shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {mode === "login" ? "Вход" : "Регистрация"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          {mode === "register" && (
            <input
              type="text"
              placeholder="Имя"
              className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
          />

          <input
            type="password"
            placeholder="Пароль"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            {mode === "login" ? "Войти" : "Создать аккаунт"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          {mode === "login" ? (
            <>
              Нет аккаунта?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-cyan-400 hover:underline"
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-cyan-400 hover:underline"
              >
                Войти
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
