import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./main-pages/HomePage";
import BrowserPage from "./pages/browser";
import DesktopPage from "./pages/Desktop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/browser" element={<BrowserPage />} />
      <Route path="/desktop" element={<DesktopPage />} />
    </Routes>
  );
};

export default AppRoutes;
