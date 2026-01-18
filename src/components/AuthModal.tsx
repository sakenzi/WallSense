import React, { useState } from "react";
import { loginUser, registerUser } from "../api/auth";
import { saveAuth } from "../utils/authStorage";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onAuthed: (email: string) => void;
}

export function AuthModal({ open, onClose, onAuthed }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");

  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const resetError = () => setError(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    resetError();
    setLoading(true);

    try {
      if (mode === "register") {
        await registerUser({ fullname, company, email, password });
        // после регистрации автоматически логинимся:
        const token = await loginUser({ email, password });
        saveAuth(token.access_token, email);
        onAuthed(email);
        onClose();
        return;
      }

      const token = await loginUser({ email, password });
      saveAuth(token.access_token, email);
      onAuthed(email);
      onClose();
    } catch (err: any) {
      setError(err?.message || "Ошибка авторизации");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a1128] p-8 text-white shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {mode === "login" ? "Вход" : "Регистрация"}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={onSubmit}>
          {mode === "register" && (
            <>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Имя и фамилия"
                className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
              />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Компания"
                className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
              />
            </>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-cyan-500/40 focus:ring-2"
          />

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400 disabled:opacity-60"
          >
            {loading
              ? "Подождите..."
              : mode === "login"
              ? "Войти"
              : "Создать аккаунт"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          {mode === "login" ? (
            <>
              Нет аккаунта?{" "}
              <button
                onClick={() => {
                  setMode("register");
                  resetError();
                }}
                className="text-cyan-400 hover:underline"
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{" "}
              <button
                onClick={() => {
                  setMode("login");
                  resetError();
                }}
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
