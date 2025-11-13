import { FiX, FiFilter } from "react-icons/fi";
import { useGetTeams } from "../../api";
import {
  FiltersContainer,
  FiltersHeader,
  HeaderTitle,
  FiltersBody,
  InputWrapper,
  SearchIcon,
  ClearButton,
  SearchInput,
  SelectWrapper,
  SelectIcon,
  TeamSelect,
} from "./Filters.styles";
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
