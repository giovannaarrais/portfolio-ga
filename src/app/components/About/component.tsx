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
} from "@/components/ui/card"


const About = async() => {
    const info = await InfosAboutMe()

    const stacks = [
        {
            id: 1,
            name: 'Front-End',
            descricao: 'Interfaces modernas e responsivas com foco na experiência do usuário.',
            color: 'text-sky-700 bg-sky-800/25',
            icon:  <Code/>
        },
        {
            id: 2,
            name: 'Back-End',
            descricao: 'Sistemas seguros e escaláveis, com arquiteturas bem estruturadas.',
            color: 'text-purple-700 bg-purple-800/25',
            icon: <Database />
        },
        {
            id: 3,
            name: 'Qualidade',
            descricao: 'Código limpo, versionamento com Git e práticas ágeis de desenvolvimento',
            color: 'text-green-700 bg-green-800/25',
            icon:  <Star/>
        }
    ]

    return (
        <section className="text-center" id="sobre">
            <Container>
                <div className="text-center">
                    <h5 className="eyebrow flex gap-2 justify-center items-center mb-5"> <Sparkles size={16}/> Sobre mim</h5>
                    <h1 className='section-title max-w-3xl mx-auto'>
                        Prazer em <span className='text-[var(--orange)]'>conhecê-lo!</span>
                    </h1>
                </div>
                <article className="mt-12 flex justify-between gap-10 md:flex-row flex-col">
                    <div className="flex-1 text-start rounded-[1.5rem] bg-[var(--sand)] p-7 md:p-10">
                        <p style={{whiteSpace: "pre-line"}} className="leading-8 text-muted-foreground">
                            {info?.aboutMe}
                        </p>
                    </div>
                    <div className="flex-1 text-start items-center gap-4 flex flex-col">
                        {stacks.map((stack) => (
                            <Card className="soft-card w-full max-w-sm flex flex-row gap-3 text-left transition hover:-translate-y-1" key={stack.id}>
                                <CardHeader className="flex-auto">
                                    <span className="bg-[var(--sand)] text-[var(--orange)] p-2 rounded-xl">{stack.icon}</span>
                                </CardHeader>

                                <CardContent  className="flex-auto">
                                <CardTitle className="mb-2">{stack.name}</CardTitle>
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
