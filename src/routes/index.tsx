import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/hero-water.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "charity: water — Help Bring Clean Water to Everyone" },
      {
        name: "description",
        content:
          "Over 600 million people still lack safe and clean water. charity: water funds clean water projects with local partners across 22 countries. Donate today.",
      },
      { property: "og:title", content: "charity: water — Help Bring Clean Water to Everyone" },
      {
        property: "og:description",
        content:
          "Over 600 million people still lack safe and clean water. We fund and work with 55 partners across 22 countries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function JerryCanIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M9 2h6a1 1 0 0 1 1 1v2h2a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1Zm1 3h4V4h-4v1Zm-2 4v18h8V9H8Zm2.5 3.5 3 4.6a3.1 3.1 0 1 1-5.98 1.4 3.1 3.1 0 0 1-.02-1.4l3-4.6Z" />
    </svg>
  );
}

function Index() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleJoin = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    // Send the visitor to charity: water's real signup page with their email prefilled intent
    window.open(
      `https://www.charitywater.org/#email=${encodeURIComponent(trimmed)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setMessage("Thanks! We've opened charitywater.org so you can finish joining.");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-4 sm:px-10">
        <a
          href="https://www.charitywater.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
          aria-label="charity: water home"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffc907] text-[#2e2532]">
            <JerryCanIcon className="h-7 w-7" />
          </span>
          <span className="font-serif text-3xl tracking-[0.2em] text-[#2e2532]">
            charity<span className="align-middle text-xl">:</span> water
          </span>
        </a>

        {/* Email join bar */}
        <form
          onSubmit={handleJoin}
          className="flex w-full max-w-xl items-center justify-between gap-3 rounded-xl bg-[#003b5c] px-5 py-3 sm:w-auto sm:flex-1"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full min-w-0 bg-transparent text-lg text-white placeholder-white/90 outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-[#ffc907] px-4 py-2 text-base font-medium text-[#2e2532] transition-transform hover:scale-105"
          >
            Join today
          </button>
        </form>
      </header>
      {message && (
        <p className="bg-white px-6 pb-2 text-sm text-[#003b5c] sm:px-10" role="status">
          {message}
        </p>
      )}

      {/* Hero */}
      <main className="relative overflow-hidden bg-[#1e2a5a]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 py-16 text-center sm:px-10 lg:py-24 lg:text-left">
            <h1 className="text-4xl leading-tight font-light text-white sm:text-5xl lg:text-6xl">
              Relieve suffering and give the miracle of water
            </h1>
            <p className="mt-8 text-2xl leading-snug font-semibold text-white sm:text-3xl">
              Over 600 million people still lack safe and clean water.
            </p>
            <p className="mt-6 text-2xl leading-snug font-semibold text-white sm:text-3xl">
              We fund and work with 55 partners across 22 countries.
            </p>
            <a
              href="https://www.charitywater.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-lg bg-[#ffc907] px-10 py-4 text-2xl font-medium text-[#2e2532] transition-transform hover:scale-105"
            >
              Donate
            </a>
            <p className="mt-6 text-sm text-white/70">
              Learn more at{" "}
              <a
                href="https://www.charitywater.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                charitywater.org
              </a>
            </p>
          </div>

          {/* Photo with diagonal edge */}
          <div className="relative min-h-80 lg:min-h-full">
            <div
              className="absolute inset-0 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
              style={{ backgroundColor: "#ffffff" }}
            >
              <img
                src={heroImage}
                alt="A smiling woman collecting clean water from a new tap in her village"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white px-6 py-8 text-center text-sm text-[#2e2532]/70 sm:px-10">
        <p>
          This is a fan-made tribute page. charity: water is a registered nonprofit —{" "}
          <a
            href="https://www.charitywater.org/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#003b5c]"
          >
            learn about their mission
          </a>{" "}
          or{" "}
          <a
            href="https://www.charitywater.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#003b5c]"
          >
            give clean water today
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
