import { Badge } from "@/components/ui/badge";
import { InfosAboutMe } from "@/data/personalInfos/get";
import { SocialLinks } from "@/data/Social/get";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import Container from "../Container/container";
import DynamicIcon from "../DynamicIcon/component";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import FormContato from "./components/form";
import CardStack from "../Stacks/components/cardStack";
import Link from "next/link";
import SocialComponent from "./components/socialLinks";
import Image from "next/image";

export const lucideMap = {
    Github: Icons.Github,
    Instagram: Icons.Instagram,
    Linkedin: Icons.Linkedin,
    Globe: Icons.Globe,
    Mail: Icons.Mail,
};

const Contato = async () => {
    const [info, social] = await Promise.all([InfosAboutMe(), SocialLinks()]);

    return (
        <section id="contato" className="bg-[var(--paper)] py-6">
            <Container>
                <div className="space-y-8 text-center">
                    <h5 className="eyebrow mb-5 flex items-center justify-center gap-2">
                        {" "}
                        <Icons.PhoneCall size={16} /> Contato
                    </h5>
                    <h1 className="section-title mx-auto max-w-4xl">
                        Vamos trabalhar{" "}
                        <span className="text-[var(--orange)]"> juntos?</span>
                    </h1>

                    <p className="text-muted-foreground mx-auto max-w-lg text-lg">
                        Estou aberta a novas oportunidades e colaborações. Entre
                        em contato e vamos criar algo incrível!
                    </p>
                </div>

                <Card className="soft-card mx-auto flex max-w-5xl flex-col overflow-hidden md:flex-row">
                    <CardContent className="order-2 flex-1 md:order-1">
                        <CardDescription className="text-muted-foreground text-md">
                            Obrigada por visitar meu portfólio! Espero que tenha
                            gostado do meu trabalho. Para mais informações ou
                            para discutir uma oportunidade, entre em contato.
                        </CardDescription>

                        <FormContato />
                    </CardContent>

                    <CardContent className="order-1 mt-0 flex flex-1 flex-col justify-between space-y-3 bg-[var(--sand)] md:order-2">
                        <div className="flex flex-col justify-center gap-4">
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

                        <div className="space-y-3">
                            <p className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
                                <Icons.MapPin
                                    className="text-[var(--orange)]"
                                    size={18}
                                />{" "}
                                Brasil
                            </p>
                            <p className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                                <Icons.Clock
                                    className="text-[var(--orange)]"
                                    size={18}
                                />{" "}
                                Disponível para oportunidades
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
                className="arroba-element element"
            />

            <Image
                src="/elements/chat.svg"
                alt="chat"
                width={100}
                height={100}
                className="chat-element element"
            />
        </section>
    );
};

export default Contato;
