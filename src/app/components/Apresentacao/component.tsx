import { InfosAboutMe } from "@/data/personalInfos/get";
import { SocialLinks } from "@/data/Social/get";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Container from "../Container/container";
import DynamicIcon from "../DynamicIcon/component";

const Apresentacao = async () => {
    const [info, social] = await Promise.all([InfosAboutMe(), SocialLinks()]);
    const names = info?.fullName?.split(" ") ?? [];
    const firstName = names.shift() ?? "";
    const restName = names.join(" ");
    return (
        <section
            id="inicio"
            className="relative min-h-[780px] overflow-hidden bg-[var(--paper)]"
        >
            <Container classExtra="!pb-0 !pt-0">
                <div className="relative flex h-screen min-h-[610px] items-end">
                    <div className="relative z-10 order-2 flex h-screen flex-col items-center justify-center space-y-6 text-center lg:order-1 lg:text-left">
                        <p className="eyebrow flex items-center justify-center gap-2 lg:justify-start">
                            <Sparkles size={15} /> Disponível para novos
                            projetos
                        </p>
                        <p className="text-muted-foreground max-w-[230px] text-sm leading-relaxed max-lg:mx-auto">
                            {info?.bio}
                        </p>
                        <div className="hero-social flex justify-center gap-4 lg:justify-start">
                            {social
                                .filter((link) => link.isActive)
                                .map((link) => (
                                    <a
                                        href={link.url}
                                        key={link.id}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={
                                            link.platform ??
                                            link.icon ??
                                            "Rede social"
                                        }
                                    >
                                        <DynamicIcon
                                            iconName={link.icon}
                                            size={20}
                                        />
                                    </a>
                                ))}
                        </div>
                    </div>
                    <div className="relative order-1 mx-auto flex h-[390px] w-full items-end justify-center sm:h-[500px] lg:order-2">
                        <Image
                            src="/elements/ellipse.svg"
                            alt=""
                            width={812}
                            height={406}
                            priority
                            className="absolute bottom-0 z-0 w-[640px]"
                        />
                        <Image
                            src="/elements/avatar.webp"
                            alt={info?.fullName ?? "Avatar de Giovanna Arrais"}
                            width={520}
                            height={620}
                            priority
                            className="relative z-10 h-[96%] w-auto max-w-[96%] object-contain object-bottom drop-shadow-2xl"
                        />
                        <div className="absolute z-10 w-100 pb-5">
                            <div className="transparent-glass-box flex justify-center gap-5">
                                <a
                                    href="#projetos"
                                    className="purple-button bottom-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                                >
                                    Projetos <ArrowDownRight size={16} />
                                </a>
                                <a
                                    href="#sobre"
                                    className="bottom-6 z-20 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                                >
                                    Conheça me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 order-3 flex h-screen flex-col items-center justify-center space-y-5 text-center lg:text-right">
                        <p className="eyebrow">Desenvolvimento & design</p>
                        <p className="text-muted-foreground max-w-[220px] text-sm leading-relaxed max-lg:mx-auto lg:ml-auto">
                            Interfaces digitais pensadas para unir clareza,
                            propósito e boa experiência.
                        </p>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 top-[23%] z-20 text-center lg:top-[24%]">
                        <h1 className="section-title text-[clamp(2.8rem,6vw,6rem)]">
                            <span>{firstName} </span>
                            <span className="text-[var(--purple)]">
                                {restName}
                            </span>
                            <br />
                            <span className="text-[.62em] font-semibold tracking-[-.055em]">
                                {info?.jobTitle}
                            </span>
                        </h1>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default Apresentacao;
