import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import ShortenLinkSection from "./components/ShortenLinkSection";

const App = () => {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Hero />
      </div>
      <ShortenLinkSection />
    </>
  );
};

export default App;
