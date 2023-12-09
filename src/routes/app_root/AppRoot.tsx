// 3rd party imports
import { Outlet } from "react-router-dom";
// components
import MainNavigation from "../../components/main_navigation/MainNavigation";
import { useDetectScroll } from "../../hooks/detect_scroll";

const AppRoot = () => {

  const { scrollDirection } = useDetectScroll();

  console.log(scrollDirection)

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
