import EmployeeItem from "./EmployeeItem";
import { useGetEmployees } from "../../api";
import { SkeletonEmployeeList } from "./EmployeeListSkeleton";
import type { Employee } from "../../services/types/employee";
import {
  EmployeeListContainer,
  EmployeeListHeader,
  HeaderTitle,
  EmployeeListBody,
  EmptyState,
} from "./EmployeeList.styles";

interface EmployeeListProps {
  search?: string;
  team?: string;
}

const EmployeeList = ({ search, team }: EmployeeListProps) => {
  const { data: employees, isFetching } = useGetEmployees(
    search || undefined,
    team || undefined
  );

  return (
    <EmployeeListContainer>
      <EmployeeListHeader>
        <HeaderTitle>Employee List</HeaderTitle>
      </EmployeeListHeader>
      <EmployeeListBody>
        {isFetching ? (
          <SkeletonEmployeeList count={5} />
        ) : employees && employees.length > 0 ? (
          employees.map((employee: Employee) => (
            <EmployeeItem key={employee.id} employee={employee} />
          ))
        ) : (
          <EmptyState>No employees found</EmptyState>
        )}
      </EmployeeListBody>
    </EmployeeListContainer>
  );
};

export default EmployeeList;
