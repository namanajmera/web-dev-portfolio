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
      </div>
    </div>
  );
}

export default App;
