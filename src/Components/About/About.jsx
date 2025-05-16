import React, { useEffect, useState } from "react";
import sectionStar from "../../assets/img/about/section-star.png";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <div className="container">
          <div className="personal__head text-center">
            <img
              src={sectionStar}
              className="mb-30"
              alt="star"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <p className="descrp" data-aos="fade-up" data-aos-duration="1500">
            I’m Ali, I build high performance, scalable mobile apps that engage users and drive results. With a 100% job success rate and global client experience, I'm ready to take on any mobile app development challenge.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
