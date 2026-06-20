export interface CourseGrade {
  id: string;
  courseCode: string;
  courseName: string;
  subtype: string;
  section: string;
  type: string;
  creditType: string;
  credits: number;
  qualityPoints: number;
  projectedGrade?: string;
  finalGrade?: string;
}

export interface GradeReport {
  period: string;
  sequence: string;
  attemptedCredits: number;
  earnedCredits: number;
  termGpa: number;
  overallGpa: number;
  courses: CourseGrade[];
}

export const DEMO_GRADE_REPORT: GradeReport = {
  period: "2026/Spring",
  sequence: "001",
  attemptedCredits: 16.0,
  earnedCredits: 16.0,
  termGpa: 2.74,
  overallGpa: 1.997,
  courses: [
    {
      id: "1",
      courseCode: "CSAI 101",
      courseName: "Fundamentals of Programming and CS",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 2.0,
      qualityPoints: 3.40,
      finalGrade: "C-",
    },
    {
      id: "2",
      courseCode: "CSAI 101",
      courseName: "Fundamentals of Programming and CS",
      subtype: "Laboratory",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 0.0,
      qualityPoints: 0.0,
      finalGrade: undefined,
    },
    {
      id: "3",
      courseCode: "MATH 103",
      courseName: "Calculus for Computational Science",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 3.0,
      qualityPoints: 6.90,
      finalGrade: "C+",
    },
    {
      id: "4",
      courseCode: "MATH 103",
      courseName: "Calculus for Computational Science",
      subtype: "Tutorial",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 0.0,
      qualityPoints: 0.0,
      finalGrade: undefined,
    },
    {
      id: "5",
      courseCode: "ENGL 002",
      courseName: "Remedial English 1",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Pass/Fail",
      credits: 0.0,
      qualityPoints: 0.0,
      finalGrade: "P",
    },
    {
      id: "6",
      courseCode: "CSAI 102",
      courseName: "Digital Logic and Computer Architecture",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 3.0,
      qualityPoints: 9.00,
      finalGrade: "B",
    },
    {
      id: "7",
      courseCode: "CSAI 252",
      courseName: "Introduction to Computer Networks",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 3.0,
      qualityPoints: 8.10,
      finalGrade: "B-",
    },
    {
      id: "8",
      courseCode: "SCH 258",
      courseName: "Arabic Literature",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 2.0,
      qualityPoints: 6.60,
      finalGrade: "B+",
    },
    {
      id: "9",
      courseCode: "MATH 102",
      courseName: "Calculus II",
      subtype: "Lecture",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 3.0,
      qualityPoints: 9.90,
      finalGrade: "B+",
    },
    {
      id: "10",
      courseCode: "MATH 102",
      courseName: "Calculus II",
      subtype: "Tutorial",
      section: "01",
      type: "Course",
      creditType: "Credit",
      credits: 0.0,
      qualityPoints: 0.0,
      finalGrade: undefined,
    },
  ],
};
