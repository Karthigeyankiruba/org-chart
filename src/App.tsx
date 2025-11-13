import { OrgChart } from "./components/OrgChart";
import { useFilters } from "./contexts/FilterContext";

function App() {
  const { selectedTeam } = useFilters();
  return <OrgChart team={selectedTeam} />;
}

export default App;
