import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ColorModeContext, useMode } from "./theme";

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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default RouterModule;
