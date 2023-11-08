// 3rd party imports
import { Outlet } from "react-router-dom";
// components
import MainNavigation from "../../components/main_navigation/MainNavigation";

const AppRoot = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppRoot;
