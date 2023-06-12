import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="features-heading">Advanced Statistics</h2>
        <p className="features-copy">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="features-cards-container">
          <FeaturesCard
            icon_src="src/images/icon-brand-recognition.svg"
            heading="Brand Recognition"
            body="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <FeaturesCard
            icon_src="src/images/icon-detailed-records.svg"
            heading="Detailed Records"
            body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <FeaturesCard
            icon_src="src/images/icon-fully-customizable.svg"
            heading="Fully Customizable"
            body="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
