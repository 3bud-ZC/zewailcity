"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardCalendar from "@/components/DashboardCalendar";
import { getSession } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const session = getSession();
    if (!session?.isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col geometric-bg">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Today&apos;s Overview
          </h1>
          <span className="text-xs sm:text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <DashboardCalendar />
          </div>

          {/* Right sidebar card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100">
              Quick Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                { label: "View Grades", href: "/grades", color: "text-brand-blue hover:text-blue-800" },
                { label: "Registration", href: "/dashboard", color: "text-gray-600 hover:text-gray-900" },
                { label: "Financial Summary", href: "/dashboard", color: "text-gray-600 hover:text-gray-900" },
                { label: "Academic Calendar", href: "/dashboard", color: "text-gray-600 hover:text-gray-900" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block text-sm font-medium transition-colors duration-150 ${link.color}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
