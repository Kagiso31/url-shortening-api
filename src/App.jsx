import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import ShortenLinkSection from "./components/ShortenLinkSection";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Hero />
      </div>
      <ShortenLinkSection />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
