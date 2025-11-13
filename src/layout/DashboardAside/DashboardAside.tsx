import { EmployeeList } from "../../components/EmployeeList";
import { Filters } from "../../components/Filters";
import { useFilters } from "../../contexts/FilterContext";
import "./DashboardAside.style.css";

const DashboardAside = () => {
  const { search, selectedTeam, setSearch, setSelectedTeam } = useFilters();

  return (
    <aside className="dashboard-aside">
      <div className="aside-content">
        <Filters
          search={search}
          selectedTeam={selectedTeam}
          onSearchChange={setSearch}
          onTeamChange={setSelectedTeam}
        />
        <EmployeeList search={search} team={selectedTeam} />
      </div>
    </aside>
  );
};

export default DashboardAside;
