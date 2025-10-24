export type EmailCard = {
  id: string; from: string; subject: string; body: string; isPhish: boolean; hint: string;
};

export const EMAILS: EmailCard[] = [
  { id:"1", from:"IT Support <it@school-secure.help>", subject:"URGENT: Password expiration",
    body:"Your password expires in 2 hours. Verify now: http://school-login.secure-help.link",
    isPhish:true, hint:"Weird domain + urgent tone + insecure link." },
  { id:"2", from:"Librarian <librarian@school.edu>", subject:"Overdue book notice",
    body:"You have 1 overdue book. Return by Friday or reply with questions.",
    isPhish:false, hint:"Normal domain. No link. Calm tone." },
  { id:"3", from:"Google <no-reply@accounts.google.com>", subject:"New sign-in from Chrome",
    body:"If this was you, ignore. If not, secure your account: https://myaccount.google.com",
    isPhish:false, hint:"Official domain + https." },
  { id:"4", from:"Coach <coach@school-athletics.com>", subject:"Updated schedule attached",
    body:"Download schedule: http://bit.ly/school-sched . Enable macros.",
    isPhish:true, hint:"Short link + macros request." },
  { id:"5", from:"Apple Billing <apple@invo-ce.com>", subject:"Receipt: $149.99 iCloud Pro",
    body:"Not you? Cancel here: http://apple-billing-security.info",
    isPhish:true, hint:"Typosquatting domain." },
];
