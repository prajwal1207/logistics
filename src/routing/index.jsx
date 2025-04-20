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
import AutomotivePage from "@/pages/Services/Automotive";
import ItPage from "@/pages/Services/IT";
import ReatailPage from "@/pages/Services/Reatil";
import HealthCarePage from "@/pages/Services/Healthcare";
import BooksPage from "@/pages/Services/Books";
import FMCGPage from "@/pages/Services/Fmcg";
import ContactUs from "@/pages/ContactUs";
import PrivacyPage from "@/pages/Privacy";
import TermsAndCondition from "@/pages/Terms";

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
        <Route path="/automotive-engineering" element={<AutomotivePage />} />
        <Route path="/it-consumer-electronics" element={<ItPage />} />
        <Route path="/retail-fashion" element={<ReatailPage />} />
        <Route
          path="/healthcare-pharmaceuticals"
          element={<HealthCarePage />}
        />
        <Route path="/books-publishing" element={<BooksPage />} />
        <Route path="/fmcg" element={<FMCGPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
