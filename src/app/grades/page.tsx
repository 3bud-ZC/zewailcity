"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradeFilters from "@/components/GradeFilters";
import SummaryCard from "@/components/SummaryCard";
import GradeTable from "@/components/GradeTable";
import { getSession } from "@/lib/auth";
import { GRADE_REPORTS, AVAILABLE_PERIODS } from "@/data/grades";

export default function GradesPage() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<string>("2026/Summer");
  const [selectedSequence, setSelectedSequence] = useState<string>("001");

  useEffect(() => {
    const session = getSession();
    if (!session?.isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  const currentReport =
    GRADE_REPORTS[selectedPeriod] || GRADE_REPORTS["2026/Summer"];

  return (
    <div className="min-h-screen flex flex-col geometric-bg">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Grade Report</h1>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <GradeFilters
            period={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
            sequence={selectedSequence}
            onSequenceChange={setSelectedSequence}
            availablePeriods={AVAILABLE_PERIODS}
          />
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <SummaryCard
            title="Credits"
            values={[
              { value: currentReport.attemptedCredits.toFixed(2), label: "Attempted" },
              { value: currentReport.earnedCredits.toFixed(2), label: "Earned" },
            ]}
          />
          <SummaryCard
            title="GPA"
            values={[
              { value: currentReport.termGpa.toFixed(4), label: "Term" },
              { value: currentReport.overallGpa.toFixed(4), label: "Overall" },
            ]}
          />
        </div>

        {/* Grade table */}
        <div className="mb-6">
          <GradeTable courses={currentReport.courses} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
