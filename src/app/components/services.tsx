'use client'

import {  DevicesIcon , HardDrivesIcon, InfinityIcon } from "@phosphor-icons/react";
import { DeviceMobileCameraIcon } from "@phosphor-icons/react";
import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import ServiceCard from "@/components/ServiceCard";

export function Services () {
  const services = [
    {
      icon: <DevicesIcon size={48} className="text-[#BB72E9]" /> ,
      title: "Websites e Aplicativos",
      description: "Desenvolvimento de interfaces",
    },
    {
      icon: <HardDrivesIcon size={48} className="text-[#EABD5F]" /> ,
      title: "API e banco de dados",
      description: "Criação de serviços do sistema",
    },
    {
      icon: <InfinityIcon size={48} className="text-[#82BC4F]" /> ,
      title: "DevOps",
      description: "Gestão e infraestrutura de aplicação",
    },
  ];

  return (
    <section className={`bg-[#0D0E11] py-[88px] ${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
      <div className='mb-[56px] flex flex-col items-center gap-2 max-w-[1040px] mx-auto'>
        <h2 className="text-[#e3646e] text-center" style={typography.subtitle}>My Services</h2>
        <h1 style={typography.titleMd} className='text-white text-center' > Como posso ajudar o teu negocio </h1>
      </div>
      <div className="flex justify-center items-center text-white text-lg leading-7 max-w-[888px] mx-auto">
        <div className="grid gap-[24px] md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}