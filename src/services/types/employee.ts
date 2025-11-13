export interface Employee {
  id: string;
  name: string;
  designation: string;
  team: string;
  managerId: string | null; // null for top-level employees
}
