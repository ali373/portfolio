import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";
const processList = [
  {
    id: 1,
    title: "Concept",
    info: "Start with a clear idea and strategy focused on solving real user problems.         ",
    list: [
      "Analyzing business goals and user needs",
      "Studying competitors and market trends",
      "Creating a detailed roadmap and features list",
    ],
  },
  {
    id: 2,
    title: "Design",
    info: "Create clean and intuitive UI/UX designs that improve user satisfaction and flow.   ",
    list: [
      "Designing wireframes and interactive prototypes",
      "Choosing UI elements, fonts, and color palettes",
      "Refining designs for clarity and usability",
    ],
  },
  {
    id: 3,
    title: "Development",
    info: "Write efficient, maintainable code to build high-performing Android and iOS apps.   ",
    list: [
      "Developing apps for both Android and iOS platforms",
      "Integrating APIs, offline support, and security",
      "Conducting thorough testing and fixing bugs",
    ],
  },
  {
    id: 4,
    title: "Launch",
    info: "Handle the release process, user onboarding, and updates to ensure product success. ",
    list: [
      "Submitting apps to Play Store and App Store",
      "Gathering feedback through beta testing",
      "Monitoring performance and providing updates",
    ],
  },
];


const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Your Dream App In Just Few Steps"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
