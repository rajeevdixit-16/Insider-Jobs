import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Applyjobs from "./pages/Applyjobs.jsx";
import Applications from "./pages/Applications.jsx";
import RecruiterLogin from "./components/RecruiterLogin.jsx";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";

const App = () => {

  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjobs />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;

