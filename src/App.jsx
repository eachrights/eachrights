import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import HowWeWork from "./pages/HowWeWork";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Opportunities from "./pages/Opportunities";
import Donors from "./pages/Donors";
import Contact from "./pages/Contact";

// Who We Are
import OurStory from "./pages/whoweare/OurStory";
import OurTeam from "./pages/whoweare/OurTeam";

// What We Do (file: src/pages/whatwedo.jsx)
import WhatWeDo from "./pages/whatwedo";

// Resources
import Publications from "./pages/resources/publications";
import Portals from "./pages/resources/portals";

// Programmes
import EducationJustice from "./pages/programmes/EducationJustice";
import GenderJustice from "./pages/programmes/GenderJustice";
import HealthJustice from "./pages/programmes/HealthJustice";
import EnvironmentalClimateJustice from "./pages/programmes/EnvironmentalClimateJustice";
import EconomicJustice from "./pages/programmes/EconomicJustice";
import TheoryOfChange from "./pages/programmes/TheoryOfChange";
import InstitutionalGrowthSustainability from "./pages/programmes/InstitutionalGrowthSustainability";

// Processes
import UniversalPeriodicReview from "./pages/processes/UniversalPeriodicReview";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/contact" element={<Contact />} />

        {/* Who We Are */}
        <Route path="/who-we-are/our-story" element={<OurStory />} />
        <Route path="/who-we-are/team" element={<OurTeam />} />

        {/* What We Do */}
        <Route path="/what-we-do" element={<WhatWeDo />} />

        {/* Resources */}
        <Route path="/resources/publications" element={<Publications />} />
        <Route path="/resources/portals" element={<Portals />} />

        {/* Programmes */}
        <Route
          path="/programmes/education-justice"
          element={<EducationJustice />}
        />
        <Route
          path="/programmes/gender-justice"
          element={<GenderJustice />}
        />
        <Route
          path="/programmes/health-justice"
          element={<HealthJustice />}
        />
        <Route
          path="/programmes/environmental-climate-justice"
          element={<EnvironmentalClimateJustice />}
        />
        <Route
          path="/programmes/economic-justice"
          element={<EconomicJustice />}
        />
        <Route
          path="/programmes/theory-of-change"
          element={<TheoryOfChange />}
        />
        <Route
          path="/programmes/institutional-growth-sustainability"
          element={<InstitutionalGrowthSustainability />}
        />

        {/* Processes */}
        <Route
          path="/processes/universal-periodic-review"
          element={<UniversalPeriodicReview />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
