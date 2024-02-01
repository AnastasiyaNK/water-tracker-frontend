import SharedLayout from "components/SharedLayout/SharedLayout";
import { HomePage, Main, SignInPage, SignUpPage } from "pages";

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
