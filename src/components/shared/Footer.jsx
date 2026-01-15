import React from 'react';
import Link from 'next/link';
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      {/* top divider */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl py-14">
        <div className="flex justify-between gap-30">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">⚡</span>
              <span className="text-lg font-semibold tracking-wide">SwiftCart</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              A clean, fast catalog experience built for modern commerce—browse items quickly, open details instantly, and keep your store
              organized as it grows.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="mailto:hello@swiftcart.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex-2 flex justify-between">
            <div>
              <p className="text-sm font-semibold">Explore</p>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <Link className="hover:text-white transition" href="/items/lists">
                    Items
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/add-item">
                    Add Item
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/#categories">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/#trending">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Company</p>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <Link className="hover:text-white transition" href="/#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/#faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/#features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/#how-it-works">
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Legal</p>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>
                  <Link className="hover:text-white transition" href="/terms">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/privacy">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white transition" href="/cookies">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} SwiftCart. All rights reserved.</p>

          <p className="text-xs text-white/50">Built for speed • Designed for flow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
