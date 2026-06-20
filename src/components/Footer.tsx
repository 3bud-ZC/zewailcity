"use client";

import { BRANDING } from "@/config/branding";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80 py-4 mt-auto no-print shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs text-gray-500">{BRANDING.footerText}</span>
        {BRANDING.isDemo && (
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-sm">
            {BRANDING.demoLabel}
          </span>
        )}
      </div>
    </footer>
  );
}
