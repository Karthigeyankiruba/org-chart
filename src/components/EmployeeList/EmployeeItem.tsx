import styled from "styled-components";
import type { Employee } from "../../api";

interface EmployeeItemProps {
  employee: Employee;
}

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const EmployeeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #f3f4f6;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  border: 1px solid #e5e7eb;
  &:hover {
    background-color: #e5e7eb;
  }
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
`;

const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const EmployeeName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  line-height: 1.2;
`;

const EmployeeDesignation = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.2;
`;

const TeamTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;
`;

const EmployeeItem = ({ employee }: EmployeeItemProps) => {
  const initials = getInitials(employee.name);

  return (
    <EmployeeCard>
      <Avatar>{initials}</Avatar>
      <EmployeeInfo>
        <EmployeeName>{employee.name}</EmployeeName>
        <EmployeeDesignation>{employee.designation}</EmployeeDesignation>
        <TeamTag>{employee.team}</TeamTag>
      </EmployeeInfo>
    </EmployeeCard>
  );
};

export default EmployeeItem;
