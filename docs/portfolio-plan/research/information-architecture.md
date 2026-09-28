# Information Architecture

Locked: 2026-09-28 (supersedes the 2026-09-19 full-stack version)  
Owner: Barun Tiwary  
Profile facts: [../../UserProfile.md](../../UserProfile.md)

Live site map. The identity is a **Full Stack Engineer transitioning into cybersecurity, specifically red teaming**. Full-stack work is the shipped proof. Red teaming is where he's heading, and the site shows that through lab work.

## Identity

**Full Stack Engineer → Red Team.** Barun has built and shipped production systems (auth, APIs, databases, devices, deploys). He is now learning to attack systems like them.

Hero role label:

> Full Stack Engineer · transitioning to Red Teaming

Hero tagline:

> Full Stack Engineer moving into red teaming. I've built production systems — now I'm learning to break them.

Supporting statement:

> Shipping authentication, APIs, device networks, and deploys showed me where real systems crack. I'm turning that builder's view into offensive security: web and API exploitation, Linux and network attacks, and lab work written up honestly.

Meta:

- `<title>`: `Barun Tiwary — Full Stack Engineer → Red Team`
- `description`: `Full Stack Engineer transitioning into cybersecurity and red teaming. Builds production systems, now learning to break them.`
- JSON-LD `jobTitle`: `Full Stack Engineer` with `knowsAbout` covering offensive security and red teaming

Transition path: **Full Stack Engineering → Secure Engineering → Offensive Security → Red Teaming**

The builder's advantage: he knows how auth flows, APIs, databases, and deploys are put together, so he knows where they get misconfigured. That is the bridge the site sells. Credentials are not.

What a recruiter should take away in 30 seconds: a real full-stack engineer with shipped systems, who has already dealt with a live attack on his own infrastructure, and who is building offensive skills in public, honestly labelled.

### Target roles

- Red team / offensive security (end goal)
- Junior penetration tester or web/API pentester (stepping stone)
- Application security tester
- Software engineer at an offensive-security company, e.g. tooling, platforms, internal red-team infrastructure

### Not claimed

- Professional red-team or penetration-testing engagements
- CVEs, bug bounties, lab ranks, badges, or certifications, until they are verified and linked
- SOC or senior AppSec experience

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/work` | Work |
| `/security` | Security evidence |
| `/blog` | Blog index |
| `/blog/[slug]` | Article |
| `/resume` | Resume |
| unknown | 404 |

Chrome: Home · Work · Security · Blog · Resume, search, theme, footer.

## Remove from this site

- Full-stack as the whole story with no security direction
- "Security Engineer", "Pentester", or "Red Teamer" as a current job title
- Stack-first framing ("React, Node, Postgres") in place of what was built and where it could break
- Terminal, Setup, Movies, Gears, RSS, Books
- Fake "hacking" UI, forced boot animations, terminal cosplay
- Generix Info Tech in the experience list

## Home order

1. Hero: name, role label, tagline, contact, and GitHub / LinkedIn / Resume links. Add HTB / THM links once they exist.
2. Selected work: shipped systems, each with a one-line "where it could break" angle. Smart Weight System, Simple Form (attacked, then hardened), Custom OIDC provider.
3. Experience: Rad Labs, Consultifi Data, SIA Health, Autonomous Work (dates from the latest resume)
4. Achievements: open-source contributions (Corsair Mailchimp integration)
5. Principles
6. Writing (security and red-team posts first)
7. Footer / contact

### Principles

1. Know how it's built before you break it
2. Every trust boundary is an attack surface
3. Defaults and misconfigurations are the real entry points
4. Label what's shipped, what's practiced in labs, and what's being learned

## Work order

1. Rad Labs: Full Stack Engineer / Project Lead, Sep 2026 – Present
2. Consultifi Data: Full Stack Engineer, Feb 2026 – Jun 2026
3. SIA Health: Full Stack Developer, May 2025 – Oct 2025
4. Autonomous Work: Full Stack Developer, Jan 2025 – Mar 2025
5. Personal projects (Work page and Resume only): Simple Form, Custom OIDC provider, Recipe Reveal

Each record answers: what the problem was, what Barun built and owned, what risks existed, what controls he put in place, and what the result was.

## Security page

`/security` is the proof-led page for the transition. Sections, in order:

1. **Direction.** Full Stack Engineer moving into red teaming, and why the builder's view helps.
2. **Offensive track (learning).** Networking, Linux, web and API exploitation, vulnerability assessment, and ethical-hacking fundamentals. Includes TryHackMe / Hack The Box progress, linked when it's available.
3. **Lab writeups.** Links to red-team blog posts, covering retired or allowed machines only.
4. **Seen from the defender's side.** What he has built and shipped: OAuth 2.0 / OIDC / JWT, RBAC, station tokens and plant isolation, rate limiting, webhook-secret validation, and hardened deploys. Each item is framed as "what an attacker would try here."
5. **Incident.** A ransomware bot hit a Postgres instance exposed with default credentials, and this is the attacker-side story of it. It was his first real look at offense.
6. **Boundaries.** No professional engagements yet, and what that means.

## Blog

Categories: Red Team, Security, Engineering, Systems, AI.

- **Red Team:** lab writeups and attack techniques (retired machines only), plus self-assessments of his own apps
- **Security:** defensive lessons from shipped systems
- **Engineering / Systems / AI:** full-stack proof, kept but not leading

Red Team and Security posts lead the index and the Home writing list.

## Content rules

- Full-stack claims need shipped proof. Offensive claims need lab proof (a writeup or a profile link).
- Label everything as shipped, practiced in labs, or learning
- Offensive content covers only authorized targets: his own systems, retired lab machines, or allowed CTFs. No active HTB spoilers, and nothing aimed at real third-party systems.
- Put results before tools
- Keep client names confidential; publish no live endpoints, token formats, or internals
- Show no fake hacking output; any interaction must demonstrate real system behaviour
- Treat AI as supporting proof through AI security, not a separate identity
