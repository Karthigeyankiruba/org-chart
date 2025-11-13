import styled from "styled-components";
import { FiSearch, FiX, FiFilter } from "react-icons/fi";
import { useGetTeams } from "../../api";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: var(--spacing-md);
  margin-bottom: var(--spacing-md);
`;

const FiltersHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;
`;

const HeaderTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const FiltersBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: var(--spacing-md);
  color: var(--color-gray-400);
  font-size: 18px;
  pointer-events: none;
  transition: color var(--transition-normal);
`;

const ClearButton = styled.button`
  position: absolute;
  right: var(--spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);

  &:hover {
    color: var(--color-gray-600);
    background-color: var(--color-gray-100);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 40px;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-sans);
  color: var(--color-gray-900);
  background-color: var(--color-background-white);
  transition: all var(--transition-normal);

  &::placeholder {
    color: var(--color-gray-400);
  }

  &:hover {
    border-color: var(--color-gray-300);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
  }

  &:focus + ${SearchIcon} {
    color: var(--color-primary-500);
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectIcon = styled(FiFilter)`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray-400);
  font-size: 18px;
  pointer-events: none;
  z-index: 1;
`;

const TeamSelect = styled.select`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 40px;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-sans);
  background-color: var(--color-background-white);
  color: var(--color-gray-900);
  cursor: pointer;
  appearance: none;
  transition: all var(--transition-normal);

  &:hover {
    border-color: var(--color-gray-300);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
  }

  option {
    padding: var(--spacing-md);
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

  const handleClearSearch = () => {
    onSearchChange("");
  };

  return (
    <FiltersContainer>
      <FiltersHeader>
        <HeaderTitle>
          <FiFilter />
          Search & Filter
        </HeaderTitle>
      </FiltersHeader>
      <FiltersBody>
        <InputWrapper>
          <SearchInput
            type="text"
            placeholder="Search by name, designation, or team..."
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onSearchChange(event.target.value)
            }
          />
          <SearchIcon />
          {search && (
            <ClearButton onClick={handleClearSearch} aria-label="Clear search">
              <FiX size={18} />
            </ClearButton>
          )}
        </InputWrapper>

        <SelectWrapper>
          <SelectIcon />
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
        </SelectWrapper>
      </FiltersBody>
    </FiltersContainer>
  );
};

export default Filters;
