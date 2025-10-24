"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PasswordStrength, { scorePassword } from "../../../components/PasswordStrength";
import { burst, twinBurst } from "../../../lib/confetti";

export default function PasswordQuest() {
  const [pw, setPw] = useState("");
  const tips = [
    pw.length < 12 && "Use 12+ characters.",
    !/[A-Z]/.test(pw) && "Add uppercase letters.",
    !/\d/.test(pw) && "Add digits.",
    !/[^a-zA-Z0-9]/.test(pw) && "Add a symbol.",
  ].filter(Boolean) as string[];
  const strong = scorePassword(pw) >= 70;

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6 px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
        Password Challenge
      </h1>

      <p className="text-zinc-300 max-w-lg">
        Type a sample password (not a real one!) and improve it until it’s strong enough to earn XP.
      </p>

      <div className="bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-[0_0_20px_rgba(34,211,238,0.2)] space-y-4">
        <input
          type="text"
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          placeholder="e.g. correct horse battery staple!"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <PasswordStrength value={pw} />

        {!!tips.length && (
          <ul className="list-disc pl-6 text-sm text-zinc-300 text-left space-y-1">
            {tips.slice(0, 3).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        )}

        <motion.button
          whileHover={strong ? { scale: 1.05 } : {}}
          whileTap={strong ? { scale: 0.95 } : {}}
          disabled={!strong}
          className={`w-full rounded-lg px-5 py-2.5 font-semibold transition text-center ${
            strong
              ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-400"
              : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
          }`}
          onClick={() => strong && alert("🎉 Strong password! +50 XP earned.")}
        >
          {strong ? "Complete (+50 XP)" : "Keep improving..."}
        </motion.button>
      </div>
    </motion.div>
  );
}
