import "./styles.scss";
import Card from "../TestimonialCard/index.jsx";

const CARDS = 3;

const TestimonialSlide = ({
  customerPhotos,
  customerNames,
  customerCompanies,
  customerTestimonials,
  customerBrands,
}) => {
  const cardList = Array.from({ length: CARDS }, (_, index) => (
    <Card
      key={index}
      photo={customerPhotos[index]}
      name={customerNames[index]}
      company={customerCompanies[index]}
      testimonial={customerTestimonials[index]}
      brand={customerBrands[index]}
    />
  ));

  return <div className="testimonial-slide">{cardList}</div>;
};

export default TestimonialSlide;
