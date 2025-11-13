import { EmployeeList } from "../../components/EmployeeList";
import { Filters } from "../../components/Filters";
import { useFilters } from "../../contexts/FilterContext";
import { useDebounce } from "../../hooks/useDebounce";
import "./DashboardAside.style.css";

const DashboardAside = () => {
  const { search, selectedTeam, setSearch, setSelectedTeam } = useFilters();
  const debouncedSearch = useDebounce(search, 300);

  return (
    <aside className="dashboard-aside">
      <div className="aside-content">
        <Filters
          search={search}
          selectedTeam={selectedTeam}
          onSearchChange={setSearch}
          onTeamChange={setSelectedTeam}
        />
        <EmployeeList search={debouncedSearch} team={selectedTeam} />
      </div>
    </aside>
  );
};

export default DashboardAside;
