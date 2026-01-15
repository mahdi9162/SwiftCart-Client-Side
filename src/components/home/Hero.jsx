'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-slate-950 text-white flex items-center overflow-hidden px-4 justify-center border-b border-white/5 py-40 md:py-30">
      {/* soft bg glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 h-105 w-105 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-115 w-115 rounded-full bg-white/5 blur-3xl" />
      </div>
      {/* 1. Subtle Background Accents - Eta section-ke depth dibe */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left subtle indigo/white glow */}
        <div className="absolute top-[-10%] left-[-10%] h-125 w-125 rounded-full bg-white/3 blur-[120px]" />

        {/* Center subtle radial gradient - focus dhorar jonno */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

        {/* Bottom right glow */}
        <div className="absolute bottom-[-10%] right-[-10%] h-100 w-100 rounded-full bg-white/2 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content Area */}
          <div className="flex flex-col space-y-8 text-left">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wider text-white/70 backdrop-blur-sm uppercase">
                <span className="flex h-2 w-2">
                  <span className="animate-ping [animation-duration:3s] absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                NEW DROPS EVERY WEEK
              </div>
            </div>

            <h1 className="font-bold leading-[1.15] tracking-tight text-2xl md:text-5xl">
              Elevate your store with <br />
              with <span className="text-white/40 italic font-light">premium</span> picks.
            </h1>

            <p className="max-w-lg text-base md:text-lg leading-relaxed text-white/50">
              Experience a lightning-fast UI built for modern commerce. Manage your catalog and browse items in seconds.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/items/lists"
                className="px-8 py-3 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-white/90 transition-all active:scale-95 shadow-xl shadow-white/5"
              >
                Browse Items
              </Link>

              <Link
                href="/add-item"
                className="px-8 py-3 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all active:scale-95 backdrop-blur-md"
              >
                Add an Item
              </Link>
            </div>

            {/* Minimal Features List */}
            <div className="flex items-center gap-8 pt-6">
              {['FAST', 'CLEAN', 'SECURE'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-white/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="relative group w-full">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl transition-all duration-700">
              {/* Main Image */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/hero.webp"
                  alt="SwiftCart hero"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Info Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-bold tracking-tight text-white/90">Trending Picks</p>
                  <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">NEW</span>
                </div>
                <p className="text-[11px] text-white/50 leading-normal">Explore our latest curated items. Open details instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
