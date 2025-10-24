"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PhishingEmailCard from "../../../components/PhishingEmailCard";
import { EMAILS } from "../../../data/emails";
import { burst, twinBurst } from "../../../lib/confetti";

export default function PhishingQuest() {
  const [i, setI] = useState(0);
  const [right, setRight] = useState(0);
  const [feedback, setFeedback] = useState("");

  const e = EMAILS[i];

  function answer(choiceIsPhish: boolean) {
    const ok = e.isPhish === choiceIsPhish;
    setRight((r) => r + (ok ? 1 : 0));
    setFeedback(ok ? "✅ Correct!" : `❌ Not quite. Hint: ${e.hint}`);
    setTimeout(() => {
      setFeedback("");
      setI((x) => x + 1);
    }, 900);
  }

  async function finish() {
    const perfect = right === EMAILS.length;
    await burst();
    setTimeout(twinBurst, 250);
    alert(`Round complete! Score ${right}/${EMAILS.length}${perfect ? " • 🏆 Perfect!" : ""}`);
    // (later: award XP/badge)
  }

  return (
    <motion.div
        className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-5 px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
            
      <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Phishing Game</h1>
      <p className="text-zinc-300">Flag each email as <b>Phish</b> or <b>Legit</b>.</p>

      {i < EMAILS.length ? (
        <>
          <PhishingEmailCard e={e} />
          <div className="flex gap-3">
            <button onClick={()=>answer(true)}  className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold hover:scale-[1.03] transition">Phish</button>
            <button onClick={()=>answer(false)} className="rounded-lg bg-green-600 px-5 py-2.5 font-semibold hover:scale-[1.03] transition">Legit</button>
          </div>
          {feedback && <p className="text-cyan-300">{feedback}</p>}
          <p className="text-sm text-zinc-400">Email {i+1} of {EMAILS.length} • Correct: {right}</p>
        </>
      ) : (
        <button onClick={finish} className="rounded-lg bg-cyan-500 text-black px-6 py-3 font-semibold hover:bg-cyan-400">
          Finish Round
        </button>
      )}
    </motion.div>
  );
}
