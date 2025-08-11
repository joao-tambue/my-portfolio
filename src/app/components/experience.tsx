import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import logotipo from "../../../public/logotipo.png";
import Image from "next/image";

export function Experience() {
    return (
        <section className="bg-[#16181D] py-16 px-4">
            <div className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
                <h2 className="text-[#e3646e] text-center mb-8" style={typography.subtitle}>Professional Experience</h2>
                <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2" className="bg-[#20232A] px-4 rounded-lg border border-[#20232A] hover:border hover:border-[#e3646e] hover:rounded-lg hover:transition-colors hover:duration-300 cursor-pointer">
                            <AccordionTrigger className="text-white hover:no-underline cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center border-2 border-[#e3646e] rounded-full">
                                        <Image src={logotipo} alt="NTC Logo" width={60} height={60} className="rounded-full border border-black" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-3xl font-semibold" style={typography.titleSm}>CAF NTC - Team Leader <span className="text-gray-400 text-xl " style={typography.textSm}>- Nov 2024 - At the moment</span> </h3>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">Front-end</Badge>
                                            <Badge variant="secondary">Mobile</Badge>
                                        </div>
                                    </div>                                    
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300">
                                Desenvolvi aplicativos móveis usando React Native, focando na experiência do usuário e performance.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}