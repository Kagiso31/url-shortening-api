import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import ShortenLinkSection from "./components/ShortenLinkSection";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Hero />
      </div>
      <ShortenLinkSection />
      <Features />
    </>
  );
};

export default App;
