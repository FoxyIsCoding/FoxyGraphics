import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Naše projekty
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="IconicStudio"
          description="Webová stránka pro československé Minecraft filmové studio. Design je zaměřen na moderní a unikátní stránku. Stránka byla vytvořena v Wordpressu."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="FoxyGraphics"
          description="Stránka pro naše služby. Moderní a elegantní design."
        />
      </div>
    </div>
  );
};

export default Projects;
