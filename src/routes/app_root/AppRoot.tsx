// 3rd party imports
import { Outlet } from "react-router-dom";
// components
import MainNavigation from "../../components/main_navigation/MainNavigation";
import Footer from "../../components/footer/Footer";

const AppRoot = () => {

  return (
    <div>
      <MainNavigation />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppRoot;
