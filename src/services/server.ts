import { createServer, Model, Response, type Registry } from "miragejs";
import type { Employee } from "./types/employee";
import { employees } from "./data/employees";
import type Schema from "miragejs/orm/schema";
import type { AnyFactories, Assign, ModelDefinition } from "miragejs/-types";

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    logging: environment === "development", // Only log in development
    trackRequests: environment === "development", // Only track in development

    models: {
      employee: Model.extend<Partial<Employee>>({}),
    },

    seeds(server) {
      employees.forEach((emp) => server.create("employee", emp));
    },

    routes() {
      this.namespace = "api";

      // Get all employees
      this.get("/employees", (schema, request) => {
        const queryParams = request.queryParams;
        const search = Array.isArray(queryParams.search)
          ? queryParams.search[0]
          : queryParams.search;
        const team = Array.isArray(queryParams.team)
          ? queryParams.team[0]
          : queryParams.team;

        let employees = schema.all("employee");

        // Apply search filter if provided
        if (search && typeof search === "string") {
          const searchLower = search.toLowerCase();
          employees = employees.filter((employee: any) => {
            const name = (employee.attrs.name || "").toLowerCase();
            const designation = (
              employee.attrs.designation || ""
            ).toLowerCase();
            const teamName = (employee.attrs.team || "").toLowerCase();
            return (
              name.includes(searchLower) ||
              designation.includes(searchLower) ||
              teamName.includes(searchLower)
            );
          });
        }

        // Apply team filter if provided
        if (team && typeof team === "string" && team !== "all") {
          employees = employees.filter(
            (employee: any) => employee.attrs.team === team
          );
        }

        return employees;
      });

      // Get single employee by ID
      this.get("/employees/:id", (schema, request) => {
        const id = request.params.id;
        const employee = schema.find("employee", id);
        if (!employee) {
          return new Response(404, {}, { error: "Employee not found" });
        }
        return { employee };
      });

      // Get employees by team
      this.get("/employees/team/:team", (schema, request) => {
        const team = request.params.team;
        return schema
          .all("employee")
          .filter((employee: any) => employee.attrs.team === team);
      });

      // Get list of available teams
      this.get("/teams", (schema) => {
        const allEmployees = schema.all("employee");
        const teamsSet = new Set<string>();

        allEmployees.models.forEach((employee: any) => {
          if (employee.attrs.team) {
            teamsSet.add(employee.attrs.team);
          }
        });

        return {
          teams: Array.from(teamsSet).sort(),
        };
      });

      // Update employee manager (for drag & drop)
      this.patch(
        "/employees/:id",
        (
          schema: Schema<
            Registry<
              { employee: ModelDefinition<Assign<{}, Partial<Employee>>> },
              AnyFactories
            >
          >,
          request
        ) => {
          const id = request.params.id;
          const attrs = JSON.parse(request.requestBody);
          const employee = schema.find("employee", id);

          if (!employee) {
            return new Response(404, {}, { error: "Employee not found" });
          }

          employee.update(attrs);
          return employee;
        }
      );
    },
  });

  return server;
}
