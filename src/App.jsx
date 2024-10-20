import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Resources from "./Pages/Resources";
import Service from "./Pages/Service";
import Blogs from "./Pages/Blogs";
import Career from "./Pages/Career";
import ContactUs from "./Pages/ContactUs";
import CaseStudies from "./Pages/CaseStudiesPage";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/caseStudies" element={<CaseStudies />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
