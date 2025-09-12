"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (ES6+), TypeScript</li>
        <li>React.js, Next.js, Redux</li>
        <li>Node.js, Express.js, Loopback, Microservices</li>
        <li>MongoDB</li>
        <li>Payment Gateway Integration: Stripe, Razorpay</li>
        <li>Git, GitHub</li>
        <li>AWS (Hosting, Deployment, Cloud Services)</li>
        <li>Project Management: Jira, Basecamp, Trello</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Tech in Computer Science Engineering – Quest Group of Institutions,
          Mohali (2017 – 2021) | CGPA: 8.22
        </li>
        <li>
          12th (Science) – Govt. Senior Secondary Residential School, Mohali
          (2016 – 2017) | 69%
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>HackerRank JavaScript Certification</li>
        <li>HackerRank React Certification</li>
        <li>HackerRank SQL Certification</li>
        <li>HackerRank Problem-Solving Certification</li>
        <li>HackerRank 2 stars on Solve Algorithms</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack Developer with 4+ years of experience in designing,
            developing, and deploying scalable web applications. Skilled in both
            frontend and backend technologies, microservices, and cloud computing,
            I am passionate about solving complex problems, optimizing performance,
            and delivering high-quality user experiences. I am a quick learner, team
            player, and always eager to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
