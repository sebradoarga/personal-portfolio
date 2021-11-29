import "./App.css";
import { useState } from "react";
import Homepage from "./components/pages/Homepage/Homepage";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import AboutPage from "./components/pages/About/AboutPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import CountryTrivia from "./components/pages/CountryTrivia/CountryTrivia";
import BookStore from "./components/pages/BookStore/BookStore";
import PortfolioProject from "./components/pages/PortfolioProject/PortfolioProject";

function App() {
  const [previousPage, setPreviousPage] = useState<string>("");

  return (
    <div className="App">
      <AnimatePresence>
        <Routes>
          <Route
            path="/about"
            element={<AboutPage setPreviousPage={setPreviousPage} />}
          />
          <Route
            path="/contact"
            element={<ContactPage setPreviousPage={setPreviousPage} />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio setPreviousPage={setPreviousPage} />}
          />
          <Route path="/country-trivia" element={<CountryTrivia />} />
          <Route path="/the-story-store" element={<BookStore />} />
          <Route path="/portfolio-project" element={<PortfolioProject />} />
          <Route path="/" element={<Homepage previousPage={previousPage} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
