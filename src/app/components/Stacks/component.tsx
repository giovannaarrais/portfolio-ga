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
import HeaderStack from './components/headerStack';
import CardStack from './components/cardStack';


const Stacks = async() => {

    const stacks = await StacksEFerramentas()

    const stacksFront = stacks.filter((stack) => stack.category === "Front-End")
    const stacksBack = stacks.filter((stack) => stack.category === "Back-End")
    const ferramentas = stacks.filter((stack) => stack.category === "Ferramentas")
    const outros = stacks.filter((stack) => stack.category === "Outros")


    return (
        <section id='skills'>
            <Container>
                <div className="text-center mb-20">
                    <h5 className="text-primary font-secondary flex gap-2 justify-center items-center mb-5"> <Code size={18}/> Tecnologias</h5>
                    <h1 className='text-5xl font-semibold max-w-4xl mx-auto'>
                        Skills & <span className='text-gradient-primary'>Ferramentas</span>
                    </h1>
                    <p className="text-muted-foreground mt-4 text-md">
                        Tecnologias que utilizo para criar experiências web modernas e responsivas
                    </p>
                </div>

                <div className="flex justify-center gap-5">
                    {stacksFront.length > 0  && (
                        <div className='flex-auto'>
                            <HeaderStack name="Front-End" >
                                <Code size={25}/>
                            </HeaderStack>
                            {stacksFront.map((stack) => (
                                stack.isActive && (
                                    <CardStack 
                                        key={stack.id}
                                        stackId={stack.id}
                                        stackIcon={stack.icon}
                                        stackImageIcon={stack.ImageIcon}
                                        stackName={stack.name}
                                        stackLevel={stack.level}
                                    />
                                )
                            ))}
                        </div>
                    )}
                    {stacksBack.length > 0  && (
                        <div className='flex-auto'>
                            <HeaderStack name="Back-End" >
                                <Database size={25}/>
                            </HeaderStack>
                            <div>
                            {stacksBack.map((stack) => (
                                stack.isActive && (
                                    <CardStack 
                                    key={stack.id}
                                    stackId={stack.id}
                                    stackIcon={stack.icon}
                                    stackImageIcon={stack.ImageIcon}
                                    stackName={stack.name}
                                    stackLevel={stack.level}
                                />
                                )
                            ))}
                            </div>
                        </div>
                    )}
                    {(ferramentas || outros)  && (
                        <div className='flex-auto flex flex-col gap-10'>
                            {ferramentas.length > 0 && (
                                <div>
                                    <HeaderStack name="Ferramentas" >
                                        <Wrench  size={25}/>
                                    </HeaderStack>
                                    <div>
                                    {ferramentas.map((stack) => (
                                        stack.isActive && (
                                            <CardStack 
                                                key={stack.id}
                                                stackId={stack.id}
                                                stackIcon={stack.icon}
                                                stackImageIcon={stack.ImageIcon}
                                                stackName={stack.name}
                                                stackLevel={stack.level}
                                            />
                                        )
                                    ))}

                                    </div>
                                </div>
                            )}
                            {outros.length > 0 && (
                                <div>
                                    <HeaderStack name="Outros" >
                                        <Ellipsis  size={25}/>
                                    </HeaderStack>
                                    <div>
                                    {outros.map((stack) => (
                                        stack.isActive && (
                                            <CardStack 
                                                key={stack.id}
                                                stackId={stack.id}
                                                stackIcon={stack.icon}
                                                stackImageIcon={stack.ImageIcon}
                                                stackName={stack.name}
                                                stackLevel={stack.level}
                                            />
                                        )
                                    ))}
                                        
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