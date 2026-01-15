import React from 'react';
import Link from 'next/link';
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900/60 backdrop-blur text-white border-t border-white/5 px-3 md:px-0">
      {/* separation gradient line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-30">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">⚡</span>
              <span className="text-lg font-semibold tracking-wide">SwiftCart</span>
            </Link>

            <p className="mt-4 md:w-87.5 text-sm leading-relaxed text-white/60">
              A clean, fast shopping experience — browse drops, open details instantly, and pick your next fit in seconds.
            </p>

            <div className="mt-5 flex justify-center md:justify-start items-center gap-3">
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
          <div className="flex-2">
            {/* Mobile: 2-col grid | MD+: flex-row */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:flex md:flex-row md:gap-8 md:justify-between">
              {/* Explore */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:border-0 md:bg-transparent md:p-0">
                <p className="text-sm font-semibold text-white/90">Explore</p>
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

              {/* Company */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:border-0 md:bg-transparent md:p-0">
                <p className="text-sm font-semibold text-white/90">Company</p>
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

              {/* Legal */}
              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4 md:col-auto md:border-0 md:bg-transparent md:p-0">
                <p className="text-sm font-semibold text-white/90">Legal</p>
                <ul className="mt-4 grid grid-cols-3 gap-3 text-sm text-white/60 md:block md:space-y-3">
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
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between text-center">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} SwiftCart. All rights reserved.</p>

          <p className="text-xs text-white/50">Built for speed • Designed for flow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
