import { PrivateRoute, RestrictedRoute, SharedLayout } from "components";
import { ROUTE_PATH } from "constants/routes";
import { HomePage, SignInPage, SignUpPage, WelcomePage } from "pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { usersCurrentThunk } from "./redux/userSlice";
import { selectUserIsLoading } from "./redux/selectors";
import { selectWaterIsLoading } from "./redux/water/waterSlice.selectors";
import Loader from "components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(selectUserIsLoading);
  const isLoadingWater = useSelector(selectWaterIsLoading);

  useEffect(() => {
    dispatch(usersCurrentThunk());
  }, [dispatch]);

  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route
            path={ROUTE_PATH.index}
            element={<Navigate to={ROUTE_PATH.welcome} replace />}
          />
          <Route
            path={ROUTE_PATH.welcome}
            element={
              <RestrictedRoute>
                <WelcomePage />
              </RestrictedRoute>
            }
          />

          <Route
            path={ROUTE_PATH.signup}
            element={
              <RestrictedRoute>
                <SignUpPage />
              </RestrictedRoute>
            }
          />
          <Route
            path={ROUTE_PATH.signin}
            element={
              <RestrictedRoute>
                <SignInPage />
              </RestrictedRoute>
            }
          />

          <Route
            path={ROUTE_PATH.home}
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </SharedLayout>
      {isLoadingUser || isLoadingWater ? <Loader /> : null}
    </div>
  );
}

export default App;
