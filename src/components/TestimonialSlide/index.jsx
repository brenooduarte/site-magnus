import "./styles.scss";
import Card from "../TestimonialCard/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/autoplay";

const CARDS = 10;

const TestimonialSlide = ({
  customerPhotos,
  customerNames,
  customerCompanies,
  customerTestimonials,
  customerBrands,
}) => {
  const cardList = (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      speed={1200}
      navigation={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      {Array.from({ length: CARDS }, (_, index) => (
        <SwiperSlide key={index}>
          <Card
            key={index}
            photo={customerPhotos[index]}
            name={customerNames[index]}
            company={customerCompanies[index]}
            testimonial={customerTestimonials[index]}
            brand={customerBrands[index]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return <div className="testimonial-slide">{cardList}</div>;
};

export default TestimonialSlide;
