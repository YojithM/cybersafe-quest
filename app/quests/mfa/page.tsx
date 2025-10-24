"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MFA_QUIZ } from "../../../data/mfa";
import { burst, twinBurst } from "../../../lib/confetti";

export default function MFAQuest() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const q = MFA_QUIZ[idx];

  function choose(c: number) {
    const ok = c === q.answer;
    setScore(s => s + (ok ? 1 : 0));
    setIdx(i => i + 1);
  }

  async function finish() {
    await burst(); setTimeout(twinBurst, 250);
    alert(`MFA quiz done: ${score}/${MFA_QUIZ.length} correct!`);
  }

  return (
    <motion.div
        className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6 px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>

      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
        2FA Walkthrough
      </h1>
      <p className="text-zinc-300">Learn and test your MFA basics.</p>

      {idx < MFA_QUIZ.length ? (
        <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/60 backdrop-blur text-left space-y-4">
          <div className="text-lg font-semibold text-zinc-100">{q.prompt}</div>
          <div className="grid gap-3">
            {q.choices.map((c, i) => (
              <button key={i}
                onClick={()=>choose(i)}
                className="rounded-lg border border-cyan-700/40 px-4 py-2.5
                 bg-zinc-900 text-zinc-100 font-medium
                 hover:bg-cyan-500 hover:text-black
                 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]
                 hover:translate-y-[-2px] transition duration-200"
                 >
                {c}
              </button>
            ))}
          </div>
          <p className="text-sm text-zinc-400">Question {idx+1} / {MFA_QUIZ.length}</p>
        </div>
      ) : (
        <button onClick={finish} className="rounded-lg bg-cyan-500 text-black px-6 py-3 font-semibold hover:bg-cyan-400">
          See Results
        </button>
      )}
    </motion.div>
  );
}
