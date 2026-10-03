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
import NotFound from "./pages/NotFound";

// Who We Are
import OurStory from "./pages/whoweare/OurStory";
import OurTeam from "./pages/whoweare/OurTeam";

// What We Do
import WhatWeDo from "./pages/whatwedo";

// Resources
import Publications from "./pages/resources/publications";
import Portals from "./pages/resources/portals";
import UprAdvocacyTools from "./pages/resources/upr-advocacy-tools";

// UPR Advocacy Tools — Thematic Areas
import Education from "./pages/resources/education";
import Gender from "./pages/resources/gender";
import Health from "./pages/resources/health";
import Environment from "./pages/resources/environment";
import Economics from "./pages/resources/economics";

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

        {/* =====================================================
            MAIN PAGES
        ===================================================== */}
        <Route path="/" element={<Home />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/contact" element={<Contact />} />

        {/* =====================================================
            WHO WE ARE
        ===================================================== */}
        <Route
          path="/who-we-are/our-story"
          element={<OurStory />}
        />

        <Route
          path="/who-we-are/team"
          element={<OurTeam />}
        />

        {/* =====================================================
            WHAT WE DO
        ===================================================== */}
        <Route
          path="/what-we-do"
          element={<WhatWeDo />}
        />

        {/* =====================================================
            RESOURCES
        ===================================================== */}
        <Route
          path="/resources/publications"
          element={<Publications />}
        />

        <Route
          path="/resources/portals"
          element={<Portals />}
        />

        <Route
          path="/resources/upr-advocacy-tools"
          element={<UprAdvocacyTools />}
        />

        {/* =====================================================
            UPR ADVOCACY TOOLS — THEMATIC AREAS
        ===================================================== */}

        {/* Education */}
        <Route
          path="/resources/upr-advocacy-tools/education"
          element={<Education />}
        />

        {/* Gender */}
        <Route
          path="/resources/upr-advocacy-tools/gender"
          element={<Gender />}
        />

        {/* Health */}
        <Route
          path="/resources/upr-advocacy-tools/health"
          element={<Health />}
        />

        {/* Environment */}
        <Route
          path="/resources/upr-advocacy-tools/environment"
          element={<Environment />}
        />

        {/* Economics */}
        <Route
          path="/resources/upr-advocacy-tools/economics"
          element={<Economics />}
        />

        {/* =====================================================
            PROGRAMMES
        ===================================================== */}

        {/* Education Justice */}
        <Route
          path="/programmes/education-justice"
          element={<EducationJustice />}
        />

        {/* Gender Justice */}
        <Route
          path="/programmes/gender-justice"
          element={<GenderJustice />}
        />

        {/* Health Justice */}
        <Route
          path="/programmes/health-justice"
          element={<HealthJustice />}
        />

        {/* Environmental & Climate Justice */}
        <Route
          path="/programmes/environmental-climate-justice"
          element={<EnvironmentalClimateJustice />}
        />

        {/* Economic Justice */}
        <Route
          path="/programmes/economic-justice"
          element={<EconomicJustice />}
        />

        {/* Theory of Change */}
        <Route
          path="/programmes/theory-of-change"
          element={<TheoryOfChange />}
        />

        {/* Institutional Growth & Sustainability */}
        <Route
          path="/programmes/institutional-growth-sustainability"
          element={<InstitutionalGrowthSustainability />}
        />

        {/* =====================================================
            PROCESSES
        ===================================================== */}
        <Route
          path="/processes/universal-periodic-review"
          element={<UniversalPeriodicReview />}
        />

        {/* =====================================================
            404
        ===================================================== */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
