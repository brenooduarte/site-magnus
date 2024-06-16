import "./styles.scss";
import Card from "../TestimonialCard/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const CARDS = 10;

const TestimonialSlide = ({
  linksSocialMedia,
  customerPhotos,
  customerNames,
  customerCompanies,
  customerTestimonials,
  customerBrands,
}) => {
  return (
    <div className="testimonial-slide">
      {window.innerWidth < 870 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          speed={1200}
          loop={true}
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
                linkSocialMedia={linksSocialMedia[index]}
                photo={customerPhotos[index]}
                name={customerNames[index]}
                company={customerCompanies[index]}
                testimonial={customerTestimonials[index]}
                brand={customerBrands[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          speed={1200}
          loop={true}
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
                linkSocialMedia={linksSocialMedia[index]}
                photo={customerPhotos[index]}
                name={customerNames[index]}
                company={customerCompanies[index]}
                testimonial={customerTestimonials[index]}
                brand={customerBrands[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default TestimonialSlide;
