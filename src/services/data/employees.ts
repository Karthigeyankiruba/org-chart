import type { Employee } from "../types/employee";

export const employees: Employee[] = [
  {
    id: "1",
    name: "Mark Hill",
    designation: "CEO",
    team: "Management",
    managerId: null,
  },
  {
    id: "2",
    name: "Joe Linux",
    designation: "CTO",
    team: "Engineering",
    managerId: "1",
  },
  {
    id: "3",
    name: "Ron Blomquist",
    designation: "Lead Engineer",
    team: "Engineering",
    managerId: "2",
  },
  {
    id: "4",
    name: "John Green",
    designation: "Product Manager",
    team: "Product",
    managerId: "1",
  },
  {
    id: "5",
    name: "Lisa Brown",
    designation: "UX Designer",
    team: "Design",
    managerId: "4",
  },
  {
    id: "6",
    name: "Samantha Lee",
    designation: "Software Engineer",
    team: "Engineering",
    managerId: "3",
  },
  {
    id: "7",
    name: "Michael Tan",
    designation: "QA Engineer",
    team: "Quality Assurance",
    managerId: "3",
  },
  {
    id: "8",
    name: "Sarah Johnson",
    designation: "Engineering Manager",
    team: "Engineering",
    managerId: "1",
  },
  {
    id: "9",
    name: "Alex Chen",
    designation: "Frontend Engineer",
    team: "Engineering",
    managerId: "2",
  },
];
