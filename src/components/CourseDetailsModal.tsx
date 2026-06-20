"use client";

import { X } from "lucide-react";
import type { CourseGrade } from "@/data/grades";

interface CourseDetailsModalProps {
  course: CourseGrade;
  onClose: () => void;
}

export default function CourseDetailsModal({
  course,
  onClose,
}: CourseDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-2 sm:mx-0 overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            Course Details
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Course
            </p>
            <p className="text-base font-semibold text-brand-blue mt-1">
              {course.courseCode}: {course.courseName}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Subtype
              </p>
              <p className="text-sm text-gray-800 mt-1">{course.subtype}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Section
              </p>
              <p className="text-sm text-gray-800 mt-1">{course.section}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Credits
              </p>
              <p className="text-sm text-gray-800 mt-1">
                {course.credits.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Quality Points
              </p>
              <p className="text-sm text-gray-800 mt-1">
                {course.qualityPoints.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Credit Type
              </p>
              <p className="text-sm text-gray-800 mt-1">{course.creditType}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Final Grade
              </p>
              <p className={`text-sm font-semibold mt-1 ${
                !course.finalGrade ? "text-gray-400" :
                course.finalGrade.startsWith("A") || course.finalGrade === "P" ? "text-emerald-600" :
                course.finalGrade.startsWith("B") ? "text-blue-600" :
                course.finalGrade.startsWith("C") ? "text-amber-600" :
                course.finalGrade.startsWith("D") ? "text-orange-600" :
                course.finalGrade === "F" ? "text-red-600" : "text-gray-800"
              }`}>
                {course.finalGrade ?? "—"}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              Notes
            </p>
            <p className="text-sm text-gray-600 mt-1">
              No additional notes available for this course.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
