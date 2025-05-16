import React from "react";
import { StarFill, Star, StarHalf } from "react-bootstrap-icons";  // <-- Added Star and StarHalf imports
import { Swiper, SwiperSlide } from "swiper/react";

import quote from "../../assets/img/testimonial/quote.png";
import man1 from "../../assets/img/testimonial/man1.png";
import man2 from "../../assets/img/testimonial/man2.jpg";
import man3 from "../../assets/img/testimonial/man3.png";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const reviewList = [
  {
    id: 1,
    name: "Ilyas T.",
    position: "Business Owner",
    review: `Top-notch Problem Solver! Ali's communication and work ethic stood out. He tackled unforeseen issues proactively and went the extra mile to ensure success!`,
    rating: 5,  
  },
  {
    id: 2,
    name: "Jacob H.",
    position: "Business Owner",
    review: `Reliable React Native Savior! Ali swiftly fixed critical bugs in our app and continued to impress. His unwavering support and exceptional problem-solving make him invaluable`,
    rating: 4.5, 
  },
  {
    id: 3,
    name: "Yen Y.",
    position: "Business Owner",
    review: `Detail-Oriented React Native Pro! Ali joined our React Native team and immediately showcased exceptional attention to detail. With strong development and debugging skills, Ali tackled UI, API implementation, and even the trickiest bugs with ease. His communication and teamwork skills were outstanding, making him an asset to any project. Looking forward to continued collaboration!`,
    rating: 4, 
  },
];

const Testimonial = () => {
  // Function to render stars dynamically based on rating number
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<StarFill key={i} className="ratting fz-20" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<StarHalf key={i} className="ratting fz-20" />);
      } else {
        stars.push(<Star key={i} className="ratting fz-20" />);
      }
    }
    return stars;
  };

  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
            Testimonial
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
            Happy Words From Happy
            <span className="d-block"> Customers </span>
          </h2>
        </div>
        <div
          className="testimonial__v1wrap pb-120"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="swiper testimonial__slidewrap">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 2000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {reviewList.map(({ id, name, position, review, rating }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className="test__slide swiper-slide">
                          <div className="d-flex mb-40 align-items-center gap-2">
                            {renderStars(rating)}
                          </div>
                          <p>{review}</p>
                          <h4 className="base mb-2">{name}</h4>
                          <span className="fz-18 ptext">{position} </span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
          <div className="quote">
            <img src={quote} alt="img" />
          </div>
          <div className="man1">
            <img src={man1} alt="img" />
          </div>
          <div className="man2">
            <img src={man3} alt="img" />
          </div>
          <div className="man3 image-arch">
            <img src={man2} alt="img" />
          </div>
          <div className="test__shape">
            <img src={testiArrow} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

