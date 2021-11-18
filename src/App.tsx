import "./App.css";
import Homepage from "./components/pages/Homepage/Homepage";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import AboutPage from "./components/pages/About/AboutPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import Portfolio from "./components/pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
