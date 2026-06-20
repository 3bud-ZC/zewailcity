"use client";

import { useState } from "react";
import { DEMO_GRADE_REPORT } from "@/data/grades";
import CourseDetailsModal from "./CourseDetailsModal";
import type { CourseGrade } from "@/data/grades";

export default function GradeTable() {
  const [selectedCourse, setSelectedCourse] = useState<CourseGrade | null>(null);
  const { courses } = DEMO_GRADE_REPORT;

  return (
    <div className="bg-white rounded shadow border border-gray-200 overflow-hidden">
      <div className="px-4 sm:px-6 py-3 border-b border-gray-200 bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-800">Main</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-3 sm:px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Course
              </th>
              <th className="text-right px-3 sm:px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Credits
              </th>
              <th className="text-right px-3 sm:px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                Quality Points
              </th>
              <th className="text-center px-3 sm:px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider hidden md:table-cell">
                Projected Grade
              </th>
              <th className="text-center px-3 sm:px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Final Grade
              </th>
              <th className="text-left px-3 sm:px-6 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
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
