import { useFilters } from "./contexts/FilterContext";

import { lazy, Suspense } from "react";

const OrgChart = lazy(() =>
  import("./components/OrgChart").then((module) => ({
    default: module.OrgChart,
  }))
);

function App() {
  const { selectedTeam } = useFilters();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrgChart team={selectedTeam} />
    </Suspense>
  );
}

export default App;
