import { FiUsers } from "react-icons/fi";
import { useGetEmployees } from "../../api";
import {
  TopBar,
  TopBarContent,
  TopBarLeft,
  TitleWrapper,
  TopBarTitle,
  TopBarSubtitle,
  TopBarRight,
  EmployeeStats,
  StatsNumber,
  StatsLabel,
  StatsIcon,
} from "./DashboardTopBar.styles";

const DashboardTopBar = () => {
  const { data: employees = [] } = useGetEmployees();
  const totalEmployees = employees.length;

  return (
    <TopBar>
      <TopBarContent>
        <TopBarLeft>
          <TitleWrapper>
            <TopBarTitle>Employee Org Chart</TopBarTitle>
          </TitleWrapper>
          <TopBarSubtitle>
            Manage and visualize your organization structure
          </TopBarSubtitle>
        </TopBarLeft>
        <TopBarRight>
          <EmployeeStats>
            <StatsNumber>
              {totalEmployees}
              <StatsIcon>
                <FiUsers />
              </StatsIcon>
            </StatsNumber>
            <StatsLabel>Total Employees</StatsLabel>
          </EmployeeStats>
        </TopBarRight>
      </TopBarContent>
    </TopBar>
  );
};

export default DashboardTopBar;
