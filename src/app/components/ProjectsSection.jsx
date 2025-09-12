"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Adani OneApp",
    description: "An all-in-one travel super app integrating flights, hotels, duty-free shopping, and loyalty rewards.",
    image: "/images/projects/adani.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://www.adanione.com/",
  },
  {
    id: 2,
    title: "SpendAble",
    description: "Australia’s leading assistive fintech app enabling safe and independent money management for people with disabilities.",
    image: "/images/projects/spendAble.png",
    tag: ["All", "Backend", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://www.spendable.com.au/",
  },
  {
    id: 3,
    title: "Ambaram.ai",
    description: "AI-powered B2B SaaS platform transforming collaboration in the fashion & textile industry.",
    image: "/images/projects/ambaram.png",
    tag: ["All", "Backend", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://app.ambaram.ai/",
  },
  {
    id: 4,
    title: "MindTalks",
    description: "A digital-first mental wellness platform offering online & in-person therapy sessions.",
    image: "/images/projects/mindTalks.png",
    tag: ["All", "Backend", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://mindtalks.in/",
  },
  // {
  //   id: 5,
  //   title: "Changer Backend",
  //   description: "Changer backend includes modules for WebSocket, Algolia Search, OpenAI, NLP for text generation, MongoDB, Swagger, AWS Cognito, S3 Bucket, and AWS MediaConvert job handling",
  //   image: "/images/projects/changerBackend.png",
  //   tag: ["All", "Backend"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
    title: "Ravel",
    description: "Create your Ravel account to explore churches, set up your merchant profile, offer services, chat with clients, and receive real-time notifications from customers or friends",
    image: "/images/projects/ravel.png",
    tag: ["All", "Backend", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://personal.ravel.faith",
  },
  {
  id: 6,
  title: "WongaaFX",
  description: "A modern trading platform offering access to Forex, commodities, crypto, and CFDs, powered by advanced tools like MT5, economic calendar, and heatmap analysis—all backed by dynamic leverage and a streamlined trading experience.",
  image: "/images/projects/wongaaFX.png", // make sure to add the relevant image
  tag: ["All", "Web", "Frontend"],
  gitUrl: "/", // add the actual repo URL if you have one
  previewUrl: "https://wongaafx.com/"
}
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      {/* <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12"> */}
      <ul ref={ref} className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
