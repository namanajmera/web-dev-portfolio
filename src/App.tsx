import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./styles/common.scss";
import Navbar from "./components/Navbar/Navbar";
import {
  AboutPage,
  ContactMePage,
  HomePage,
  ProjectPage,
  SelfPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/namanAjmera" element={<SelfPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
