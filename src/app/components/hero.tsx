'use client';

import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import code from "../../../public/icon/Code.svg"
import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiJavascript, } from "react-icons/si";


export function Hero () {
    return (
        <section
            className="
                bg-[url('/Background_Intro.png')]
                bg-no-repeat
                bg-top sm:bg-center
                sm:bg-cover bg-contain
                flex flex-col items-center justify-center 
                min-h-screen text-center 
                px-6 sm:px-10 md:px-20 lg:px-[163px] 
                py-16 sm:py-20 md:py-24 lg:py-[120px] 
                pb-20 sm:pb-24 md:pb-28 lg:pb-[183px] 
            "
        >
            <div className="text-white max-w-[1040px] mx-auto">
                <div className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
                <div className="max-w-[680px] mx-auto flex flex-col items-center">
                    <div className="relative rounded-full border-2 border-[#e3646e] mb-3">
                    <Avatar className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] relative border-2 border-[#000]">
                        <AvatarImage src="https://github.com/joao-tambue.png" />
                        <AvatarFallback>JT</AvatarFallback>
                    </Avatar>
                    <Image
                        src={code}
                        alt="icon"
                        className="absolute rounded-full translate-x-[50px] sm:translate-x-[70px] translate-y-[-20px] sm:translate-y-[-28px] w-6 h-6 sm:w-auto sm:h-auto"
                    />
                    </div>

                    <p style={typography.subtitle}>
                    Hello Word ! My name is{" "}
                    <span className="text-[#e3646e]">João Tambue</span> i'm
                    </p>

                    <h1 style={typography.titleLg} className="py-2 text-xl sm:text-3xl md:text-4xl">
                    Front-End & Mobile
                    </h1>

                    <p
                    style={typography.textSm}
                    className="text-gray-500 text-sm sm:text-base leading-relaxed px-2 sm:px-0"
                    >
                    Transformo necessidades em aplicações reais, evolventes e funcionais.
                    Desenvolvo sistemas através da minha paixão pela tecnologia,
                    contribuindo com soluções inovadoras e eficazes para desafios
                    complexos.
                    </p>
                </div>

                <div className="mx-auto mt-10 sm:mt-[80px]">
                    <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <FaReact className="text-[#61DAFB]" /> React.js
                    </li>
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <SiNextdotjs className="text-[#000]" /> Next.js
                    </li>
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <FaNodeJs className="text-[#8CC84B]" /> Node.js
                    </li>
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <SiExpress className="text-[#000]" /> Express.js
                    </li>
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <SiJavascript className="text-[#F7DF1E]" /> JavaScript
                    </li>
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <SiTypescript className="text-[#007ACC]" /> TypeScript
                    </li>
                    <li
                        style={typography.textSm}
                        className="bg-[#292C34] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                    >
                        <FaReact className="text-[#61DAFB]" /> React Native
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2">
                <CaretDoubleDownIcon size={28} className="sm:size-8 text-white animate-bounce" />
            </div>
        </section>

    )
}