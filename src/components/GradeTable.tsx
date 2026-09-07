"use client";

import { useState } from "react";
import { DEMO_GRADE_REPORT } from "@/data/grades";
import CourseDetailsModal from "./CourseDetailsModal";
import type { CourseGrade } from "@/data/grades";

interface GradeTableProps {
  courses?: CourseGrade[];
}

export default function GradeTable({ courses = DEMO_GRADE_REPORT.courses }: GradeTableProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseGrade | null>(null);

  return (
    <div className="bg-white rounded shadow border border-gray-200 overflow-hidden">
      <div className="px-4 sm:px-6 pt-4 pb-2">
        <h3 className="text-base font-semibold text-gray-800">Main</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b border-gray-200 bg-white">
            <tr>
              <th className="text-left px-3 sm:px-6 py-2.5 text-xs font-semibold text-gray-700">
                Course
              </th>
              <th className="text-right px-3 sm:px-6 py-2.5 text-xs font-semibold text-gray-700">
                Credits
              </th>
              <th className="text-right px-3 sm:px-6 py-2.5 text-xs font-semibold text-gray-700 hidden sm:table-cell">
                Quality Points
              </th>
              <th className="text-center px-3 sm:px-6 py-2.5 text-xs font-semibold text-gray-700 hidden md:table-cell">
                Projected Grade
              </th>
              <th className="text-center px-3 sm:px-6 py-2.5 text-xs font-semibold text-gray-700">
                Final Grade
              </th>
              <th className="text-left px-3 sm:px-6 py-2.5 text-xs font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {courses.map((course) => (
              <tr
                key={course.id}
                className="hover:bg-gray-50"
              >
                <td className="px-3 sm:px-6 py-3 sm:py-4 align-top">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-left text-blue-600 hover:underline text-xs sm:text-sm font-medium"
                  >
                    {course.courseCode}: {course.courseName}
                  </button>
                  <div className="mt-1 text-[10px] sm:text-xs text-gray-500">
                    <p>
                      Subtype: {course.subtype} | Section: {course.section}
                    </p>
                    <p>
                      Type: {course.type} | Credit type: {course.creditType}
                    </p>
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-gray-700 align-top tabular-nums text-xs sm:text-sm">
                  {course.credits.toFixed(2)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-right text-gray-700 align-top tabular-nums hidden sm:table-cell text-xs sm:text-sm">
                  {course.qualityPoints.toFixed(2)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-700 align-top hidden md:table-cell text-xs sm:text-sm">
                  {course.projectedGrade ?? ""}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-center align-top">
                  <span className="tabular-nums text-xs sm:text-sm text-gray-700">
                    {course.finalGrade ?? "—"}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 align-top">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
