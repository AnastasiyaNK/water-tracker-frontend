import { PrivateRoute, RestrictedRoute, SharedLayout } from "components";
import { ROUTE_PATH } from "constants/routes";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { usersCurrentThunk } from "./redux/userSlice";
import { selectUserIsLoading } from "./redux/selectors";
import { selectWaterIsLoading } from "./redux/water/waterSlice.selectors";
import Loader from "components/Loader/Loader";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const SignInPage = lazy(() => import("pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage/SignUpPage"));

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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </SharedLayout>
      {isLoadingUser || isLoadingWater ? <Loader /> : null}
    </div>
  );
}

export default App;
