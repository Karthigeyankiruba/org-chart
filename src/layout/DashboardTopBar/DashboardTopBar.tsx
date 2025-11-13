import "./DashboardTopBar.style.css";

const DashboardTopBar = () => {
  return (
    <header className="dashboard-topbar">
      <div className="topbar-content">
        <h1 className="topbar-title">Employee Org Chart</h1>
        <p className="topbar-subtitle">
          Manage and visualize your organization structure.
        </p>
      </div>
    </header>
  );
};

export default DashboardTopBar;
