import { Outlet } from "react-router-dom";
import "./DashboardMain.style.css";

const DashboardMain = () => {
  return (
    <main className="dashboard-main">
      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardMain;
