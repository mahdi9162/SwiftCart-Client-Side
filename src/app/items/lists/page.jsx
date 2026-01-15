'use client';

import Loading from '@/components/loading/Loading';
import { axiosInstance } from '@/utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Items = () => {
  const { data: items = [], isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get('/items');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen px-4 py-40 md:py-30 bg-slate-950 text-white selection:bg-white/20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[5%] left-1/4 h-100 w-100 rounded-full bg-white/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-l-4 border-white/20 pl-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Products</h1>
          <p className="mt-3 text-white/60 max-w-xl leading-relaxed">
            Browse our curated collection — each item is crafted for quality and style. Manage your catalog with ease.
          </p>
        </div>

        {/* Grid System  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Single Card Item */}
          {items?.map((item) => (
            <div
              key={item._id}
              className="group relative rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/8 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item?.productImage}
                  alt="SwiftCart Hoodie"
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Price Tag - Floating Style */}
                <div className="absolute top-4 right-4 rounded-2xl border border-white/20 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 text-sm font-bold shadow-xl">
                  <span className="text-white/60 font-normal mr-0.5">$</span>
                  {item.productPrice}
                </div>

                {/* Category Badge - Over Image */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-lg bg-white/10 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors line-clamp-1">{item.itemName}</h2>
                  <span className="flex h-2 w-2 mt-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </div>

                <p className="mt-3 text-sm text-white/50 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-tighter text-white/30">Status</span>
                    <span className="text-xs font-medium text-emerald-400/90">{item.inStock <= 0 ? 'Stock Out' : 'In Stock'}</span>
                  </div>

                  <Link
                    href={`/items/${item._id}`}
                    className="px-5 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-white/90 active:scale-95 transition-all shadow-lg cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* End of Single Card */}
        </div>
      </div>
    </section>
  );
};

export default Items;
