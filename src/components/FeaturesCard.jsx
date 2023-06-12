const FeaturesCard = ({ icon_src, heading, body }) => {
  return (
    <div className="features-card">
      <img className="features-card-icon" src={icon_src} alt="icon" />
      <h3 className="features-card-heading">{heading}</h3>
      <p className="features-card-body">{body}</p>
    </div>
  );
};

export default FeaturesCard;
