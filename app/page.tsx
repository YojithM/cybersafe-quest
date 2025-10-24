"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
    { title: "Password Challenge", desc: "Test and upgrade weak passwords.", href: "/quests/password" },
    { title: "Phishing Game", desc: "Spot red flags in fake emails.", href: "/quests/phishing" },
    { title: "2FA Walkthrough", desc: "Enable MFA like a pro.", href: "/quests/mfa" },
  ];

  return (
    <section className="space-y-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]"
      >
        Hack your habits before hackers do.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-zinc-200 text-lg max-w-2xl mx-auto"
      >
        Interactive cybersecurity quests that make learning habits fun — not boring.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex justify-center gap-4"
      >
        <Link
          href="/quests/password"
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400 hover:scale-[1.05] transition-transform shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          Start Your Quest
        </Link>
        <Link
          href="/dashboard"
          className="rounded-lg border border-cyan-600 px-6 py-3 font-semibold text-cyan-400 hover:bg-cyan-600/10 hover:scale-[1.05] transition-transform"
        >
          Dashboard
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
        {cards.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            className="block rounded-2xl border border-zinc-800 p-6 bg-zinc-950/60 backdrop-blur hover:translate-y-[-4px] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
          >
            <div className="text-xl font-semibold text-cyan-300">{c.title}</div>
            <div className="text-zinc-300 mt-1">{c.desc}</div>
            <div className="mt-3 text-cyan-400 font-medium">Open →</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
