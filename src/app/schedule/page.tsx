"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScheduleCard from "@/components/ScheduleCard";
import { getSession } from "@/lib/auth";
import { DEMO_SCHEDULE } from "@/data/schedule";

export default function SchedulePage() {
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
            Course Schedule
          </h1>
          <span className="text-xs sm:text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full w-fit">
            Spring 2026
          </span>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {DEMO_SCHEDULE.map((course) => (
            <ScheduleCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
