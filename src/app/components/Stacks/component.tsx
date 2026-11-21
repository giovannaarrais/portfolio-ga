import React from "react";
import Container from "../Container/container";
import { Code, Code2, Database, Ellipsis, Wrench } from "lucide-react";
import { StacksEFerramentas } from "@/data/Stacks/get";
import HeaderStack from "./components/headerStack";
import CardStack from "./components/cardStack";
import LoopStacks from "./components/LoopStacks";

const Stacks = async () => {
    const stacks = await StacksEFerramentas();

    const stacksFront = stacks.filter(
        (stack) => stack.category === "Front-End",
    );
    const stacksBack = stacks.filter((stack) => stack.category === "Back-End");
    const ferramentas = stacks.filter(
        (stack) => stack.category === "Ferramentas",
    );
    const outros = stacks.filter((stack) => stack.category === "Outros");

    return (
        <section id="skills" className="pb-5">
            <Container>
                <div className="mb-20 text-center">
                    <h5 className="eyebrow mb-5 flex items-center justify-center gap-2">
                        {" "}
                        <Code size={16} /> Tecnologias
                    </h5>
                    <h1 className="section-title mx-auto max-w-4xl">
                        Skills &{" "}
                        <span className="text-[var(--purple)]">
                            Ferramentas
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-md mt-4">
                        Tecnologias que utilizo para criar experiências web
                        modernas e responsivas
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                    {stacksFront.length > 0 && (
                        <div className="min-w-[270px] flex-auto">
                            <HeaderStack name="Front-End">
                                <Code size={25} />
                            </HeaderStack>
                            <div className="stacks">
                                {stacksFront.map(
                                    (stack) =>
                                        stack.isActive && (
                                            <CardStack
                                                key={stack.id}
                                                stackId={stack.id}
                                                stackIcon={stack.icon}
                                                stackImageIcon={stack.ImageIcon}
                                                stackName={stack.name}
                                                stackLevel={stack.level}
                                            />
                                        ),
                                )}
                            </div>
                        </div>
                    )}
                    {stacksBack.length > 0 && (
                        <div className="min-w-[270px] flex-auto">
                            <HeaderStack name="Back-End">
                                <Database size={25} />
                            </HeaderStack>
                            <div className="stacks">
                                {stacksBack.map(
                                    (stack) =>
                                        stack.isActive && (
                                            <CardStack
                                                key={stack.id}
                                                stackId={stack.id}
                                                stackIcon={stack.icon}
                                                stackImageIcon={stack.ImageIcon}
                                                stackName={stack.name}
                                                stackLevel={stack.level}
                                            />
                                        ),
                                )}
                            </div>
                        </div>
                    )}
                    {(ferramentas || outros) && (
                        <div className="flex min-w-[270px] flex-auto flex-col gap-10">
                            {ferramentas.length > 0 && (
                                <div>
                                    <HeaderStack name="Ferramentas">
                                        <Wrench size={25} />
                                    </HeaderStack>
                                    <div className="stacks">
                                        {ferramentas.map(
                                            (stack) =>
                                                stack.isActive && (
                                                    <CardStack
                                                        key={stack.id}
                                                        stackId={stack.id}
                                                        stackIcon={stack.icon}
                                                        stackImageIcon={
                                                            stack.ImageIcon
                                                        }
                                                        stackName={stack.name}
                                                        stackLevel={stack.level}
                                                    />
                                                ),
                                        )}
                                    </div>
                                </div>
                            )}
                            {outros.length > 0 && (
                                <div>
                                    <HeaderStack name="Outros">
                                        <Ellipsis size={25} />
                                    </HeaderStack>
                                    <div className="stacks">
                                        {outros.map(
                                            (stack) =>
                                                stack.isActive && (
                                                    <CardStack
                                                        key={stack.id}
                                                        stackId={stack.id}
                                                        stackIcon={stack.icon}
                                                        stackImageIcon={
                                                            stack.ImageIcon
                                                        }
                                                        stackName={stack.name}
                                                        stackLevel={stack.level}
                                                    />
                                                ),
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Container>

            <LoopStacks stacks={stacks} />
        </section>
    );
};

export default Stacks;
