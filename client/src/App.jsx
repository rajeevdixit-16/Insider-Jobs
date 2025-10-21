import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Applyjobs from "./pages/Applyjobs.jsx";
import Applications from "./pages/Applications.jsx";
import RecruiterLogin from "./components/RecruiterLogin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddJob from "./pages/AddJob.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import 'quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const { showRecruiterLogin ,companyToken } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />} >
          {companyToken ? <>
            <Route path='add-job' element={<AddJob />} />
            <Route path='manage-job' element={<ManageJobs />} />
            <Route path='view-applications' element={<ViewApplications />} />
          
          </> : null }
        </Route>
      </Routes>
    </div>
  );
};

export default App;

