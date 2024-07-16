import React from "react";
import { BrowserRouter as Router, Routes, Route,useLocation} from "react-router-dom";
import HomePage from "../pages/HomePage";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ColorModeContext, useMode } from "./theme";

import PersonalDetail from "../pages/personalDetail";
import EducationDetails from "../pages/educationDetails";
import EmploymentDetails from "../pages/employeeDetail";
import FormContainer from "../components/form/formContainer";
import MainPage from "../pages/MainPage";


const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/main/");

  return (
    <div className="app">
      {!hideSidebar && <Sidebar />}
      <main className="content">
        <Topbar />
        {children}
      </main>
    </div>
  );
};


const RouterModule = () => {
  const [theme, colorMode] = useMode();
  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout>
            <Routes>
              <Route path="/main/:firstName" element={<MainPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/personal" element={<PersonalDetail />} />
              <Route path="/education" element={<EducationDetails />} />
              <Route path="/skills" element={<PersonalDetail />} />
              <Route path="/employee" element={<EmploymentDetails />} />
              <Route path="/reviews" element={<FormContainer />} />
            </Routes>
          </AppLayout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
};
export default RouterModule;
