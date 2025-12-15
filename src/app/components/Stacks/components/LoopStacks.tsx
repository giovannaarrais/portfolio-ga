"use client";

import LogoLoop from "@/components/LogoLoop";
import { ReactNode } from "react";
import * as Icons from "react-icons/si";

interface LoopStacksProps {
    stacks: {
        icon: string | null;
    }[];
}

const LoopStacks = ({ stacks }: LoopStacksProps) => {
    const techLogos = stacks
        .filter(
            (stack): stack is { icon: string } =>
                typeof stack.icon === "string",
        )
        .flatMap((stack) => {
            const IconComponent =
                Icons[`Si${stack.icon}` as keyof typeof Icons];

            if (!IconComponent) {
                console.warn("Ícone não encontrado", stack.icon);
                return [];
            }

            return [
                {
                    node: <IconComponent />,
                    title: stack.icon,
                    href: "#",
                },
            ];
        });
    return (
        <LogoLoop
            logos={techLogos}
            speed={35}
            direction="left"
            logoHeight={48}
            gap={50}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#"
            ariaLabel="Technology partners"
            className="mb-10 opacity-15"
        />
    );
};

export default LoopStacks;
