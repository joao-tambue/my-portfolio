import Image from "next/image";
import React from "react";
import { ImGithub } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";


interface ProjectCardProps {
    title: string;
    description: string;
    mediaType: "image" | "video";
    mediaSrc: string;
    borderColor?: string;
    technologies: string[];
    projectUrl: string;
    githubUrl: string;
}

export default function ProjectCard({
    title,
    description,
    mediaType,
    mediaSrc,
    borderColor = "#3498DB",
    technologies,
    projectUrl,
    githubUrl,
}: ProjectCardProps) {
  return (
    <div
      className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg flex flex-col px-2 py-2"
      
    >
      <div className="w-full h-48 relative rounded-xl overflow-hidden "
        style={{ border: `2px solid ${borderColor || "#3498DB"}` }}
      >
        {mediaType === "image" ? (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={mediaSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        )}
      </div>

      <div className="p-4 text-white text-left">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#292C34] text-gray-300 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-3 gap-1.5 items-center text-center text-black bg-white hover:bg-[#f0f0f0] transition-colors py-2 rounded-lg text-sm font-medium"
          >
            <MdOutlineArrowOutward />
            <p>Ver projeto</p>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-3 gap-1.5 items-center text-center text-white bg-[#333] hover:bg-[#444] transition-colors py-2 rounded-lg text-sm font-medium"
          >
            <ImGithub />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}