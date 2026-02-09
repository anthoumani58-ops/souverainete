"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPanel() {
  const [email, setEmail] = useState("");

  return (
    <div className="section-frame p-6">
      <p className="text-sm text-ink/70">Acces par GitHub ou email.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          className="rounded-full border border-ink/30 px-4 py-2 text-sm uppercase tracking-[0.2em]"
          onClick={() => signIn("github")}
        >
          GitHub
        </button>
        <form
          className="flex flex-wrap items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            signIn("email", { email, callbackUrl: "/dashboard" });
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@exemple.com"
            className="rounded-full border border-ink/20 px-4 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-4 py-2 text-sm uppercase tracking-[0.2em] text-white"
          >
            Email
          </button>
        </form>
      </div>
    </div>
  );
}
