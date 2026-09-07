"use client";

import { Printer, ChevronDown } from "lucide-react";
import { AVAILABLE_PERIODS } from "@/data/grades";

interface GradeFiltersProps {
  period?: string;
  onPeriodChange?: (period: string) => void;
  sequence?: string;
  onSequenceChange?: (sequence: string) => void;
  availablePeriods?: string[];
}

export default function GradeFilters({
  period = "2026/Summer",
  onPeriodChange,
  sequence = "001",
  onSequenceChange,
  availablePeriods = AVAILABLE_PERIODS,
}: GradeFiltersProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded shadow border border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 no-print">
      {/* Period Dropdown */}
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label htmlFor="period" className="text-xs text-gray-500 font-medium">
          Period
        </label>
        <div className="relative">
          <select
            id="period"
            value={period}
            onChange={(e) => onPeriodChange?.(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[200px] cursor-pointer"
          >
            {availablePeriods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Sequence Dropdown */}
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label htmlFor="sequence" className="text-xs text-gray-500 font-medium">
          Sequence
        </label>
        <div className="relative">
          <select
            id="sequence"
            value={sequence}
            onChange={(e) => onSequenceChange?.(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[140px] cursor-pointer"
          >
            <option value="001">001</option>
            <option value="002">002</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="flex-1" />

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium px-2 py-1 transition-colors self-end sm:self-center"
      >
        <Printer className="w-4 h-4" />
        <span>Print</span>
      </button>
    </div>
  );
}
