import { EmployeeList } from "../../components/EmployeeList";
import { Filters } from "../../components/Filters";
import "./DashboardAside.style.css";

const DashboardAside = () => {
  return (
    <aside className="dashboard-aside">
      <div className="aside-content">
        <Filters />
        <EmployeeList />
      </div>
    </aside>
  );
};

export default DashboardAside;
