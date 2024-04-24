import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { ActiveContext } from "./Context/context";
import Main from "./components/Main/Main";

function App() {
  const [isActive, setIsactive] = useState(false);
  return (
    <>
      <ActiveContext.Provider
        value={{ isActive: isActive, setIsactive: setIsactive }}
      >
        <Header />
        <Navbar />
      </ActiveContext.Provider>
      <Main />
    </>
  );
}

export default App;
