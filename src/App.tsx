import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Paintings from "./components/Paintings";
import { ROUTE_PAINTINGS, ROUTE_CONTACT, ROUTE_ABOUT } from "./constants";
import Contact from "./components/Contact";
import About from "./components/About";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-full bg-primary">
      <BrowserRouter>
        <SideBar />
        <div className="pl-48">
          <Routes>
            <Route path={"/"} element={<Layout />} />
            <Route path={ROUTE_PAINTINGS} element={<Paintings />} />
            <Route path={ROUTE_CONTACT} element={<Contact />} />
            <Route path={ROUTE_ABOUT} element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
