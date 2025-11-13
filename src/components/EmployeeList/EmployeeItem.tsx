import { Avatar } from "../common/Avatar";
import type { Employee } from "../../services/types/employee";
import {
  EmployeeCard,
  AvatarWrapper,
  EmployeeInfo,
  EmployeeName,
  EmployeeDesignation,
  TeamTag,
} from "./EmployeeItem.styles";

interface EmployeeItemProps {
  employee: Employee;
}

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
