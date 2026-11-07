import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function StickyContactBar() {
  return (
    <div
      role="region"
      aria-label="Quick Contact Bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0D2116]/95 dark:bg-[#070E0A]/95 backdrop-blur-md border-t border-[#233D2F] py-2.5 px-4 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-white font-medium">
            <strong className="font-display font-bold">{SITE_CONFIG.brandName}</strong>
            <span className="hidden md:inline text-[#A7BDB0] ml-2">
              — Need help with yellowing plants or a small-space apartment setup?
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SITE_CONFIG.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#166534] hover:bg-[#14532D] text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}