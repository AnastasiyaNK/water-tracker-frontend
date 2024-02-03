import { PrivateRoute, RestrictedRoute, SharedLayout } from "components";
import { ROUTE_PATH } from "constants/routes";
import { HomePage, SignInPage, SignUpPage, WelcomePage } from "pages";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
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
    </div>
  );
}

export default App;
