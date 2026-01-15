'use client';
import { axiosInstance } from '@/utils/axiosInstance';
import { getCookie } from '@/utils/cookies';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddItem = () => {
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const auth = getCookie('auth');
    const email = getCookie('email');

    const ok = auth === 'true' && email === 'demo@swiftcart.com';

    if (!ok) {
      router.replace('/login');
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecking(false);
  }, [router]);

  if (checking) return null;

  const handleUploadItem = async (data) => {
    try {
      const description = (data?.description || '').trim();

      const wordCount = description.split(/\s+/).filter(Boolean).length;

      if (wordCount < 130) {
        return toast.error(`Minimum 150 words required! Now: ${wordCount}`);
      }

      await axiosInstance.post('/items', data);
      reset();
      toast.success('Your item is successfully uploaded!');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || 'Upload failed!');
    }
  };

  return (
    <section className="relative min-h-screen px-4 py-40 md:py-30 bg-slate-950 text-white selection:bg-white/20">
      {/* subtle white glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 h-125 w-125 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top bar */}
        <div className="sticky top-4 z-20 mb-6 md:mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 grid place-items-center">
                <span className="text-xl">➕</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Add New Item</h1>
                <p className="text-sm text-white/70">Create a product and publish it to your catalog.</p>
              </div>
            </div>

            <Link
              href="/items/lists"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all"
            >
              ← Back to Items
            </Link>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-white">Item Information</h2>
              <p className="text-white/70 mt-2">Fill in the core details. You can tweak later anytime.</p>
            </div>

            <form onSubmit={handleSubmit(handleUploadItem)} className="space-y-8">
              {/* Name + Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm text-white/80">
                    <span>Item Name</span>
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    {...register('itemName', { required: 'Product name is required' })}
                    placeholder="e.g. SwiftCart Hoodie"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder:text-white/30 focus:border-white/25 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                  />
                  {errors.itemName && <p className="text-left mt-1 text-xs text-red-400/80">{errors.itemName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/80 flex justify-between">
                    <span>Category</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white focus:border-white/25 focus:ring-2 focus:ring-white/10 outline-none transition-all appearance-none cursor-pointer"
                    name="category"
                    {...register('category', { required: 'Product category is required' })}
                  >
                    <option value="" className="bg-slate-900">
                      Select category
                    </option>
                    <option className="bg-slate-900 cursor-pointer">Clothing</option>
                    <option className="bg-slate-900 cursor-pointer">Accessories</option>
                    <option className="bg-slate-900 cursor-pointer">Home</option>
                    <option className="bg-slate-900 cursor-pointer">Electronics</option>
                    <option className="bg-slate-900 cursor-pointer">Other</option>
                  </select>
                  {errors.category && <p className="text-left mt-1 text-xs text-red-400/80">{errors.category.message}</p>}
                </div>
              </div>

              {/* Price + Stock */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm text-white/80 ">
                    <span>Price</span>
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white">$</span>
                    <input
                      type="number"
                      name="productPrice"
                      {...register('productPrice', { required: 'Product price is required' })}
                      placeholder="29.99"
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder:text-white/30 focus:border-white/25 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                    />
                    {errors.productPrice && <p className="text-left mt-1 text-xs text-red-400/80">{errors.productPrice.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/80 flex justify-between">
                    <span>Stock Count</span>
                  </label>
                  <input
                    type="number"
                    name="inStock"
                    {...register('inStock', { required: 'Stock count is required' })}
                    placeholder="e.g. 50"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder:text-white/30 focus:border-white/25 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                  />
                  {errors.productPrice && <p className="text-left mt-1 text-xs text-red-400/80">{errors.productPrice.message}</p>}
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="text-sm text-white/80">Image URL</label>
                <input
                  type="url"
                  name="productImage"
                  {...register('productImage', { required: 'Product image is required' })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder:text-white/30 focus:border-white/25 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                />
                {errors.productImage && <p className="text-left mt-1 text-xs text-red-400/80">{errors.productImage.message}</p>}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm text-white/80">
                  <span>Description</span>
                </label>
                <textarea
                  rows={4}
                  name="description"
                  {...register('description', { required: 'Product description is required' })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-white/10 text-white placeholder:text-white/30 focus:border-white/25 focus:ring-2 focus:ring-white/10 outline-none transition-all resize-none"
                  placeholder="Write a clear description..."
                />
                {errors.description && <p className="text-left mt-1 text-xs text-red-400/80">{errors.description.message}</p>}
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <button
                  type="reset"
                  className="px-6 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white transition-all order-2 sm:order-1"
                >
                  Reset Form
                </button>

                <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
                  <Link
                    href="/items/lists"
                    className="px-6 py-3 rounded-xl text-sm font-medium border border-white/10 text-white/90 hover:bg-white/10 text-center transition-all"
                  >
                    Cancel
                  </Link>
                  {/* Primary Action Button */}
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl text-sm font-bold bg-white text-slate-950 hover:bg-white/90 shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Upload Item
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
