'use client';

import React from 'react';
import Link from 'next/link';
import { FiUploadCloud, FiGrid, FiZap } from 'react-icons/fi';

const steps = [
  {
    title: 'Add Items',
    desc: 'Upload products instantly with our streamlined form.',
    icon: <FiUploadCloud className="text-xl" />,
  },
  {
    title: 'Browse Catalog',
    desc: 'Experience fast browsing with real-time stock status.',
    icon: <FiGrid className="text-xl" />,
  },
  {
    title: 'Review Details',
    desc: 'Deep dive into items with optimized detail pages.',
    icon: <FiZap className="text-xl" />,
  },
];

const HowItWorks = () => {
  return (
<section className="relative w-full px-6 py-24 bg-slate-950 text-white border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Simple Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-widest text-white/50 uppercase">
            Quick Guide
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            How it works <span className="text-white/30 font-medium italic">— seamlessly.</span>
          </h2>
        </div>

        {/* Organized Steps Grid with Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-[2.5rem] overflow-hidden bg-white/1">
          {steps.map((s, idx) => (
            <div 
              key={s.title} 
              className={`group p-10 flex flex-col justify-between transition-all duration-500 hover:bg-white/3 
                ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
            >
              <div className="space-y-8">
                {/* Icon with persistent border for better organization */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all group-hover:bg-white group-hover:text-slate-950 shadow-2xl">
                  {s.icon}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-white/20 px-2 py-0.5 border border-white/10 rounded-md">0{idx + 1}</span>
                    <h3 className="text-xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Decorative detail to make it feel less "empty" */}
              <div className="mt-12 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="h-1 w-1 rounded-full bg-emerald-500" />
                 <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer CTA */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6">
           <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase">Ready to start?</p>
           <div className="h-px flex-1 bg-white/5 hidden sm:block" />
           <div className="flex gap-4">
              <Link href="/add-item" className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">Add Item →</Link>
              <Link href="/items/lists" className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">Browse Catalog →</Link>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;