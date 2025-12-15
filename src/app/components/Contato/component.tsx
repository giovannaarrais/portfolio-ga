import { Badge } from '@/components/ui/badge';
import { InfosAboutMe } from '@/data/personalInfos/get';
import { SocialLinks } from '@/data/Social/get';
import {  ArrowRight } from 'lucide-react';
import * as Icons from "lucide-react"
import Container from '../Container/container';
import DynamicIcon from '../DynamicIcon/component';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription
    ,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import FormContato from './components/form';
import CardStack from '../Stacks/components/cardStack';
import Link from 'next/link';
import SocialComponent from './components/socialLinks';
import Image from 'next/image';

export const lucideMap = {
    Github: Icons.Github,
    Instagram: Icons.Instagram,
    Linkedin: Icons.Linkedin,
    Globe: Icons.Globe,
    Mail: Icons.Mail,
}

const Contato = async () => {

    const [info, social] = await Promise.all([
        InfosAboutMe(),
        SocialLinks()
    ])

    return (
        <section id='contato'>
            <Container>
                <div className='space-y-8 text-center'>
                    <h5 className="text-primary font-secondary flex gap-2 justify-center items-center mb-5"> <Icons.PhoneCall size={20}/> Contato</h5>
                    <h1 className='text-6xl font-semibold max-w-4xl mx-auto'>
                        Vamos trabalhar <span className='text-gradient-primary'> juntos?</span>
                    </h1>
                    
                    <p className='max-w-lg mx-auto text-muted-foreground text-lg'>
                    Estou aberta a novas oportunidades e colaborações. Entre em contato e vamos criar algo incrível!
                    </p>
                </div>

                <Card className='hover:shadow-sky-500/25 shadow-lg transition-all hover:scale-101 flex md:flex-row flex-col max-w-5xl mx-auto'>
                    <CardContent className='flex-1 md:order-1 order-2'>
                        <CardDescription className='text-muted-foreground text-md'>
                            Obrigada por visitar meu portfólio! Espero que tenha gostado do meu trabalho. Para mais informações ou para discutir uma oportunidade, entre em contato.
                        </CardDescription>

                        <FormContato />
                    </CardContent >

                    <CardContent className='space-y-3 mt-0 flex-1 flex flex-col justify-between md:order-2 order-1'>
                        <div className='gap-4 flex flex-col justify-center'>
                            {social.map((link) => (
                                <SocialComponent
                                    key={link.id}
                                    linkUrl={link.url}
                                    linkId={link.id}
                                    linkIcon={link.icon}
                                    linkPlatform={link.platform}
                                    linkIsActive={link.isActive}
                                    
                                />
                            ))}
                        </div>

                        <div className='space-y-3 '>
                            <p className='flex gap-2 items-center sm:text-sm text-xs justify-center text-center'>
                                <Icons.MapPin className='text-purple-500' size={18}/> Brasil 
                            </p>
                            <p className='flex gap-2 items-center sm:text-sm text-xs justify-center'>
                                <Icons.Clock  className='text-purple-500' size={18}/> Disponível para oportunidades    
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Container>

            <Image
                src="/elements/arroba.svg"
                alt="Arroba"
                width={100}
                height={100}
                className='arroba-element element'
            />

            <Image
                src="/elements/chat.svg"
                alt="chat"
                width={100}
                height={100}
                className='chat-element element'
            />

        
        </section>
    );
};

export default Contato;