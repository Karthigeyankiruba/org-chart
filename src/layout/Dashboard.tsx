import DashboardTopBar from "./DashboardTopBar";
import DashboardAside from "./DashboardAside";
import DashboardMain from "./DashboardMain";
import "./Dashboard.style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardTopBar />
      <div className="dashboard-body">
        <DashboardAside />
        <DashboardMain />
      </div>
    </div>
  );
};

export default Dashboard;
