"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { getSession, logout } from "@/lib/auth";
import { BRANDING } from "@/config/branding";

const NAV_ITEMS = [
  { label: "REGISTRATION", href: "/schedule" },
  { label: "GRADES", href: "/grades" },
  { label: "FINANCES", href: "/dashboard" },
  { label: "SEARCH", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    const session = getSession();
    if (session) {
      setDisplayName(session.displayName);
    }
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="no-print bg-[#4F46E5] border-b-[3px] border-[#3B82F6] relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo area */}
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight hover:opacity-90 transition-opacity duration-150">
              <span className="inline-flex w-7 h-7 rounded-full border-2 border-white/80 items-center justify-center text-xs font-bold bg-white/10">
                e
              </span>
              {BRANDING.portalName}
            </Link>

            {/* Desktop nav items */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-4 text-xs font-bold tracking-wide transition-all duration-150 relative ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent rounded-t" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right area */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Cart"
              className="text-white/90 hover:text-white transition-colors duration-150 p-1 rounded hover:bg-white/10"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>

            <div className="relative">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-150 p-1 rounded hover:bg-white/10"
                aria-label="Profile menu"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                  <User className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium">{displayName}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
              </button>

              {profileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setProfileOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{displayName}</p>
                      <p className="text-xs text-gray-500">Student</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors duration-150"
                    >
                      <LogOut className="w-4 h-4 text-gray-500" />
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>

          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden space-x-3">
            <button
              aria-label="Cart"
              className="text-white/90 hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-purple border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-bold tracking-wide ${
                  isActive(item.href)
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2">
              <div className="flex items-center gap-2 px-3 py-2 text-white/90">
                <User className="w-4 h-4" />
                <span className="text-sm">{displayName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 rounded-md text-sm text-white/80 hover:bg-white/10 hover:text-white flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
