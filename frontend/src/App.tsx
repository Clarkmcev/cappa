import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Paintings from "./components/Paintings";
import {
  ROUTE_PAINTINGS,
  ROUTE_CONTACT,
  ROUTE_EVENTS,
  ROUTE_BIO,
} from "./constants";
import SideBar from "./components/Navigation/SideBar";
import Events from "./components/Events";
import About from "./components/About/Content";
import PaintingsViewer from "./components/Paintings/PaintingsViewer";
import Background from "./components/Background";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <div className="flex h-screen z-50">
          <SideBar />
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to={ROUTE_PAINTINGS} />} />
              <Route path={ROUTE_PAINTINGS} element={<Paintings />} />
              <Route
                path={`${ROUTE_PAINTINGS}/:id`}
                element={<PaintingsViewer />}
              />
              <Route path={ROUTE_EVENTS} element={<Events />} />
              <Route path={ROUTE_BIO} element={<About />} />
              <Route path={ROUTE_CONTACT} element={<Contact />} />
            </Routes>
            <Toaster />
            <Background />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
