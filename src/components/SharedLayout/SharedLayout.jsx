import { Header, Loader } from "components";
import { useSelector } from "react-redux";
import { selectUserIsLoading } from "../../redux/user/userSelectors";
import { selectWaterIsLoading } from "../../redux/water/waterSelectors";
import { Outlet } from "react-router-dom";

const SharedLayout = ({ children }) => {
  const isLoadingUser = useSelector(selectUserIsLoading);
  const isLoadingWater = useSelector(selectWaterIsLoading);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {isLoadingUser || isLoadingWater ? <Loader /> : null}
    </>
  );
};

export default SharedLayout;
