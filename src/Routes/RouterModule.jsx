import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ColorModeContext, useMode } from "./theme";
import Form from "../components/form";
import PersonalDetail from "../pages/personalDetail";
import EducationDetails from "../pages/educationDetails";
import EmploymentDetails from "../pages/employeeDetail";
import FormContainer from "../components/form/formContainer";

const RouterModule = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/personal" element={<PersonalDetail />} />
              <Route path="/education" element={<EducationDetails />} />
              <Route path="/skills" element={<PersonalDetail />} />
              <Route path="/employee" element={<EmploymentDetails />} />
              <Route path="/reviews" element={<FormContainer />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default RouterModule;
