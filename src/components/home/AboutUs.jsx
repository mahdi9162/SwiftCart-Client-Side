import React from 'react';
import { FiZap, FiShield, FiGrid } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <section className="relative py-20 px-3 md:px-0 border-t border-white/5 bg-slate-900/30">
      {/* soft bg glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 h-105 w-105 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-115 w-115 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl ">
        {/* header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              ABOUT SWIFTCART
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-6xl">
              Curated fits, made to
              <span className="ml-2 italic font-light text-white/60">match you.</span>
            </h2>

            <p className="mt-4 w-137.5 text-xs text-justify leading-relaxed text-white/70 md:text-base">
              SwiftCart brings together everyday essentials and standout pieces—organized by category, ready to browse, and easy to decide.
            </p>
          </div>

          <div className="md:flex gap-3 hidden">
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

            <div className="mt-4 text-justify space-y-4 text-xs leading-normal text-white/70 md:text-base">
              <p>
                SwiftCart started with a simple idea: shopping for clothes should feel exciting, not exhausting. Most stores make you scroll
                forever, guess what’s worth it, and lose the vibe in the noise. We wanted a place where every section feels intentional—so
                you can spot your next fit fast.
              </p>

              <p>
                That’s why we called it <span className="font-semibold text-white">SwiftCart</span>.
                <span className="text-white/60"> “Swift” means quick discovery, and “Cart” is the moment you’re ready to commit.</span>{' '}
                Together, it’s a smoother shopping flow: clean categories, consistent cards, and details that open instantly—so choosing
                feels easy.
              </p>

              <p>
                SwiftCart isn’t about flashy gimmicks. It’s about curated picks and a premium browsing experience: clear info, strong
                visuals, and a layout that stays clean as new drops come in.
              </p>
            </div>
          </div>

          {/* values */}
          <div className="lg:col-span-5 grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:-translate-y-1.5 transition duration-500 ease-out hover:shadow-[0_18px_60px_-30px_rgba(255,255,255,0.25)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 ">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <FiZap />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">Fast discovery</h4>
                  <p className="mt-1 text-xs md:text-sm text-white/70">can fits quickly, open details instantly, decide with confidence.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:-translate-y-1.5 transition duration-500 ease-out hover:shadow-[0_18px_60px_-30px_rgba(255,255,255,0.25)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <FiGrid />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">Clean categories</h4>
                  <p className="mt-1 text-xs md:text-sm text-white/70">Shop by what you want—tees, hoodies, shoes—no messy scrolling.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:-translate-y-1.5 transition duration-500 ease-out hover:shadow-[0_18px_60px_-30px_rgba(255,255,255,0.25)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <FiShield />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">Checkout-ready</h4>
                  <p className="mt-1 text-xs md:text-sm text-white/70">Clear price + stock + info so adding to cart feels effortless.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom note */}
        <div className="mt-8 md:mt-10 rounded-3xl border border-white/10 bg-linear-to-r from-white/5 to-white/0 p-6 md:p-8">
          <p className="text-xs text-justify text-white/70 md:text-base">
            Bottom line: SwiftCart is a modern catalog experience—built to feel fast, look clean, and scale with new items without turning
            messy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
