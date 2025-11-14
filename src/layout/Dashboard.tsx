import DashboardTopBar from "./DashboardTopBar";
import DashboardAside from "./DashboardAside";
import DashboardMain from "./DashboardMain";
import { DashboardContainer, DashboardBody } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardAside />
      <DashboardBody>
        <DashboardTopBar />
        <DashboardMain />
      </DashboardBody>
    </DashboardContainer>
  );
};

export default Dashboard;
