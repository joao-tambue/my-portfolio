'use client';

import { typography } from "@/fonts/fonts";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiJavascript, } from "react-icons/si";

export function Skills() {
  const skills = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <FaNodeJs className="text-[#8CC84B]" />, name: "Node.js" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <SiExpress className="text-[#000000]" />, name: "Express.js" },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React Native" },
  ];

  return (
    <div className="mx-auto mt-4 sm:mt-[80px]">
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
