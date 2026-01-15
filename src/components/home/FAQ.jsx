import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    q: 'What is SwiftCart?',
    a: 'SwiftCart is a clean, fast catalog experience—built to browse items quickly, open details instantly, and keep your store layout organized as it grows.',
  },
  {
    q: 'Do I need an account to browse items?',
    a: 'No. Browsing and viewing item details can stay public. Only admin actions (like adding items) should be behind login.',
  },
  {
    q: 'How do item details work?',
    a: 'Each item has its own dynamic details page (using the item ID). This keeps navigation simple and makes sharing item links easy.',
  },
  {
    q: 'What kind of products can I add?',
    a: 'Anything that fits a catalog: clothing, shoes, accessories, bundles, or curated collections—just keep name, category, image URL, stock, price, and description.',
  },
  {
    q: 'Why is there a minimum description length?',
    a: 'Longer descriptions make products feel more real and trustworthy. It improves clarity and reduces “what is this?” confusion for buyers.',
  },
];

const FAQ = () => {
  return (
    <section className="bg-slate-950 py-30 border-t border-white/5">
      <div className="mx-auto w-full max-w-7xl">
        {/* header */}
        <div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              FAQ
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Quick
              <span className="ml-2 italic text-white/60"> Answers</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              Everything you need to know about how SwiftCart works—without the noise.
            </p>
          </div>

        </div>

        {/* accordion */}
        <div className="mt-10 grid gap-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="group rounded-3xl border border-white/10 bg-white/5 p-3 md:p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-white md:text-lg">{item.q}</h3>

                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition group-open:rotate-180">
                  <span className="group-open:hidden">
                    <FiPlus />
                  </span>
                  <span className="hidden group-open:inline">
                    <FiMinus />
                  </span>
                </span>
              </summary>

              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
