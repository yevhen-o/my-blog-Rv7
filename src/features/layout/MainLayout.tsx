import { Outlet } from "react-router";
import { Navigation } from "../../components/Navigation";
import "../../index.scss";

export function MainLayout() {
  return (
    <div>
      <Navigation />
      <div className="content__wrapper">
        <Outlet />
      </div>
    </div>
  );
}
