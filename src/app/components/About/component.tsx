import { InfosAboutMe } from "@/data/personalInfos/get";
import { Code, Code2, Database, Sparkles, Star } from "lucide-react";
import Container from "../Container/container";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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
        <section className="text-center rounded-[4rem] mx-5 shadow-black" id="sobre">
            <Container>
                <div className="text-center">
                    <h5 className="eyebrow mb-5 flex items-center justify-center gap-2">
                        {" "}
                        <Star size={16} /> Sobre mim
                    </h5>
                    <h1 className="section-title mx-auto max-w-3xl text-white">
                        Prazer em{" "}
                        <span className="text-[var(--orange)]">
                            conhecê-lo!
                        </span>
                    </h1>
                    <p className=" text-md mt-4 text-white/70">
                        Tecnologias que utilizo para criar experiências web modernas e responsivas
                    </p>
                </div>
                <article className="mt-12 flex flex-col justify-between gap-10 md:flex-row">
                    <div className="flex-1 rounded-[1.5rem] bg-white p-7 text-start md:p-10">
                        <p
                            style={{ whiteSpace: "pre-line" }}
                            className="text-muted-foreground leading-8"
                        >
                            {info?.aboutMe}
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-4 text-start">
                        {stacks.map((stack) => (
                            <Card
                                className="soft-card flex w-full max-w-sm flex-row gap-3 text-left transition hover:-translate-y-1"
                                key={stack.id}
                            >
                                <CardHeader className="flex-auto">
                                    <span className="rounded-xl bg-[var(--sand)] p-2 text-[var(--orange)]">
                                        {stack.icon}
                                    </span>
                                </CardHeader>

                                <CardContent className="flex-auto">
                                    <CardTitle className="mb-2">
                                        {stack.name}
                                    </CardTitle>
                                    <CardDescription>
                                        {stack.descricao}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </article>
            </Container>
        </section>
    );
};

export default About;
