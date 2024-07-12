import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Paintings from "./components/Paintings";
import {
  ROUTE_PAINTINGS,
  ROUTE_CONTACT,
  ROUTE_EVENTS,
  ROUTE_PROJECTS,
  ROUTE_BIO,
} from "./constants";
import Contact from "./components/Contact";
import SideBar from "./components/SideBar";
import Events from "./components/Events";
import Projects from "./components/Projects";
import Bio from "./components/Bio";

// To be fed
function App() {
  return (
    <div className="h-full bg-primary">
      <BrowserRouter>
        <div className="flex h-screen bg-gray-100">
          <SideBar />
          <div className="flex-grow ml-64 bg-fourth">
            <Routes>
              <Route path={"/"} element={<Paintings />} />
              <Route path={ROUTE_PAINTINGS} element={<Paintings />} />
              <Route path={ROUTE_EVENTS} element={<Events />} />
              <Route path={ROUTE_PROJECTS} element={<Projects />} />
              <Route path={ROUTE_BIO} element={<Bio />} />
              <Route path={ROUTE_CONTACT} element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
