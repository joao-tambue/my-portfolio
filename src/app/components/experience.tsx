import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import logotipo from "../../../public/logotipo.png";
import Image from "next/image";

export function Experience() {
    const Experiences = [
        {
            Title: "CAF NTC - Team Leader", 
            Date:"- Nov 2024 - At the moment", 
            Badge1: "Front-end", 
            Badge2: "Mobile",
            Description: "Fiz parte de team principal de desenvolvimento de software do  Colégio Árvore da Felicidade",
        },
        {
            Title: "Osapi Care", 
            Date:"- Jun 2024 - Ago 2025",
            Badge1: "Front-end", 
            Badge2: "Backend",
            Description: "Fiz parte de team principal de desenvolvimento de software do  Colégio Árvore da Felicidade",
        },
    ]

    return (
        <section className="bg-[#16181D] py-16 px-4">
            <div className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
                <h2 className="text-[#e3646e] text-center mb-8" style={typography.subtitle}>Professional Experience</h2>
                <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
                    {Experiences.map((experience, index) => (
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2" className="bg-[#20232A] px-4 rounded-lg border border-[#20232A] hover:border hover:border-[#e3646e] hover:rounded-lg hover:transition-colors hover:duration-300 cursor-pointer">
                            <AccordionTrigger className="text-white hover:no-underline cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center border-2 border-[#e3646e] rounded-full">
                                        <Image src={logotipo} alt="NTC Logo" width={60} height={60} className="rounded-full border border-black" />
                                    </div>
                                    
                                        <div className="flex flex-col gap-2">
                                        <h3 className="text-3xl font-semibold" 
                                        style={typography.titleSm} key={index}> {experience.Title} <span className="text-gray-400 text-xl "
                                         style={typography.textSm}>{experience.Date}</span> </h3>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">{experience.Badge1}</Badge>
                                            <Badge variant="secondary">{experience.Badge2}</Badge>
                                        </div>
                                    </div> 
                                                             
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300">
                                <div className="flex flex-col gap-2">
                                    <h1>
                                        {experience.Description}
                                        <span className="text-[#e3646e]"> ( Núcleo Tecnologico do CAF ) </span>
                                    </h1>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    )) } 
                </div>
            </div>
        </section>
    );
}







// import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
// import { Badge } from "@/components/ui/badge";
// import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
// import logotipo from "../../../public/logotipo.png";
// import Image from "next/image";

// export function Experience() {
//     return (
//         <section className="bg-[#16181D] py-16 px-4">
//             <div className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
//                 <h2 className="text-[#e3646e] text-center mb-8" style={typography.subtitle}>Professional Experience</h2>
//                 <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
//                     <Accordion type="single" collapsible className="w-full">
//                         <AccordionItem value="item-2" className="bg-[#20232A] px-4 rounded-lg border border-[#20232A] hover:border hover:border-[#e3646e] hover:rounded-lg hover:transition-colors hover:duration-300 cursor-pointer">
//                             <AccordionTrigger className="text-white hover:no-underline cursor-pointer">
//                                 <div className="flex items-center gap-4">
//                                     <div className="flex items-center justify-center border-2 border-[#e3646e] rounded-full">
//                                         <Image src={logotipo} alt="NTC Logo" width={60} height={60} className="rounded-full border border-black" />
//                                     </div>
//                                     <div className="flex flex-col gap-2">
//                                         <h3 className="text-3xl font-semibold" style={typography.titleSm}>CAF NTC - Team Leader <span className="text-gray-400 text-xl " style={typography.textSm}>- Nov 2024 - At the moment</span> </h3>
//                                         <div className="flex items-center gap-2">
//                                             <Badge variant="secondary">Front-end</Badge>
//                                             <Badge variant="secondary">Mobile</Badge>
//                                         </div>
//                                     </div>                                    
//                                 </div>
//                             </AccordionTrigger>
//                             <AccordionContent className="text-gray-300">
//                                 <div className="flex flex-col gap-2">
//                                     <h1 style={typography.subtitle}>
//                                         Fiz parte de team principal de desenvolvimento de software do 
//                                         Colégio Árvore da Felicidade <span className="text-[#e3646e]"> ( Núcleo Tecnologico do CAF ) </span>
//                                     </h1>
//                                     <div className="flex flex-col pl-5 gap-2 items-center" style={typography.textSm}>
//                                         <p className="text-gray-200">
//                                             - Desenvolvi um sistema de recomendação de artigos academicos 
//                                             para o intituto, isso fez com que os alunos do C.A.F tivessem 
//                                             uma font especifica onde se basear e fazer as suas buscas.
//                                         </p>
//                                         <p>
//                                             - Desenvolvi um sitema de detetor de trabalhos replicados ou facks 
//                                             que identifica trabalhos replicados dos alunos, reduzindo até 80%
//                                             as fraudes na Instituição
//                                         </p>
//                                         <p>
//                                             - Desenvolivi sistema de correção de provas ( Modelo Sistema Americana )
//                                             Onde agilisou a correção e a entrega das provas e reduzio o estress dos professores 
//                                             na correção de provas.
//                                         </p>
//                                         <p>
//                                             - Desenvolvi uma Aplocação Movel de Sistema de votação para o C.A.F usado em todas as
//                                             atividades do Colegio e reduzindo até 30% o processo de escolha de um vencedor nas atividades.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </AccordionContent>
//                         </AccordionItem>
//                     </Accordion>
                    
//                 </div>
//             </div>
//         </section>
//     );
// }