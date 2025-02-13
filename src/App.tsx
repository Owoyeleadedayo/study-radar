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
import PrivacyPolicy from "./components/PrivacyPolicy";
import FutureOfLearning from "./components/FutureOfLearning";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/termsandcon"
          element={
            <>
              <TermsAndCon />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <PrivacyPolicy />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <WhyChooseUs />
              <FutureOfLearning />
              <Pricing />
              <GetStarted />
              <Faqs />
            </>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
