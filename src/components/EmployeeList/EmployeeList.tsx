import React from "react";
import EmployeeItem from "./EmployeeItem";
import { useGetEmployees } from "../../api";
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
`;

const EmployeeList = () => {
  const { data: employees } = useGetEmployees();
  console.log("employees", employees);
  return (
    <EmployeeListContainer>
      <EmployeeListHeader>
        <h2>Employee List</h2>
      </EmployeeListHeader>
      <EmployeeListBody>
        {employees?.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </EmployeeListBody>
    </EmployeeListContainer>
  );
};

export default EmployeeList;
