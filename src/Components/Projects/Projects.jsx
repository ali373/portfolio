import React, { useState } from "react";

import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <section className="project__section pt-0 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Look at my portfolio and give me your feedback"}
          sortTitle={"Featured Projects"}
        />

        <div className={`project__wrapone`}>
          {projectList.map(({ heading, id, image, subHeading }, index) => (
            <ProjectCard
              key={id}
              image={image}
              heading={heading}
              subHeading={subHeading}
              openLightbox={openLightbox}
              index={index}
              navigate="/protfolio"
            />
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};

export default Projects;
