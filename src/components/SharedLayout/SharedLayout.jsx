import { Header, Loader } from "components";
import { useSelector } from "react-redux";
import { selectUserIsLoading } from "../../redux/user/userSelectors";
import { selectWaterIsLoading } from "../../redux/water/waterSelectors";
import { Outlet } from "react-router-dom";
import { StyledMain } from "./SharedLayot.styled";

const SharedLayout = () => {
  const isLoadingUser = useSelector(selectUserIsLoading);
  const isLoadingWater = useSelector(selectWaterIsLoading);

  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      {isLoadingUser || isLoadingWater ? <Loader /> : null}
    </>
  );
};

export default SharedLayout;
