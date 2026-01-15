import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-slate-950">
      {/* Subtle Background Glow - Consistent with your other pages */}
      <div className="absolute h-64 w-64 rounded-full bg-white/5 blur-[100px] animate-pulse" />

      <div className="relative flex flex-col items-center">
        {/* Modern Spinner Design */}
        <div className="relative h-20 w-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/5 shadow-inner"></div>
          
          {/* Animated Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-t-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-spin"></div>
          
          {/* Center Icon/Logo - Consistent with Navbar */}
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-xl animate-bounce">⚡</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold tracking-[0.2em] uppercase text-white">
            Swift<span className="text-white/40">Cart</span>
          </h2>
          <div className="mt-2 flex gap-1 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-[bounce_1s_infinite_100ms]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-[bounce_1s_infinite_200ms]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/30 animate-[bounce_1s_infinite_300ms]"></span>
          </div>
        </div>
      </div>

      {/* Glassy Overlay Text at Bottom */}
      <p className="absolute bottom-10 text-xs font-medium text-white/40 tracking-widest uppercase">
        Loading Experience
      </p>
    </div>
  );
};

export default Loading;