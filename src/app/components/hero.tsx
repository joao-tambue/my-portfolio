'use client';

import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import profile  from "../../../public/Joao.jpg";
import code from "../../../public/icon/Code.svg"
import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiJavascript, } from "react-icons/si";


export function Hero () {
    return (
        <section className="bg-[url('/Background_Intro.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center h-screen text-center px-[163px] py-[120px] pb-[183px]" >
            <div className="text-white max-w-[1040px] mx-auto">
                <div className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
                    <div className="max-w-[680px] mx-auto flex flex-col items-center">
                        <div className="rounded-full border-2 border-[#e3646e] mb-3">
                            <Image 
                                src={profile} 
                                alt="João Tambue" 
                                width={100} 
                                height={100} 
                                className="rounded-full border-2 border-[#000]"
                            />
                            <Image 
                                src={code} 
                                alt="icon"
                                className="absolute rounded-full translate-x-[70px] translate-y-[-28px]"
                            />
                        </div>
                        <p style={typography.subtitle} >Hello Word ! My name is <span className="text-[#e3646e]">João Tambue</span> i'm</p>
                        <h1 style={typography.titleLg} className="py-[8px]">Front-End & Mobile </h1>
                        <p style={typography.textSm} className="text-gray-500" >Transformo necessidades em aplicações reais, evolventes e 
                            funcionais. Desenvolvo sistemas através da <br /> minha paixão 
                            pela tecnologia, contribuindo com soluções inovadoras e 
                            eficazes para desafios complexos.
                        </p>
                    </div>
                    <div className="mx-auto mt-[80px]">
                        <ul className="flex flex-wrap justify-center gap-4">
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <FaReact className="text-[#61DAFB]" /> React.js
                            </li>
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <SiNextdotjs className="text-[#000]" /> Next.js
                            </li>
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <FaNodeJs className="text-[#8CC84B]" /> Node.js
                            </li>
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <SiExpress className="text-[#000]" /> Express.js
                            </li>
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <SiJavascript className="text-[#F7DF1E]" /> JavaScript
                            </li>
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <SiTypescript className="text-[#007ACC]" /> TypeScript
                            </li>
                            <li style={typography.textSm} className="bg-[#292C34] text-white px-6 py-3 rounded-full flex items-center gap-2">
                                <FaReact className="text-[#61DAFB]" /> React Native
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <CaretDoubleDownIcon size={32} weight="bold" className="text-white animate-bounce" />
            </div>
            
        </section>
    )
}