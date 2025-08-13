'use client';

import { typography } from "@/fonts/fonts";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { DiPostgresql } from "react-icons/di";
import { FaAngular, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiJavascript, SiNestjs, SiFastify, SiAlpinedotjs, SiElectron, SiExpo, SiPrisma, SiSupabase, SiStyledcomponents, SiDotnet, SiBlazor, } from "react-icons/si";
import { TbBrandXamarin } from "react-icons/tb";

export function Skills() {
  const skills = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <FaAngular className="text-red-400" />, name: "Angular.js" },
    { icon: <FaNodeJs className="text-[#8CC84B]" />, name: "Node.js" },
    { icon: <SiExpress className="text-[#000000]" />, name: "Express.js" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React Native" },
    { icon: <SiExpo className="text-black" />, name: "Expo Go" },
  ];

  return (
    <div className="mx-auto mt-4 sm:mt-[60px]">
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            style={typography.textSm}
            className="bg-[#292C34] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
