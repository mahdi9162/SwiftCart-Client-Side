'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiTrendingUp, FiArrowUpRight, FiHeart, FiGrid } from 'react-icons/fi';

const demoTrending = [
  { id: 1, name: 'SwiftCart Hoodie', price: 29.99, category: 'Clothing', stock: 12, image: '/clothing.webp', badge: 'Trending' },
  { id: 2, name: 'Premium Watch', price: 89.99, category: 'Accessories', stock: 5, image: '/accessories.webp', badge: 'Popular' },
  { id: 3, name: 'Casual Sneakers', price: 45.0, category: 'Shoes', stock: 0, image: '/shoes.webp', badge: 'Hot' },
  { id: 4, name: 'Tech Pack', price: 120.0, category: 'Collections', stock: 8, image: '/bundles.webp', badge: 'New' },
];

const Trending = () => {
  return (
    <section className="relative w-full flex items-center px-6 py-30 bg-slate-900/30 text-white overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-white/2 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Header - Compact Spacing */}
        <div className="mb-10 md:mb-12">
          <div className="max-w-xl space-y-3 text-left mb-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white/50 uppercase">
              <FiTrendingUp className="text-emerald-400" />
              TRENDING THIS WEEK
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Best sellers, <span className="text-white/40 italic font-light">right now.</span>
            </h2>
          </div>

          <div className="flex justify-between items-center">
            <p className="max-w-lg text-base md:text-lg leading-relaxed text-white/50">
              Popular items across the store — limited stock, quick checkout.
            </p>
            <Link
              href="/items/lists"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white/90 transition-all hover:bg-white/10 active:scale-95 group w-full sm:w-fit"
            >
              <FiGrid className="text-white/40 group-hover:text-white transition-colors" />
              View All Catalog
            </Link>
          </div>
        </div>

        {/* Product Grid  */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {demoTrending.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/2 transition-all duration-500 hover:bg-white/4 hover:-translate-y-1.5"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3.5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Badges Overlay */}
                <div className="absolute inset-x-3 top-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/40 px-2 py-1 text-[9px] font-bold text-white/80 backdrop-blur-md">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                    {item.badge}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                    ${item.price}
                  </div>
                </div>
              </div>

              {/* Card Body  */}
              <div className="p-5 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/20">{item.category}</span>
                  <span className={`text-[9px] font-bold tracking-wider ${item.stock > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {item.stock > 0 ? `${item.stock} IN STOCK` : 'OUT OF STOCK'}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight mb-4 group-hover:text-white transition-colors">{item.name}</h3>

                {/* Compact Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/items/${item.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-[11px] font-bold text-slate-950 hover:bg-white/90 active:scale-95 transition-all shadow-md"
                  >
                    Details <FiArrowUpRight />
                  </Link>
                  <button
                    type="button"
                    className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 hover:text-rose-400 hover:bg-white/10 transition-all active:scale-95"
                  >
                    <FiHeart className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
