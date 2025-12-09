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
            descricao: 'Interfaces modernas e responsivas com React, TypeScript e Tailwind CSS',
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
        <section className="text-center space-y-10 mx-auto py-10 " id="sobre">
            <Container>
                <div className="text-center">
                    <h5 className="text-primary font-secondary flex gap-2 justify-center items-center mb-5"> <Sparkles size={18}/> Sobre mim</h5>
                    <h1 className='text-5xl font-semibold max-w-4xl mx-auto'>
                        Prazer em <span className='text-gradient-primary'>conhecê-lo!</span>
                    </h1>
                </div>
                <article className="flex justify-between gap-4 md:flex-row flex-col">
                    <div className="flex-1 text-start">
                        <p style={{whiteSpace: "pre-line"}} className="text-muted-foreground">
                            {info?.aboutMe}
                        </p>
                    </div>
                    <div className="flex-1 text-start items-center gap-4 flex flex-col">
                        {stacks.map((stack) => (
                            <Card className="w-full max-w-sm flex flex-row gap-3" key={stack.id}>
                                <CardHeader className="flex-auto">
                                    <span className={`${stack.color} p-2 rounded-md`}>{stack.icon}</span>
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