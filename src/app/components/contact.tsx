'use client';

import { typography, asap, inconsolata, mavenPro } from "@/fonts/fonts";
import ContactMeForm from '@/components/ContactMeForm';
import SocialLinks from '@/components/SocialLinks';

export function Contact () {

    return (
        <main className={`${asap.variable} ${inconsolata.variable} ${mavenPro.variable}`}>
            <section className="bg-[url('/Background_Intro.png')] bg-no-repeat bg-cover h-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4 w-[1040px] mx-auto px-6 border border-red-500">
                    <div className='mb-[56px] flex flex-col items-center gap-1 max-w-[1040px] mx-auto'>
                        <h2 className="text-[#BB72E9] text-center" style={typography.subtitle}>Contato</h2>
                        <h1 style={typography.titleMd} className='text-white text-center'> Gostou do meu trabalho ? </h1>
                        <p className="text-gray-600" style={typography.textMd}>Entre em contato ou acompanhe as minhas redes sociais</p>
                    </div>
                    <ContactMeForm />
                    <SocialLinks />
                </div>
            </section>
        </main>
    )
}