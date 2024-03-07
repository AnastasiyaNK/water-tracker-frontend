import { PrivateRoute, RestrictedRoute, SharedLayout } from "components";
import { ROUTE_PATH } from "constants/routes";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { usersCurrentThunk } from "./redux/user/userSlice";
import Loader from "components/Loader/Loader";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const SignInPage = lazy(() => import("pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("pages/SignUpPage/SignUpPage"));
const NewPassPage = lazy(() => import("pages/NewPassPage/NewPassPage"));
const ForgotPassPage = lazy(() =>
  import("pages/ForgotPassPage/ForgotPassPage")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersCurrentThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_PATH.index} element={<SharedLayout />}>
          <Route index element={<Navigate to={ROUTE_PATH.welcome} replace />} />
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
            path={ROUTE_PATH.forgotpassword}
            element={
              <RestrictedRoute>
                <ForgotPassPage />
              </RestrictedRoute>
            }
          />

          <Route
            path={ROUTE_PATH.newpassword}
            element={
              <RestrictedRoute>
                <NewPassPage />
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
          <Route path="*" element={<Navigate to={ROUTE_PATH.index} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
