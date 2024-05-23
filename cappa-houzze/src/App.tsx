import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Paintings from "./components/Paintings";
import { ROUTE_PAINTINGS, ROUTE_CONTACT, ROUTE_ABOUT } from "./constants";
import Contact from "./components/Contact";
import About from "./components/About";
import SideBar from "./components/SideBar";

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
              <Route path={ROUTE_CONTACT} element={<Contact />} />
              <Route path={ROUTE_ABOUT} element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
