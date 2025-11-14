import { Outlet } from "react-router-dom";
import { Main, MainContent } from "./DashboardMain.styles";

const DashboardMain = () => {
  return (
    <Main>
      <MainContent>
        <Outlet />
      </MainContent>
    </Main>
  );
};

export default DashboardMain;
