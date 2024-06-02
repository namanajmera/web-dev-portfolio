import "./App.scss";
import "./styles/common.scss";
import { Navbar } from "./components";
import RouteConfig from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-app-container">
        <RouteConfig />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/namanAjmera" element={<SelfPage />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
