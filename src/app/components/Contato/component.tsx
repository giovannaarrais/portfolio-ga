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

                <Card className='hover:shadow-sky-500/25 shadow-lg transition-all hover:scale-101 flex  flex-row max-w-5xl mx-auto'>
                    <CardContent className='flex-1'>
                        <CardDescription className='text-muted-foreground text-md'>
                            Obrigada por visitar meu portfólio! Espero que tenha gostado do meu trabalho. Para mais informações ou para discutir uma oportunidade, entre em contato.
                        </CardDescription>

                        <FormContato />
                    </CardContent >

                    <CardContent className='space-y-3 mt-0 flex-1 flex flex-col justify-between'>
                        <div className='gap-4 flex flex-col justify-center'>
                            {social.map((link) => (
                                <Link key={link.id} href={link.url} target='_blank'>
                                    <Card className="py-4 hover:border-sky-400 hover:shadow-sky-500/25 shadow-lg transition-all hover:scale-101">
                                        <CardContent className=' flex gap-4 px-3'>
                                            <div className="flex-auto max-w-[50px] min-w-[50px] flex justify-center bg-sky-600/25 text-sky-500 items-center rounded-md">
                                                <DynamicIcon iconName={link.icon}/>
                                            </div>
                                            <div className="flex-auto">
                                                <CardTitle className="text-sm mb-1">{link.platform}</CardTitle>
                                                <CardDescription className=' text-xs'>
                                                    {link.url}
                                                </CardDescription>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        <div className='space-y-3 '>
                            <p className='flex gap-2 items-center text-sm justify-center'>
                                <Icons.MapPin className='text-purple-500' size={18}/> Brasil 
                            </p>
                            <p className='flex gap-2 items-center text-sm justify-center'>
                                <Icons.Clock  className='text-purple-500' size={18}/> Disponível para oportunidades    
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        
        </section>
    );
};

export default Contato;