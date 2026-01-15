'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const hardcodedEmail = 'demo@swiftcart.com';
    const hardcodedPassword = '123456';

    const { email, password } = data;

    if (email !== hardcodedEmail || password !== hardcodedPassword) {
      toast.error('Wrong Credentials');
    } else {
      // eslint-disable-next-line react-hooks/immutability
      document.cookie = 'auth=true; path=/; max-age=86400';
      // eslint-disable-next-line react-hooks/immutability
      document.cookie = 'email=demo@swiftcart.com; path=/; max-age=86400';
      router.push('/items/lists');
      toast.success('Successfully Login');
    }
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center px-4 py-40 md:py-30 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="w-full max-w-md">
          {/* Brand / Header */}
          <div className="text-center mb-6">
            <Link href="/" className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center">⚡</span>
              <span className="text-lg font-semibold tracking-wide">SwiftCart</span>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-semibold">Welcome back</h1>
            <p className="text-sm text-white/70 mt-2">Sign in to manage your account and access protected features.</p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-xl">
            {/* Demo hint box */}
            <div className="mb-5 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium">Demo Credentials</p>
              <div className="mt-2 text-sm text-white/70 space-y-1">
                <p>
                  Email: <span className="text-white">demo@swiftcart.com</span>
                </p>
                <p>
                  Password: <span className="text-white">123456</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  {...register('email', { required: 'Demo email is required' })}
                  placeholder="demo@swiftcart.com"
                  className="w-full rounded-xl bg-slate-950/40 border border-white/10 px-4 py-3 outline-none focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
                {errors.email && <p className="text-left mt-1 text-xs text-red-400/80">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  {...register('password', { required: 'Demo password is required' })}
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-slate-950/40 border border-white/10 px-4 py-3 outline-none focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
                {errors.password && <p className="text-left mt-1 text-xs text-red-400/80">{errors.password.message}</p>}
              </div>

              <div className="pt-1">
                <button type="button" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-white text-slate-900 font-semibold py-3 hover:bg-white/90 active:scale-[0.99] transition cursor-pointer"
              >
                Sign In
              </button>

              <div className="relative py-2">
                <div className="h-px bg-white/10" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-1 text-xs px-3 bg-slate-900 text-white/60">or</span>
              </div>

              <button
                type="button"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-white/90 hover:bg-white/10 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="text-lg">G</span>
                Continue with Google
              </button>
            </form>

            {/* Footer text */}
            <p className="text-center text-sm text-white/60 mt-6">
              New here? <span className="text-white/80">No signup needed for this demo.</span>
            </p>
          </div>

          {/* Bottom link */}
          <div className="text-center mt-6">
            <Link href="/" className="text-sm text-white/70 hover:text-white underline underline-offset-4">
              Continue browsing items →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
