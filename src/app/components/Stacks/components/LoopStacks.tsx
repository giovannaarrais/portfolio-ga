"use client"

import LogoLoop from '@/components/LogoLoop';
import * as Icons from 'react-icons/si';

interface LoopStacksProps {
    stacks: {
        icon: string,
    }[]
}


const LoopStacks = ({ stacks }:LoopStacksProps) => {

    const techLogos = stacks.map((stack) => {
        const IconComponent = Icons[`Si${stack.icon}` as keyof typeof Icons]

        if(!IconComponent){
            console.warn("Icone nao encontrado", stack.icon)
            return null
        }

        return {
            node: <IconComponent />,
            title: stack.icon,
            href: "#"
        }
    }).filter((item): item is NonNullable<typeof item> => item !== null) // Remove nulls

    return (
        <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={50}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#"
            ariaLabel="Technology partners"
            className='mb-10 opacity-15'
        />
    );
};

export default LoopStacks;