import SharedLayout from "components/SharedLayout/SharedLayout";
import { Main, SigninPage, SignupPage } from "pages";
import HomePage from "pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/welcome" element={<Main />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
