import ProjectCard from '@/components/ProjectCard';
import { Experience } from './components/experience';
import { Hero } from './components/hero';
import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import { Services } from './components/services';

export default function Home() {

  return (
    <main>
      <Hero />
      <Experience />
      <section className="bg-[#16181D]">
        <div className={` py-[72px] ${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
          <div className='mb-[56px] flex flex-col items-center gap-2 max-w-[1040px] mx-auto'>
            <h2 className="text-[#e3646e] text-center" style={typography.subtitle}>Meu Trabalho</h2>
            <h1 style={typography.titleMd} className='text-white text-center'> Veja os projetos em destaque </h1>
          </div>

          <div className='grid sm:grid-cols-3 gap-6 max-w-[1040px] mx-auto'>
            <ProjectCard
              title="CAF Votations"
              description="Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"
              mediaType="image"
              mediaSrc="/votacao.png"
              borderColor="#FF6B6B"
              technologies={["React", "Next.js", "TailwindCSS"]}
              projectUrl="https://meuprojeto.com"
              githubUrl="https://github.com/meuuser/travelgram"
            />
            <ProjectCard
              title="Speak Up"
              description="Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"
              mediaType="image"
              mediaSrc="/Thumbnail.png"
              borderColor="#FF6B6B"
              technologies={["React", "Next.js", "TailwindCSS"]}
              projectUrl="https://meuprojeto.com"
              githubUrl="https://github.com/meuuser/travelgram"
            />
            <ProjectCard
              title="Acessment AI"
              description="Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"
              mediaType="image"
              mediaSrc="/Thumbnail.png"
              borderColor="#FF6B6B"
              technologies={["React", "Next.js", "TailwindCSS"]}
              projectUrl="https://meuprojeto.com"
              githubUrl="https://github.com/meuuser/travelgram"
            />
            <ProjectCard
              title="Web Site Núcleo"
              description="Rede social onde as pessoas mostram os registros de suas viagens pelo mundo"
              mediaType="image"
              mediaSrc="/Thumbnail.png"
              borderColor="#FF6B6B"
              technologies={["React", "Next.js", "TailwindCSS"]}
              projectUrl="https://meuprojeto.com"
              githubUrl="https://github.com/meuuser/travelgram"
            />
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}