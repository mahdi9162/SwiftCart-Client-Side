'use client';
import Loading from '@/components/loading/Loading';
import { axiosInstance } from '@/utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const ItemDetailsPage = () => {
  const { id } = useParams();

  const {
    data: item,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['item', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosInstance.get(`/items/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <div className="p-6 text-red-500">{error?.message}</div>;

  return (
    <section className="relative min-h-screen px-4 py-40 md:py-30 bg-slate-950 text-white flex flex-col items-center">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 h-150 w-150 rounded-full bg-white/2 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-8">
        {/* Upper Section: Image & Quick Actions */}
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Compact Image (Standard size) */}
            <div className="lg:col-span-5 relative bg-black/40 flex items-center justify-center p-3 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="relative w-full aspect-square max-w-100 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <Image
                  src={item.productImage}
                  alt={item.itemName || 'Item'}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Price Floating */}
                <div className="absolute top-5 left-5">
                  <div className="rounded-2xl border border-white/20 bg-slate-950/80 backdrop-blur-md px-4 py-2 md:text-xl font-bold shadow-2xl">
                    <span className="text-white/40 font-normal mr-1">$</span>
                    {item.productPrice}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Info & Buy Button */}
            <div className="lg:col-span-7 p-3 md:p-16 flex flex-col justify-center bg-linear-to-br from-transparent to-white/2">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Product Overview
                </div>

                <h1 className="text-xl md:text-4xl font-bold tracking-tight mb-6 md:mb-10">{item.itemName}</h1>

                {/* Quick Specs Row */}
                <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-10">
                  <div className="p-4 w-full rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Category</p>
                    <p className="text-sm md:text-base font-semibold text-white/90">{item.category || 'N/A'}</p>
                  </div>
                  <div className="w-full p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Stock Status</p>
                    <p className="text-sm md:text-base font-semibold text-emerald-400">
                      {item.inStock ? `${item.inStock} Units Available` : 'Out of Stock'}
                    </p>
                  </div>
                </div>

                {/* Main Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="w-full py-2 md:py-5 rounded-2xl bg-white text-slate-950 font-bold md:text-lg hover:bg-white/90 transition-all active:scale-[0.98] shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
                    Buy Now
                  </button>
                  <Link
                    href="/items/lists"
                    className="w-full py-2 md:py-5 rounded-2xl bg-white/5 border border-white/10 text-white md:text-lg font-medium hover:bg-white/10 text-center transition-all"
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Full Description  */}
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl md:max-w-max">
            <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="h-8 w-1 bg-white rounded-full" />
              Product Description
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-sm md:text-lg text-white/60 leading-relaxed font-light whitespace-pre-line text-justify overflow-y-auto md:overflow-hidden line-clamp-6 md:line-clamp-none custom-scrollbar">{item.description}</p>
            </div>

            {/* Additional */}
            <div className="mt-6 md:mt-12 flex flex-col md:flex-row gap-3 justify-between pt-6 md:pt-10 border-t border-white/5 text-white/40 text-xs tracking-widest uppercase">
              <div className="flex items-center gap-3">
                <span className="text-xl">🛡️</span> Secure Checkout
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🚚</span> Fast Shipping
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✨</span> Quality Assured
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailsPage;
