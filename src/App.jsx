import Header from "./sharedComponents/Headerlayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home2.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs2.jsx";
import Footer from "./sharedComponents/Footer.jsx";
import Services from "./pages/Services.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/ourservices" element={<Services />} />
        </Routes>
        {/* <div style={{bottom : "-20px"}}> */}
        <Footer />

        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
