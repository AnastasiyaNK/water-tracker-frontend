import { Header } from "components";
import { Home, Main } from "pages";
import { useState } from "react";

function App() {
  const [modalActive, SetModalActive] = useState(true);
  return (
    <div>
      <Header />
      <Home />
      <Main />
    </div>
  );
}

export default App;
