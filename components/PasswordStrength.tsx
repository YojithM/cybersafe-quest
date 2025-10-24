export function scorePassword(pw: string) {
  let s = 0; if (!pw) return 0;
  if (pw.length >= 12) s += 40;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s += 20;
  if (/\d/.test(pw)) s += 20;
  if (/[^a-zA-Z0-9]/.test(pw)) s += 20;
  return Math.min(s, 100);
}
export default function PasswordStrength({ value }:{value:string}) {
  const s = scorePassword(value);
  const color = s < 40 ? "bg-red-500" : s < 70 ? "bg-yellow-500" : "bg-green-500";
  return (
    <div className="h-2 w-full bg-zinc-800 rounded overflow-hidden">
      <div className={`h-2 ${color} rounded transition-[width] duration-300`} style={{ width: `${s}%` }} />
    </div>
  );
}