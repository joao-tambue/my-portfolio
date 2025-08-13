'use client';

import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import code from "../../../public/icon/Code.svg";
import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Skills } from "@/components/Skills";

export function Hero() {
  return (
    <section className="bg-[url('/Background_Intro.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center min-h-screen text-center px-6 sm:px-10 md:px-20 lg:px-[163px] py-16 sm:py-20 md:py-24 lg:py-[120px] pb-20 sm:pb-24 md:pb-28 lg:pb-[183px]">
      <div className="text-white max-w-[1040px] mx-auto">
        <div className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
          <div className="max-w-[680px] mx-auto flex flex-col items-center">
            <div className="relative rounded-full border-2 border-[#e3646e] mb-3">
              <Avatar className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] relative border-2 border-[#000]">
                <AvatarImage src="https://github.com/joao-tambue.png" />
                <AvatarFallback className="text-black">JT</AvatarFallback>
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
              Tenho 2 anos de experiência, expecialidado em React, Next & React Native Transformo necessidades em aplicações reais, evolventes e funcionais.
              Desenvolvo sistemas através da minha paixão pela tecnologia,
              contribuindo com soluções inovadoras e eficazes para desafios
              complexos.
            </p>
          </div>

          <Skills />
        </div>
      </div>

      <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2">
        <CaretDoubleDownIcon size={28} className="sm:size-8 text-white animate-bounce" />
      </div>
    </section>
  );
}