<html>
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import block from "@/assets/block.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vexium SMP — Minecraft Java Server" },
      { name: "description", content: "Join Vexium SMP, a Minecraft Java survival multiplayer server. IP: play.vexiumsmp.net" },
      { property: "og:title", content: "Vexium SMP — Minecraft Java Server" },
      { property: "og:description", content: "Join Vexium SMP at play.vexiumsmp.net" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const TEAM = [
  { role: "Owner", name: "lukeandquean" },
  { role: "Lead Developer", name: "eightjoker" },
  { role: "Admin", name: "drewawsom" },
  { role: "Admin", name: "crazychild" },
];

const IP = "play.vexiumsmp.net";

function Index() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex min-h-screen flex-col bg-hero text-foreground relative isolate">
      <main className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center">
        <img src={block} alt="" width={1024} height={1024} className="pointer-events-none absolute left-1/2 top-1/2 -z-0 w-[34rem] max-w-[90vw] -translate-x-1/2 -translate-y-[60%] opacity-90 mix-blend-lighten drop-shadow-[0_0_40px_var(--primary)] [mask-image:radial-gradient(circle,black_50%,transparent_72%)]" />
        <p className="relative font-mono text-sm uppercase tracking-widest text-primary">⚔ Minecraft Java Edition ⚔</p>
        <h1 className="relative font-mono text-6xl font-bold tracking-tight md:text-8xl animate-float text-glow">VEXIUM <span className="text-primary">SMP</span></h1>
        <p className="max-w-md text-muted-foreground">Survive, build, and thrive with friends.</p>
        <div className="flex flex-col items-center gap-3 rounded-md border-4 border-primary bg-card p-6 glow-red">
          <code className="font-mono text-xl">{IP}</code>
          <button
            onClick={copy}
            className="border-4 border-primary bg-primary px-8 py-3 font-mono text-lg font-bold text-primary-foreground animate-pulse-glow transition hover:scale-105 hover:opacity-90 active:translate-y-0.5"
          >
            {copied ? "Copied!" : "Copy Server IP"}
          </button>
        </div>
      </main>
      <section className="mx-auto w-full max-w-2xl px-4 py-20 text-center">
        <h2 className="mb-10 font-mono text-4xl font-bold text-glow">THE <span className="text-primary">TEAM</span></h2>
        <div className="flex flex-col gap-4">
          {TEAM.map((m) => (
            <div key={m.name} className={`rounded-md border-4 bg-card p-5 ${m.role === "Owner" ? "border-primary glow-red" : "border-border"}`}>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{m.role}</p>
              <p className={`font-mono font-bold ${m.role === "Owner" ? "text-3xl" : "text-xl"}`}>{m.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 px-4 pb-20 text-center">
        <h2 className="font-mono text-3xl font-bold">Join our Discord</h2>
        <a href="https://discord.gg/QPN6dAeGB" target="_blank" rel="noreferrer" className="border-4 border-primary bg-primary px-8 py-3 font-mono text-lg font-bold text-primary-foreground animate-pulse-glow transition hover:scale-105">
          Join Discord
        </a>
      </section>
      <footer className="bg-success py-4 text-center text-sm font-semibold text-success-foreground">
        Not affiliated with Mojang or Microsoft.
      </footer>
    </div>
  );
}
</html>