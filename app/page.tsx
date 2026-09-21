"use client";

import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────────

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <line x1="8.5" y1="10.8" x2="15.5" y2="6.2" />
      <line x1="8.5" y1="13.2" x2="15.5" y2="17.8" />
    </svg>
  );
}

function FunnelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 3H2l8 9.46V19l4 2V12.46L22 3z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    Icon: BoltIcon,
    title: "AI Workflow Automation",
    description:
      "Replace manual, repetitive processes with intelligent AI pipelines. From data entry to complex decision flows — we automate the work that slows your team down.",
  },
  {
    Icon: CodeIcon,
    title: "Website Development",
    description:
      "High-performance, conversion-focused websites built on modern frameworks. Clean code, fast load times, and AI-ready architecture from day one.",
  },
  {
    Icon: NetworkIcon,
    title: "AI Business Integration",
    description:
      "Connect AI directly into the tools you already use — CRMs, communication platforms, databases, and custom software. No rip-and-replace required.",
  },
  {
    Icon: FunnelIcon,
    title: "AI Lead Generation",
    description:
      "Intelligent systems that identify, score, and nurture leads automatically. Stop chasing cold prospects and start converting warmer opportunities.",
  },
  {
    Icon: ChartIcon,
    title: "Data Processing & Analytics",
    description:
      "Turn raw business data into actionable intelligence. We build AI systems that surface insights, detect trends, and power smarter decisions.",
  },
  {
    Icon: GearIcon,
    title: "System Cleanup & Optimization",
    description:
      "Audit, clean, and optimize your existing tech stack. We remove dead weight, improve performance, and prepare your infrastructure for AI adoption.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by deeply understanding your business — your processes, pain points, and the specific areas where AI will have the biggest impact.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We design a custom AI roadmap tailored to your business model. No generic packages — every solution is built around your exact needs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We move fast without cutting corners. Clear milestones, regular check-ins, and production-ready systems delivered on schedule.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We measure results, gather feedback, and continuously improve your AI systems to keep them performing at their best as your business grows.",
  },
];

const STATS = [
  { value: "3×", label: "Average Lead Increase" },
  { value: "80%", label: "Reduction in Manual Tasks" },
  { value: "24/7", label: "Systems Run Nonstop" },
  { value: "100%", label: "Custom-Built Solutions" },
];

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
];

// ── Shared Components ──────────────────────────────────────────────────────────

function SectionTag({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 text-amber-500 text-xs font-bold tracking-[0.25em] uppercase mb-5">
      <span className="block w-8 h-px bg-amber-500/40" />
      {children}
      <span className="block w-8 h-px bg-amber-500/40" />
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-0.5">
          <span className="text-xl font-black gold-text tracking-tighter">BLACK</span>
          <span className="text-xl font-black text-white tracking-tighter"> AI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium">
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-gold px-5 py-2.5 rounded-lg text-sm">
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-5 border-t border-amber-500/10 bg-black/95">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-gold px-5 py-3 rounded-lg text-sm text-center" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="orb-2 absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-amber-600/8 blur-[110px]" />
        <div className="orb-3 absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-400/6 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 text-amber-400 text-xs font-semibold tracking-wide mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
          AI-Powered Business Solutions
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-[96px] font-black mb-8 leading-none tracking-tighter">
          <span className="block text-white">Power Your</span>
          <span className="block gold-text">Business</span>
          <span className="block text-white">With AI</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          From automated lead generation to intelligent data processing — Black AI builds custom systems that make your business faster, smarter, and more profitable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services" className="btn-gold px-8 py-4 rounded-xl text-base w-full sm:w-auto text-center">
            View Our Services
          </a>
          <a href="#contact" className="btn-outline px-8 py-4 rounded-xl text-base font-semibold w-full sm:w-auto text-center">
            Book a Free Call
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}

// ── Services ───────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-black">
      <div className="gradient-divider max-w-7xl mx-auto mb-28" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag>What We Do</SectionTag>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every solution is built from scratch for your business. No one-size-fits-all packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ Icon, title, description }) => (
            <div key={title} className="glass-card rounded-2xl p-7 group">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/20 transition-colors">
                <Icon />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ────────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag>How We Work</SectionTag>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Our Process</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A clear, structured approach from the first call to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {STEPS.map(({ number, title, description }) => (
            <div key={number} className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-5 right-6 text-7xl font-black text-white/[0.03] leading-none select-none">
                {number}
              </div>
              <div className="text-amber-500 text-xs font-bold tracking-[0.25em] mb-3">{number}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Us ─────────────────────────────────────────────────────────────────────

function WhyUs() {
  return (
    <section id="why-us" className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTag>Why Black AI</SectionTag>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Real Results</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We don't just talk AI — we build systems that move the needle.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-amber-500/10 rounded-2xl overflow-hidden mb-20">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-black p-8 md:p-10 text-center">
              <div className="text-4xl md:text-5xl font-black gold-text mb-2">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Built for Your Business",
              desc: "Every system is custom-designed for your specific workflows — not a retrofitted template with your logo on it.",
            },
            {
              title: "Fast to Deploy",
              desc: "We work with urgency. Most projects are live in weeks, not months — with clear milestones and no surprises.",
            },
            {
              title: "Ongoing Partnership",
              desc: "We don't disappear after launch. We monitor, optimize, and evolve your systems as your business grows.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-0.5 rounded-full bg-gradient-to-b from-amber-500 to-transparent flex-shrink-0 mt-1 h-full min-h-[80px]" />
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ────────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.07)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <SectionTag>Let's Talk</SectionTag>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Ready to Bring AI<br />
          Into <span className="gold-text">Your Business?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Book a free consultation and we'll walk you through exactly how AI can transform your operations — no fluff, just real solutions.
        </p>

        <a
          href="mailto:hello@blackai.com"
          className="btn-gold px-10 py-5 rounded-xl text-lg inline-block"
        >
          Schedule a Free Call
        </a>

        <p className="text-gray-600 text-sm mt-5">No commitment. No sales pitch. Just a conversation.</p>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-amber-500/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-baseline gap-0.5">
          <span className="text-lg font-black gold-text tracking-tighter">BLACK</span>
          <span className="text-lg font-black text-white tracking-tighter"> AI</span>
        </a>

        <div className="flex items-center gap-8 text-sm text-gray-500">
          {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-amber-400 transition-colors">
              {label}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-sm">© 2025 Black AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
