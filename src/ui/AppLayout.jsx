import { Outlet } from "react-router-dom";
import { useStar } from "../contexts/starContext";

import Siderbar from "./Siderbar";
import Header from "./Header";
import Main from "./Main";
import ResponSiderbar from "./ResponSiderbar";

function AppLayout() {
  const { displaySidebar } = useStar();
  
  return (
    <div
      className={`md:h-screen md:grid ${
        displaySidebar ? "md:grid-cols-[2rem,1fr]" : "md:grid-cols-[26rem,1fr]"
      } grid-rows-[auto,1fr]`}
    >
      {displaySidebar ? <ResponSiderbar /> : <Siderbar />}
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
