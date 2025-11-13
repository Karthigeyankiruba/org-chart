import type { Employee } from "../types/employee";

export const employees: Employee[] = [
  {
    id: "1",
    name: "Mark Hill",
    designation: "Chief Executive Officer",
    team: "Management",
    managerId: null,
  },
  {
    id: "2",
    name: "Joe Linux",
    designation: "Chief Technology Officer",
    team: "Engineering",
    managerId: "1",
  },
  {
    id: "3",
    name: "Dan Blomquist",
    designation: "Chief Information Security Officer",
    team: "Security",
    managerId: "1",
  },
  {
    id: "4",
    name: "John Green",
    designation: "Chief Executive Officer",
    team: "Product",
    managerId: "1",
  },
  {
    id: "5",
    name: "Erika Best",
    designation: "Chief Marketing Officer",
    team: "Marketing",
    managerId: "1",
  },
  {
    id: "6",
    name: "Linda May",
    designation: "Chief Revenue Officer",
    team: "Sales",
    managerId: "1",
  },
  {
    id: "7",
    name: "Alice Lopez",
    designation: "Chief Communications Officer",
    team: "Communications",
    managerId: "6",
  },
  {
    id: "8",
    name: "Michael Rubin",
    designation: "Chief Administrative Officer",
    team: "Administration",
    managerId: "2",
  },
  {
    id: "9",
    name: "Mary Johnson",
    designation: "Chief Brand Officer",
    team: "Brand",
    managerId: "8",
  },
  {
    id: "10",
    name: "Jack Richardson",
    designation: "Chief Business Development Officer",
    team: "Business Development",
    managerId: "8",
  },
];
