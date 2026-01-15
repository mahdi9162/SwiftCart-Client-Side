'use client';

import React from 'react';
import { FiZap, FiShield, FiSearch, FiGrid, FiRefreshCcw, FiTrendingUp } from 'react-icons/fi';

const FEATURES = [
  {
    icon: <FiZap className="text-xl animate-pulse [animation-duration:1.8s]" />,
    title: 'Lightning-fast browsing',
    desc: 'Optimized UI so users can scan items and reach details instantly.',
    badge: 'Fast',
  },
  {
    icon: <FiSearch className="text-xl animate-pulse [animation-duration:1.8s]" />,
    title: 'Smart discovery',
    desc: 'Clear categories + clean cards that make finding products effortless.',
    badge: 'Searchable',
  },
  {
    icon: <FiGrid className="text-xl animate-pulse [animation-duration:1.8s]" />,
    title: 'Organized catalog',
    desc: 'Neat structure for name, price, stock, and image — no messy layouts.',
    badge: 'Structured',
  },
  {
    icon: <FiRefreshCcw className="text-xl animate-pulse [animation-duration:1.8s]" />,
    title: 'Instant updates',
    desc: 'Add new items and see changes reflected quickly across the app.',
    badge: 'Live',
  },
  {
    icon: <FiTrendingUp className="text-xl animate-pulse [animation-duration:1.8s]" />,
    title: 'Trend-ready sections',
    desc: 'Trending + featured blocks to highlight what matters most to buyers.',
    badge: 'Curated',
  },
  {
    icon: <FiShield className="text-xl animate-pulse [animation-duration:1.8s]" />,
    title: 'Protected admin actions',
    desc: 'Keep “Add Item” behind login so only authorized users can upload.',
    badge: 'Secure',
  },
];

const Features = () => {
  return (
    <section className="bg-slate-950 px-3 md:px-0 py-20 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wider text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              FEATURES
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-tight md:text-6xl">
              Built for a clean <span className="italic font-light text-white/60">flow.</span>
            </h2>

            <p className="mt-4 w-125 text-xs leading-relaxed text-white/60 md:text-base">
              SwiftCart keeps things simple: browse fast, spot the right product, and open details without friction.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-4 md:p-5">
            <p className="text-xs text-white/60">Quick promise</p>
            <p className="mt-1 text-sm font-medium">Fast UI • Clean cards • Secure admin</p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 transition hover:border-white/20 "
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex h-10 w-10 md:w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90">
                  {f.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-4 text-end text-[11px] tracking-wide text-white/50">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">{f.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
