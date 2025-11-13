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
import { useNavigate } from "react-router";

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeItem = ({ employee }: EmployeeItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <EmployeeCard onClick={handleClick}>
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
