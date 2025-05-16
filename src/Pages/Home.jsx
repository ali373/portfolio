import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Metting from "../Components/Metting/Metting";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial/Testimonial";
import Preloader from "../Components/Shared/Preloader/Preloader";

const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {isFetching && <Preloader />}
      <About />
      <Projects />
      <Metting />
      <Testimonial />
      <WorkeProcess />
      <ScrollRestoration/>
    </>
  );
};

export default Home;
