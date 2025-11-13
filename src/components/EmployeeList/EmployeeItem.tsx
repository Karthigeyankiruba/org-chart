import styled from "styled-components";
import { Avatar } from "../common/Avatar";
import type { Employee } from "../../services/types/employee";

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--color-background-white);
  border-radius: var(--radius-md);
  cursor: pointer;
  width: 100%;
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);

  &:hover {
    background-color: var(--color-gray-50);
    border-color: var(--color-primary-500);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }
`;

const AvatarWrapper = styled.div`
  transition: transform var(--transition-normal);

  ${EmployeeCard}:hover & {
    transform: scale(1.05);
  }
`;

const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  flex: 1;
  min-width: 0;
`;

const EmployeeName = styled.h3`
  margin: 0;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  line-height: var(--line-height-tight);
  transition: color var(--transition-normal);

  ${EmployeeCard}:hover & {
    color: var(--color-primary-600);
  }
`;

const EmployeeDesignation = styled.p`
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  line-height: var(--line-height-tight);
`;

const TeamTag = styled.span`
  display: inline-block;
  padding: 4px var(--spacing-sm);
  background: linear-gradient(
    135deg,
    var(--color-primary-100) 0%,
    var(--color-primary-50) 100%
  );
  color: var(--color-primary-800);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  width: fit-content;
  border: 1px solid var(--color-primary-200);
  transition: all var(--transition-normal);
`;

const EmployeeItem = ({ employee }: EmployeeItemProps) => {
  return (
    <EmployeeCard>
      <AvatarWrapper>
        <Avatar imageUrl={employee.avatar} name={employee.name} size="48px" />
      </AvatarWrapper>
      <EmployeeInfo>
        <EmployeeName>{employee.name}</EmployeeName>
        <EmployeeDesignation>{employee.designation}</EmployeeDesignation>
        <TeamTag>{employee.team}</TeamTag>
      </EmployeeInfo>
    </EmployeeCard>
  );
};

export default EmployeeItem;
