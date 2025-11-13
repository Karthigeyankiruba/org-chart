import EmployeeItem from "./EmployeeItem";
import { useGetEmployees, type Employee } from "../../api";
import { SkeletonEmployeeList } from "./EmployeeListSkeleton";
import styled from "styled-components";

const EmployeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
`;

const EmployeeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
`;

const EmployeeListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: rgb(162, 162, 164);
  font-size: 14px;
  font-weight: 500;
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
        <h2>Employee List</h2>
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
