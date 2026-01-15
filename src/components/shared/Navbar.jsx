import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-4 py-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 grid place-items-center group-hover:bg-white/20 transition-all">
                <span className="text-lg">⚡</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SwiftCart
              </span>
            </Link>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                Home
              </Link>
              <Link 
                href="/items/lists" 
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                All Items
              </Link>
              <Link 
                href="/add-item" 
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                Add Item
              </Link>
            </div>

            {/* Auth/Action Button */}
            <div className="flex items-center gap-3">
              <Link 
                href="/login" 
                className="px-5 py-2 rounded-xl text-sm font-bold bg-white text-slate-950 hover:bg-white/90 transition-all active:scale-[0.95]"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Links (Visible on small screens) */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-3 pt-3 border-t border-white/5 overflow-x-auto no-scrollbar">
              <Link href="/" className="text-xs font-medium text-white/60 hover:text-white whitespace-nowrap">Home</Link>
              <Link href="/items/lists" className="text-xs font-medium text-white/60 hover:text-white whitespace-nowrap">Items</Link>
              <Link href="/add-item" className="text-xs font-medium text-white/60 hover:text-white whitespace-nowrap">Add New</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;