import { EmployeeList } from "../../components/EmployeeList";
import { Filters } from "../../components/Filters";
import { useFilters } from "../../contexts/FilterContext";
import { useDebounce } from "../../hooks/useDebounce";
import { Aside, AsideContent } from "./DashboardAside.styles";

const DashboardAside = () => {
  const { search, selectedTeam, setSearch, setSelectedTeam } = useFilters();
  const debouncedSearch = useDebounce(search, 300);

  return (
    <Aside>
      <AsideContent>
        <Filters
          search={search}
          selectedTeam={selectedTeam}
          onSearchChange={setSearch}
          onTeamChange={setSelectedTeam}
        />
        <EmployeeList search={debouncedSearch} team={selectedTeam} />
      </AsideContent>
    </Aside>
  );
};

export default DashboardAside;
