'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGrid, FiBox, FiGift, FiTag, FiArrowRight } from 'react-icons/fi';
import { GiRunningShoe } from 'react-icons/gi';

const categories = [
  {
    title: 'Clothing',
    desc: 'Hoodies, tees, jackets & more',
    icon: FiTag,
    count: '120+',
    img: '/clothing.webp',
    href: '/items/lists?cat=clothing',
  },
  {
    title: 'Accessories',
    desc: 'Caps, bags, sunglasses',
    icon: FiGift,
    count: '80+',
    img: '/accessories.webp',
    href: '/items/lists?cat=accessories',
  },
  {
    title: 'Shoes',
    desc: 'Sneakers, casual & premium',
    icon: GiRunningShoe,
    count: '45+',
    img: '/shoes.webp',
    href: '/items/lists?cat=shoes',
  },
  {
    title: 'Collections',
    desc: 'Curated drops & bundles',
    icon: FiBox,
    count: '12+',
    img: '/bundles.webp',
    href: '/items/lists?cat=collections',
  },
];

const Categories = () => {
  return (
    <section className="relative bg-slate-900/30 text-white border-t border-white/5 py-20 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="space-y-4 max-w-3xl text-left mb-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white/60 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              Store Collections
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Find what you need, <span className="text-white/40 italic font-light">faster.</span>
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="max-w-lg text-base md:text-lg leading-relaxed text-white/50">Shop by category — curated picks, updated weekly.</p>
            <Link
              href="/items/lists"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white/90 transition-all hover:bg-white/10 active:scale-95 group w-full sm:w-fit"
            >
              <FiGrid className="text-white/40 group-hover:text-white transition-colors" />
              View All Catalog
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                href={c.href}
                className="group relative h-95 flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 transition-all duration-500 hover:border-white/20 hover:-translate-y-2"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover opacity-70 transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Top Section: Icon & Count Integrated */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 transition-all duration-500 group-hover:top-5">
                  <div className="flex items-center gap-3 p-1 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                      <Icon className="text-lg" />
                    </div>
                    <span className="pr-3 text-[11px] font-black text-white/90 tracking-tighter uppercase italic">
                      {c.count} <span className="text-[9px] font-normal not-italic text-white/40 ml-0.5">Items</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-white flex items-center justify-between group-hover:text-emerald-400 transition-colors">
                      {c.title}
                      <FiArrowRight className="text-xl opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-sm text-white/50 font-medium leading-relaxed group-hover:text-white/70">{c.desc}</p>
                  </div>

                  {/* Subtle Progress Bar */}
                  <div className="mt-5 h-0.5 w-full bg-white/5 overflow-hidden rounded-full">
                    <div className="h-full w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full opacity-50" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
