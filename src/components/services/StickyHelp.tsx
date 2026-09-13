"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyHelp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center gap-2 rounded-full border-[3px] border-black bg-ev-neon-pink px-5 py-3 font-brutal text-xs uppercase text-white shadow-brutal-lg transition-transform hover:scale-105 md:text-sm"
      >
        <span>Need help choosing?</span>
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
