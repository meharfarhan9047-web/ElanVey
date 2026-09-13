import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ScallopDivider } from "@/components/ui/ScallopDivider";

export function Footer() {
  return (
    <>
      <ScallopDivider position="top" className="footer-scallop-divider" />
      <footer className="bg-ev-black text-white relative">
      {/* Main Footer Content */}
      <div className="container-content px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-16">

        {/* Top Row: Big Logo + CTA on same line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16 md:mb-20 pb-10 md:pb-12 border-b-[3px] border-white/15">
          <Link href="/" className="inline-block group">
            <img
              src="/images/Logo_text.png"
              alt="Elan Vey"
              className="h-24 w-auto md:h-36 lg:h-44 object-contain object-left transition-transform group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-brutal text-sm uppercase tracking-widest text-ev-neon-yellow hidden lg:block">
              Ready to elevate your presence?
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation →
            </Button>
          </div>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

          {/* Column 1: About */}
          <div>
            <h4 className="font-brutal text-sm uppercase tracking-[0.2em] text-ev-neon-pink mb-6 border-b-[2px] border-ev-neon-pink/30 pb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-ev-neon-pink" />
              About
            </h4>
            <p className="text-sm font-medium leading-relaxed text-white/70 mb-6">
              Creative designs that make your ideas shine. Friendly creative help for everyone — individuals, small shops, and all your big ideas.
            </p>
            <p className="text-xs font-bold leading-relaxed text-white/40 uppercase tracking-wider">
              {siteConfig.contact.address}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-brutal text-sm uppercase tracking-[0.2em] text-ev-neon-pink mb-6 border-b-[2px] border-ev-neon-pink/30 pb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-ev-neon-pink" />
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 font-brutal uppercase text-xs tracking-[0.15em] text-white/75 transition-all hover:text-ev-neon-yellow hover:translate-x-1"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20 transition-all group-hover:bg-ev-neon-yellow group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-brutal text-sm uppercase tracking-[0.2em] text-ev-neon-pink mb-6 border-b-[2px] border-ev-neon-pink/30 pb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-ev-neon-pink" />
              Get In Touch
            </h4>
            <div className="space-y-5">
              <div>
                <p className="font-brutal text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Email</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-white/90 hover:text-ev-neon-yellow transition-colors inline-block">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="font-brutal text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Phone</p>
                <p className="text-sm font-bold text-white/90">
                  {siteConfig.contact.phone}
                </p>
              </div>
              <div className="flex gap-4 pt-2">
                {siteConfig.social.instagram.startsWith("http") && (
                  <a
                    href={siteConfig.social.instagram}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-white/20 text-white/70 hover:border-ev-neon-yellow hover:text-ev-neon-yellow hover:bg-white/5 transition-all hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                )}
                {siteConfig.social.facebook.startsWith("http") && (
                  <a
                    href={siteConfig.social.facebook}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-white/20 text-white/70 hover:border-ev-neon-yellow hover:text-ev-neon-yellow hover:bg-white/5 transition-all hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-[2px] border-white/10 bg-black/40">
        <div className="container-content px-6 md:px-10 lg:px-16 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-brutal uppercase tracking-[0.1em] text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs font-brutal uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-ev-neon-yellow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
