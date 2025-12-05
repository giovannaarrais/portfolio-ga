import React from 'react';
import Container from '../Container/container';
import { Code, Code2, Database, Ellipsis, Wrench } from 'lucide-react';
import { StacksEFerramentas } from '@/data/Stacks/get';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Stacks = async() => {

    const stacks = await StacksEFerramentas()

    const stacksFront = stacks.filter((stack) => stack.category === "Front-End")
    const stacksBack = stacks.filter((stack) => stack.category === "Back-End")
    const ferramentas = stacks.filter((stack) => stack.category === "Ferramentas")
    const outros = stacks.filter((stack) => stack.category === "Outros")

    return (
        <section>
            <Container>
                <div className="text-center">
                    <h5 className="text-primary font-secondary flex gap-2 justify-center items-center mb-5"> <Code size={18}/> Tecnologias</h5>
                    <h1 className='text-5xl font-semibold max-w-4xl mx-auto'>
                        Skills & <span className='text-gradient-primary'>Ferramentas</span>
                    </h1>
                    <p className="text-muted-foreground mt-4 text-md">
                        Tecnologias e ferramentas que utilizo no dia a dia
                    </p>
                </div>

                <div className="flex justify-center gap-5">
                    {stacksFront  && (
                        <div className='flex-auto'>
                            <div className='flex gap-2 items-center mb-7'>
                                <span className='bg-gradient-primary text-black p-3 rounded-md'><Code2 size={25}/></span>
                                <h1 className='text-2xl font-bold'>Front-End</h1>
                            </div>
                            {stacksFront.map((stack) => (
                                stack.isActive && (
                                    <Card className="w-full max-w-sm flex flex-row gap-3 mb-3" key={stack.id}>
                                        <CardHeader>
                                            <span className="p-2 rounded-md bg-gray-400/25"><Code /></span>
                                        </CardHeader>

                                        <CardContent className='w-full'>
                                        <CardTitle className="mb-2">{stack.name}</CardTitle>
                                        <CardDescription className='gap-2'>
                                            <div className='flex  items-center gap-2'>
                                                <Progress value={33} />
                                                {stack.level}
                                            </div>
                                        </CardDescription>
                                        </CardContent>
                                    </Card>
                                )
                            ))}
                        </div>
                    )}
                    {stacksBack  && (
                        <div className='flex-auto'>
                            <div className='flex gap-2 items-center mb-7'>
                                <span className='bg-gradient-primary text-black p-3 rounded-md'><Database size={25}/></span>
                                <h1 className='text-2xl font-bold'>Back-End</h1>
                            </div>
                            <div>

                            </div>
                        </div>
                    )}
                    {(ferramentas || outros)  && (
                        <div className='flex-auto flex flex-col gap-10'>
                            {ferramentas && (
                                <div>
                                    <div className='flex gap-2 items-center mb-7'>
                                        <span className='bg-gradient-primary text-black p-3 rounded-md'><Wrench  size={25}/></span>
                                        <h1 className='text-2xl font-bold'>Ferramentas</h1>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            )}
                            {outros && (
                                <div>
                                    <div className='flex gap-2 items-center mb-7'>
                                        <span className='bg-gradient-primary text-black p-3 rounded-md'><Ellipsis size={25}/></span>
                                        <h1 className='text-2xl font-bold'>Outros</h1>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    )}


                </div>
            </Container>
        </section>
    );
};

export default Stacks;