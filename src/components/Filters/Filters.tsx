import React from "react";
import styled from "styled-components";
import { useGetTeams } from "../../api";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const FiltersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
`;

const FiltersBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  width: 100%;
`;

const Filters = () => {
  const teams = useGetTeams();

  const options = teams.data ?? [];

  const teamOptions = ["All", ...(teams.data ?? [])];

  return (
    <FiltersContainer>
      <FiltersHeader>
        <h2>Filters</h2>
      </FiltersHeader>
      <FiltersBody>
        <input type="text" placeholder="Search" />
        <select>
          {options?.length > 0
            ? options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))
            : null}
        </select>
      </FiltersBody>
    </FiltersContainer>
  );
};

export default Filters;
