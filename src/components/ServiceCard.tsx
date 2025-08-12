import React from "react";
import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <main className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`} >
      <div className="bg-transparent border border-gray-500 rounded-lg p-6 px-[20px] hover:shadow-lg transition">
        <div className="mb-[20px] flex">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white" style={typography.titleSm}>{title}</h3>
        <p className="text-gray-400" style={typography.textSm}>{description}</p>
      </div>
    </main>
  );
}