"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginCard from "@/components/LoginCard";
import Footer from "@/components/Footer";
import { getSession } from "@/lib/auth";
import { BRANDING } from "@/config/branding";
import { Menu } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const session = getSession();
    if (session?.isLoggedIn) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col geometric-bg">
      {/* Top navbar */}
      <nav className="bg-[#4F46E5] border-b-4 border-[#3B82F6] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
              <span className="inline-flex w-7 h-7 rounded-full border-2 border-white/80 items-center justify-center text-xs font-bold bg-white/10">
                e
              </span>
              {BRANDING.portalName}
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="hidden sm:inline-block text-xs font-bold text-white/90 tracking-widest uppercase bg-white/10 px-3 py-1.5 rounded">
                Admissions
              </span>
              <button
                aria-label="Menu"
                className="text-white/90 hover:text-white transition-colors duration-150"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <LoginCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
