import { InfosAboutMe } from "@/data/personalInfos/get";
import { ArrowUpRight, Code, Code2, Database, Star } from "lucide-react";
import Container from "../Container/container";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const About = async () => {
    const info = await InfosAboutMe();

    const stacks = [
        {
            id: 1,
            name: "Front-End",
            descricao:
                "Interfaces modernas e responsivas com foco na experiência do usuário.",
            color: "text-sky-700 bg-sky-800/25",
            icon: <Code />,
        },
        {
            id: 2,
            name: "Back-End",
            descricao:
                "Sistemas seguros e escaláveis, com arquiteturas bem estruturadas.",
            color: "text-purple-700 bg-purple-800/25",
            icon: <Database />,
        },
        {
            id: 3,
            name: "Qualidade",
            descricao:
                "Código limpo, versionamento com Git e práticas ágeis de desenvolvimento",
            color: "text-green-700 bg-green-800/25",
            icon: <Star />,
        },
    ];

    return (
        <section className="about-section mx-5 rounded-[4rem]" id="sobre">
            <Container classExtra="!py-18">
                <div className="about-panel">
                    <div className="about-copy">
                        <h5 className="eyebrow mb-5 flex items-center gap-2">
                            <Star size={16} /> Sobre mim
                        </h5>
                        <h1 className="about-title section-title max-w-3xl text-white lg:text-5xl!">
                            Prazer em{" "}
                            <span className="text-[var(--purple)]">
                                conhecê-lo!
                            </span>
                        </h1>
                        <p
                            style={{ whiteSpace: "pre-line" }}
                            className="about-description"
                        >
                            {info?.aboutMe}
                        </p>
                        <a className="about-link" href="#contato">
                            Vamos conversar <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="about-technologies">
                        <div className="about-divider" aria-hidden="true" />
                        <div className="about-tech-heading">
                            <Code2 size={18} />
                            <span>Áreas de Atuação</span>
                        </div>
                        <div className="about-tech-list">
                            {stacks.map((stack) => (
                                <Card
                                    className="about-tech-card"
                                    key={stack.id}
                                >
                                    <CardHeader className="about-tech-icon">
                                        {stack.icon}
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <CardTitle>{stack.name}</CardTitle>
                                        <CardDescription>
                                            {stack.descricao}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}

                            {/* <Image
                                src="/backgrounds/ellipses-bg.svg"
                                alt="Ellipses"
                                width={400}
                                height={620}
                                priority
                                className="absolute z-[-1] opacity-30"
                            /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
