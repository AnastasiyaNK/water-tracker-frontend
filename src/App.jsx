import { Header } from "components";
import { Home, Main, SigninPage, SignupPage } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header />
      <Main />
      <Home /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/welcome" element={<Main />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
