import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { ProjectsAndTechonologies } from '@/data/ProjectsAndTechonologies/get';
import { StacksEFerramentas } from '@/data/Stacks/get';

interface CardProjectProps {
    id: string;
    description: string | null;
    isActive: boolean;
    title: string;
    urlImage: string;
    urlSite: string;
    urlGithub: string;
    createdAt: Date;
}

const CardProject = async({id, description, isActive, title, urlImage, urlSite, urlGithub, createdAt}: CardProjectProps) => {

    
    const projectsTechonologies = await ProjectsAndTechonologies(id);
    const techIdsOfProject = projectsTechonologies.map(pt => pt.techId);

    const stacks = await StacksEFerramentas()

    const stacksOfProject = stacks.filter(stack => techIdsOfProject.includes(stack.id))


    return (
        <Card className='hover:shadow-sky-500/25 shadow-lg transition-all hover:scale-101 pt-0'>
            <CardHeader className='p-0'>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-t-2xl">
                    <Image
                        src={urlImage}
                        alt={title}
                        fill
                        className="h-full w-full rounded-t-2xl object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </AspectRatio>
            </CardHeader>

            <CardContent className='space-y-3 mt-0'>
                <CardTitle className='text-lg '>{title}</CardTitle>
                {description && (
                    <CardDescription>
                        {description}
                    </CardDescription>
                )}
                {stacksOfProject.map((stack) => (
                    <Badge key={stack.id} variant="outline" className='p-1 px-3 mr-2 border-sky-400/50 text-sky-500 bg-gray-700/50'>{stack.name}</Badge>
                ))}
            </CardContent>

            <CardFooter className='grid grid-cols-2 gap-3'>
                <Link href={urlGithub} target='_blank' className='text-sm w-full flex items-center gap-2 text-center justify-center border p-2 rounded-md border-sky-500 hover:bg-sky-600/25 transition-all'>
                    <Github size={18}/> Código
                </Link>

                <Link href={urlSite} target='_blank' className=' text-sm w-full bg-gradient-primary text-black flex items-center gap-2 text-center justify-center p-2 rounded-md  transition-all'>
                    <ExternalLink size={18}/> 
                    Projeto
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CardProject;