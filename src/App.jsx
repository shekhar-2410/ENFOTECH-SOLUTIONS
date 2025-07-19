// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import EmbeddedEngineering from "./pages/EmbeddedEngineering";
import FullTimeEquivalent from "./pages/FullTimeEquivalent";
import OffshoreDevelopment from "./pages/OffshoreDevelopment";
import TimeAndMaterial from "./pages/TimeAndMaterial";
import VerificationValidation from "./pages/VerificationValidation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="/services/embedded" element={<EmbeddedEngineering />} />
        <Route path="/engagement/fte" element={<FullTimeEquivalent />} />
        <Route path="/engagement/offshore" element={<OffshoreDevelopment />} />
        <Route path="/engagement/tm" element={<TimeAndMaterial />} />

        <Route
          path="/services/validation"
          element={<VerificationValidation />}
        />
      </Route>
    </Routes>
  );
}

export default App;
