export interface Student {
  username: string;
  password: string;
  displayName: string;
  email?: string;
}

export const DEMO_STUDENTS: Student[] = [
  {
    username: "202201712",
    password: "HB-224522666",
    displayName: "Habiba",
    email: "202201712@demo.edu",
  },
  {
    username: "202507300",
    password: "AMZewailian#2007",
    displayName: "Student",
    email: "202507300@demo.edu",
  },
];
