import { Badge } from '@/components/ui/badge';
import { InfosAboutMe } from '@/data/personalInfos/get';
import { SocialLinks } from '@/data/Social/get';
import {  ArrowRight } from 'lucide-react';
import * as Icons from "lucide-react"
import Container from '../Container/container';
import DynamicIcon from '../DynamicIcon/component';

export const lucideMap = {
    Github: Icons.Github,
    Instagram: Icons.Instagram,
    Linkedin: Icons.Linkedin,
    Globe: Icons.Globe,
    Mail: Icons.Mail,
    // adicione conforme precisar
  }

const Apresentacao = async () => {

    const [info, social] = await Promise.all([
        InfosAboutMe(),
        SocialLinks()
    ])

    return (
        <section className='text-center'>
            <Container>
                <Badge variant="outline" className='p-2 px-6 text-sm text-primary border-primary font-secondary '>Disponível para novos projetos</Badge>

                <div className='space-y-8'>
                    <h1 className='text-7xl font-semibold max-w-4xl mx-auto'>
                        Olá, eu sou <span className='text-gradient-primary'>{info?.fullName}</span>
                    </h1>
                    <h3 className='text-muted-foreground text-2xl'>
                        {info?.jobTitle}
                    </h3>
                    <p className='max-w-lg mx-auto text-muted-foreground text-lg'>
                        {info?.bio}
                    </p>

                    <div className='flex justify-center gap-3'>
                        <a href="/" className='flex bg-gradient-primary w-max text-sm items-center p-2 px-7 rounded-lg text-black font-semibold gap-5'>
                            Ver Projetos
                            <ArrowRight size={18}/>
                        </a>
                        <a href="/" className='flex bg-transparent border border-primary w-max text-sm items-center p-2 px-7 rounded-lg text-light font-semibold gap-5'>
                            Entar em contato
                        </a>
                    </div>
                </div>

                <div className='gap-4 flex justify-center'>
                    {social.map((link) => (
                        <a href={link.url} key={`link-${link.id}`} target='_blank'>
                            <DynamicIcon iconName={link.icon} />
                        </a>
                    ))}
                </div>
            </Container>
        
        </section>
    );
};

export default Apresentacao;