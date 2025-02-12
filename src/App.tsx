import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Pricing from "./components/Pricing/Pricing";
import WhyChooseUs from "./components/WhyChooseUse/WhyChooseUs";
import TermsAndCon from "./components/TermsAndCon";

function App() {
  return (
    <BrowserRouter>
      {/* Always render the Header */}
      <Header />

      <Routes>
        {/* Route for Terms and Conditions, only show Header and Footer */}
        <Route
          path="/termsandcon"
          element={
            <>
              <TermsAndCon />
            </>
          }
        />

        {/* Default Route, Show other components */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <WhyChooseUs />
              <Pricing />
              <GetStarted />
              <Faqs />
            </>
          }
        />
      </Routes>

      {/* Always render the Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
