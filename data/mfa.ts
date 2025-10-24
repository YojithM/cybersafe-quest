export type Q = { id: string; prompt: string; choices: string[]; answer: number; explain: string; };

export const MFA_QUIZ: Q[] = [
  { id:"q1", prompt:"What does 2FA add to a password?", choices:[
    "A copy of your password", "A second proof like a code or key", "A security question"], answer:1,
    explain:"2FA adds a second factor (something you have/are), not more passwords." },
  { id:"q2", prompt:"Which is generally safest?", choices:[
    "SMS codes", "Authenticator app (TOTP)", "Email codes"], answer:1,
    explain:"TOTP apps are not tied to phone number hijacks like SIM swaps." },
  { id:"q3", prompt:"Best first step to enable 2FA?", choices:[
    "Write codes on sticky notes", "Enable app-based 2FA in account security settings", "Share codes with a friend"], answer:1,
    explain:"Go to account → Security → Two-factor → App-based codes." },
];
