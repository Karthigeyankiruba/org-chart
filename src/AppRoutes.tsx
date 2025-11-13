import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./layout";
import App from "./App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
