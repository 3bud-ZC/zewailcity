"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradeFilters from "@/components/GradeFilters";
import SummaryCard from "@/components/SummaryCard";
import GradeTable from "@/components/GradeTable";
import { getSession } from "@/lib/auth";
import { DEMO_GRADE_REPORT } from "@/data/grades";

export default function GradesPage() {
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

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Grade Report</h1>
          <span className="text-xs sm:text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full w-fit">
            {DEMO_GRADE_REPORT.period} — Seq {DEMO_GRADE_REPORT.sequence}
          </span>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <GradeFilters />
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <SummaryCard
            title="Credits"
            values={[
              { value: DEMO_GRADE_REPORT.attemptedCredits.toFixed(2), label: "Attempted" },
              { value: DEMO_GRADE_REPORT.earnedCredits.toFixed(2), label: "Earned" },
            ]}
          />
          <SummaryCard
            title="GPA"
            values={[
              { value: DEMO_GRADE_REPORT.termGpa.toFixed(4), label: "Term" },
              { value: DEMO_GRADE_REPORT.overallGpa.toFixed(4), label: "Overall" },
            ]}
          />
        </div>

        {/* Grade table */}
        <div className="mb-6">
          <GradeTable />
        </div>

        {/* Awards card */}
        <div className="bg-white rounded shadow border border-gray-200 p-4 sm:p-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
            Awards & Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <div>
              <span className="font-medium text-gray-800">Term:</span>{" "}
              <span className="text-gray-500">No honors for this term</span>
            </div>
            <div>
              <span className="font-medium text-gray-800">Overall:</span>{" "}
              <span className="text-gray-500">No honors awarded</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
