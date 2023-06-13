import illustrationImg from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src={illustrationImg}
        alt="illustration image"
      />
      <div className="hero-text">
        <h1 className="hero-heading">More than just shorter links</h1>
        <p className="hero-copy">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn btn-hero">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
