import "./styles.scss";

const TestimonialCard = ({
  linkSocialMedia,
  photo,
  name,
  company,
  testimonial,
  brand,
}) => {
  return (
    <div className="testimonial-card">
      <img className="customer-photo" src={photo} alt={`Foto de ${name}`} />

      <div>
        <h2>{name}</h2>
        <h3>{company}</h3>
      </div>

      <p>{testimonial}</p>
      <img
        onClick={() => window.open(linkSocialMedia, "_blank")}
        className="customer-brand"
        src={brand}
        alt={`Marca de ${name}`}
      />
    </div>
  );
};

export default TestimonialCard;
