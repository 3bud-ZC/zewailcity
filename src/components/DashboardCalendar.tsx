"use client";

import { useState } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

export default function DashboardCalendar() {
  const [currentDate] = useState(new Date(2026, 5, 1)); // June 2026
  const selectedDate = new Date(2026, 5, 14);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells: (number | null)[] = [];

  // leading days from prev month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    cells.push(prevMonthDays - i);
  }
  // current month days
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push(i);
  }
  // trailing days from next month
  const remaining = (7 - (cells.length % 7)) % 7;
  for (let i = 1; i <= remaining; i++) {
    cells.push(i);
  }

  const formattedSelected = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-4 sm:p-6 transition-all duration-200 hover:shadow-md">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-100">Your Calendar</h3>
      <div className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <button
            aria-label="Previous month"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold text-gray-800">
            June {year}
          </span>
          <button
            aria-label="Next month"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-xs font-medium text-gray-500 py-1"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {cells.map((day, idx) => {
            const isCurrentMonth =
              idx >= firstDayOfMonth && idx < firstDayOfMonth + daysInMonth;
            const isSelected = isCurrentMonth && day === 14;
            return (
              <div
                key={idx}
                className={`text-xs py-1.5 rounded-full flex items-center justify-center transition-all duration-150 cursor-default ${
                  isSelected
                    ? "bg-brand-blue text-white font-bold shadow-sm ring-2 ring-brand-blue/20"
                    : isCurrentMonth
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-gray-300"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <p className="text-sm font-semibold text-gray-800 mb-4">
          {formattedSelected}
        </p>
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <CalendarIcon className="w-10 h-10 text-brand-blue mb-3" />
          <p className="text-sm text-gray-500 max-w-[140px]">
            There are no calendar events for this day
          </p>
        </div>
      </div>
    </div>
  );
}
