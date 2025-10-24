import { EmailCard } from "../data/emails";

export default function PhishingEmailCard({ e }: { e: EmailCard }) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-5 bg-zinc-950/60 backdrop-blur">
      <div className="text-sm text-zinc-400">From: <span className="text-zinc-200">{e.from}</span></div>
      <div className="font-semibold text-zinc-100 mt-1">{e.subject}</div>
      <p className="mt-3 text-zinc-300 whitespace-pre-wrap">{e.body}</p>
    </div>
  );
}
