import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "./index";
import type { Employee } from "../services/types/employee";
// Fetch all employees with optional filters
const getEmployees = async (
  search?: string,
  team?: string
): Promise<Employee[]> => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (team && team !== "all") params.append("team", team);

  const queryString = params.toString();
  const url = `/employees${queryString ? `?${queryString}` : ""}`;
  const { data } = await apiClient.get(url);
  return data.employees;
};

export const useGetEmployees = (search?: string, team?: string) =>
  useQuery({
    queryKey: ["employees", search, team],
    queryFn: () => getEmployees(search, team),
  });

// Fetch employees by team
const getEmployeesByTeam = async (team: string): Promise<Employee[]> => {
  const { data } = await apiClient.get(`/employees/team/${team}`);
  return data.employees;
};

export const useGetEmployeesByTeam = (team: string) =>
  useQuery({
    queryKey: ["employees", "team", team],
    queryFn: () => getEmployeesByTeam(team),
    enabled: !!team && team !== "all",
  });

// Fetch list of available teams
const getTeams = async (): Promise<string[]> => {
  const { data } = await apiClient.get("/teams");
  return data.teams;
};

export const useGetTeams = () =>
  useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });

// Update employee (manager change via drag-drop)
const updateEmployee = async (id: string, updates: Partial<Employee>) => {
  const { data } = await apiClient.patch(`/employees/${id}`, updates);
  return data.employee;
};

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Employee> }) =>
      updateEmployee(id, updates) as Promise<Employee>,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
};
