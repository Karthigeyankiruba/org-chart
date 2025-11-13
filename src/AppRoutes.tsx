import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./layout";

const OrgChart = lazy(() =>
  import("./components/OrgChart").then((module) => ({
    default: module.OrgChart,
  }))
);
const EmployeeDetails = lazy(() =>
  import("./components/EmployeeDetails").then((module) => ({
    default: module.EmployeeDetails,
  }))
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OrgChart />
              </Suspense>
            }
          />
          <Route
            path="employee/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <EmployeeDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
