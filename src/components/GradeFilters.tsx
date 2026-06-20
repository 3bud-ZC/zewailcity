"use client";

import { Printer } from "lucide-react";

export default function GradeFilters() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded shadow border border-gray-200 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 no-print">
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label htmlFor="period" className="text-xs text-gray-600">
          Period
        </label>
        <select
          id="period"
          defaultValue="2026/Spring"
          className="px-3 py-2 border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white min-w-[160px]"
        >
          <option>2026/Spring</option>
          <option>2025/Fall</option>
          <option>2025/Spring</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label htmlFor="sequence" className="text-xs text-gray-600">
          Sequence
        </label>
        <select
          id="sequence"
          defaultValue="001"
          className="px-3 py-2 border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white min-w-[120px]"
        >
          <option>001</option>
          <option>002</option>
        </select>
      </div>

      <div className="flex-1" />

      <button
        onClick={handlePrint}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium px-2 py-1"
      >
        <Printer className="w-4 h-4" />
        Print
      </button>
    </div>
  );
}
