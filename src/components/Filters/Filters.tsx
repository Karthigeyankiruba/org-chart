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

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const TeamSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

interface FiltersProps {
  search: string;
  selectedTeam: string;
  onSearchChange: (search: string) => void;
  onTeamChange: (team: string) => void;
}

const Filters = ({
  search,
  selectedTeam,
  onSearchChange,
  onTeamChange,
}: FiltersProps) => {
  const teams = useGetTeams();

  const teamOptions = ["All", ...(teams.data ?? [])];

  return (
    <FiltersContainer>
      <FiltersHeader>
        <h2>Search Employees</h2>
      </FiltersHeader>
      <FiltersBody>
        <SearchInput
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSearchChange(event.target.value)
          }
        />
        <TeamSelect
          value={selectedTeam}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onTeamChange(event.target.value)
          }
        >
          {teamOptions.map((option) => (
            <option key={option} value={option === "All" ? "all" : option}>
              {option}
            </option>
          ))}
        </TeamSelect>
      </FiltersBody>
    </FiltersContainer>
  );
};

export default Filters;
