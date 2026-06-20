"use client";

import type { ScheduleCourse } from "@/data/schedule";

interface ScheduleCardProps {
  course: ScheduleCourse;
}

export default function ScheduleCard({ course }: ScheduleCardProps) {
  return (
    <div className="bg-white rounded shadow border border-gray-200 p-4 sm:p-5 transition hover:shadow-md">
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
        {course.courseCode}: {course.courseName}
      </h3>

      <span className="inline-block text-xs font-medium text-green-700 border border-green-300 rounded px-2 py-0.5 mb-3">
        {course.status}
      </span>

      <div className="space-y-1.5 text-xs text-gray-600">
        <p>
          <span className="text-gray-800">Year:</span> {course.year} |{" "}
          <span className="text-gray-800">Term:</span> {course.term} |{" "}
          <span className="text-gray-800">Session:</span> {course.session}
        </p>
        <p>
          <span className="text-gray-800">Subtype:</span> {course.subtype} |{" "}
          <span className="text-gray-800">Section:</span> {course.section}
        </p>
        <p>
          <span className="text-gray-800">Type:</span> {course.type} |{" "}
          <span className="text-gray-800">Credit type:</span> {course.creditType} |{" "}
          <span className="text-gray-800">Credits:</span> {course.credits.toFixed(2)}
        </p>
        <p>
          <span className="text-gray-800">Duration:</span> {course.duration}
        </p>

        {course.meetingTimes && (
          <p>
            <span className="text-gray-800">{course.meetingTimes}</span>
          </p>
        )}

        {course.location && (
          <p className="text-gray-700">
            {course.location}
          </p>
        )}

        {course.instructor && (
          <p>
            <span className="text-gray-800">Instructor:</span>{" "}
            <span className="text-gray-700">{course.instructor}</span>
          </p>
        )}
      </div>
    </div>
  );
}
