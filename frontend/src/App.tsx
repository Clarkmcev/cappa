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
import SideBar from "./components/SideBar";
import Events from "./components/Events";
import Projects from "./components/Projects";
import Content from "./components/Content";
import Carousel from "./components/Carousel";

// To be fed
function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <div className="flex h-screen">
          <SideBar />
          <div className="flex-grow ml-64 bg-primary/20">
            <Routes>
              <Route path={"/"} element={<Paintings />} />
              <Route path={ROUTE_PAINTINGS} element={<Paintings />} />
              <Route path={`${ROUTE_PAINTINGS}/:id`} element={<Carousel />} />
              <Route path={ROUTE_EVENTS} element={<Events />} />
              <Route path={ROUTE_PROJECTS} element={<Projects />} />
              <Route path={ROUTE_BIO} element={<Content />} />
              <Route path={ROUTE_CONTACT} element={<Content />} />
              <Route path={ROUTE_CONTACT} element={<Carousel />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
