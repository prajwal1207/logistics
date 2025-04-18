// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import OurGrothPage from "../pages/OurGroth";
import CoreTeamPage from "../pages/CoreTeam";
import VissionMission from "@/pages/VissionMission";
import OurPilotsPage from "@/pages/OurPilots";
import FTLPage from "@/pages/FTL";
import PTLPage from "@/pages/PTL";
import ThreePL from "@/pages/3PL";
import WarehousePage from "@/pages/Warehouse";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/our-growth-story" element={<OurGrothPage />} />
        <Route path="/core-team" element={<CoreTeamPage />} />
        <Route path="/vision-mission-values" element={<VissionMission />} />
        <Route path="/our-pilots" element={<OurPilotsPage />} />
        <Route path="/express-ftl" element={<FTLPage />} />
        <Route path="/express-ptl" element={<PTLPage />} />
        <Route path="/3pl" element={<ThreePL />} />
        <Route path="/warehouse" element={<WarehousePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
