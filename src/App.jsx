import SharedLayout from "components/SharedLayout/SharedLayout";
import { HomePage, Main, SignInPage } from "pages";
import SignUpPage from "pages/SignUnPage/SignUnPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/welcome" element={<Main />} />

          <Route path="/signip" element={<SignInPage />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
