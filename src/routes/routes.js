// src/routes.js
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  AboutPage,
  ContactMePage,
  ExperiencePage,
  HomePage,
  ProjectPage,
  SelfPage,
} from "../pages";

const RouteConfig = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Naman Ajmera";

    switch (path) {
      case "/":
        title = "Hello | Naman Ajmera";
        break;
      case "/experience":
        title = "Experiences | Naman Ajmera";
        break;
      case "/project":
        title = "Projects | Naman Ajmera";
        break;
      case "/about":
        title = "About | Naman Ajmera";
        break;
      case "/contact":
        title = "Contact Me | Naman Ajmera";
        break;
      case "/namanAjmera":
        title = "Naman Ajmera | Portfolio";
        break;
      default:
        title = "Naman Ajmera";
    }

    document.title = title;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactMePage />} />
      <Route path="/namanAjmera" element={<SelfPage />} />
    </Routes>
  );
};

export default RouteConfig;
