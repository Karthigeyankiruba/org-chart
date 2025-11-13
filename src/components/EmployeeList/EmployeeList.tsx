import EmployeeItem from "./EmployeeItem";
import { useGetEmployees } from "../../api";
import { SkeletonEmployeeList } from "./EmployeeListSkeleton";
import styled from "styled-components";
import type { Employee } from "../../services/types/employee";

const EmployeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  border-radius: var(--radius-md);
  width: 100%;
`;

const EmployeeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  border-radius: var(--radius-md);
  width: 100%;
`;

const HeaderTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin: 0;
  font-family: var(--font-family-sans);
`;

const EmployeeListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--spacing-md);
  border-radius: var(--radius-md);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: var(--spacing-xs) 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-gray-100);
    border-radius: var(--radius-full);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-300);
    border-radius: var(--radius-full);
    transition: background var(--transition-normal);

    &:hover {
      background: var(--color-gray-400);
    }
  }
`;

const EmptyState = styled.div`
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-family-sans);
`;

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
