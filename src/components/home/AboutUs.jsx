import React from 'react';
import { FiZap, FiShield, FiGrid } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <section className="relative py-30 border-t border-white/5 bg-slate-900/30">
      {/* soft bg glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 h-105 w-105 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-115 w-115 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl ">
        {/* header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              ABOUT SWIFTCART
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Built for speed,
              <span className="ml-2 italic text-white/60">designed for flow.</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              SwiftCart started with a simple frustration: managing a catalog shouldn’t feel heavy. Most dashboards are slow, cluttered, and
              make even “add an item” feel like work. So we built a clean experience that feels like: click → done.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-white/60">Focus</p>
              <p className="text-sm font-medium text-white">Clarity</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-white/60">Priority</p>
              <p className="text-sm font-medium text-white">Speed</p>
            </div>
          </div>
        </div>

        {/* story card */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white">Our story</h3>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
              <p>
                We wanted a storefront dashboard that stays out of the way—something you can trust to be fast, consistent, and easy to scan.
                A place where categories make sense, cards look clean, and details open instantly—so people spend time choosing, not
                searching.
              </p>

              <p>
                That’s why we called it <span className="font-semibold text-white">SwiftCart</span>.
                <span className="text-white/60"> “Swift” stands for fast and smooth, and “Cart” is the core action in commerce.</span>{' '}
                Together, it means a faster shopping flow: quick browsing, quick updates, and quick decisions.
              </p>

              <p>
                SwiftCart isn’t built on gimmicks. It’s a practical system: organized sections, predictable layouts, and a modern UI that
                keeps your catalog looking premium as it grows.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Fast UX', 'Clean layout', 'Instant details', 'Admin-safe'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* values */}
          <div className="lg:col-span-5 grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:-translate-y-1.5 transition-all duration-500">
              <div className="flex items-start gap-3 ">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <FiZap />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">Speed-first UI</h4>
                  <p className="mt-1 text-sm text-white/70">Smooth navigation, quick scanning, and instant detail access.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:-translate-y-1.5 transition-all duration-500">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <FiGrid />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">Structured catalog</h4>
                  <p className="mt-1 text-sm text-white/70">Categories + consistent cards so the store feels organized.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:-translate-y-1.5 transition-all duration-500">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <FiShield />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">Controlled actions</h4>
                  <p className="mt-1 text-sm text-white/70">Sensitive routes (like Add Item) stay behind login.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom note */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-linear-to-r from-white/5 to-white/0 p-6 md:p-8">
          <p className="text-sm text-white/70 md:text-base">
            Bottom line: SwiftCart is a modern catalog experience—built to feel fast, look clean, and scale with new items without turning
            messy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
