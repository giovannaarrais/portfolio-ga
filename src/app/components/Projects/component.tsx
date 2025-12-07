import { FolderTree } from "lucide-react";
import Container from "../Container/container";
import { ProjectsCompleted } from "@/data/Projects/get";
import CardProject from "./components/cardProject";


const Projects = async() => {

    const projects = await ProjectsCompleted()

    return (
        <section id="projetos">
            <Container>
                <div className="text-center mb-15">
                    <h5 className="text-primary font-secondary flex gap-2 justify-center items-center mb-5"> <FolderTree size={20}/> Projetos</h5>
                    <h1 className='text-5xl font-semibold max-w-4xl mx-auto'>
                        Conheça alguns <span className='text-gradient-primary'> trabalhos</span>
                    </h1>
                    <p className="text-muted-foreground mt-4 text-md">
                    Desenvolvidos com dedicação e atenção aos detalhes
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-9">
                    {projects.length > 0 && (
                        projects.map((project) => (
                            <CardProject
                                key={project.id}
                                id={project.id}
                                description={project.description}
                                isActive={project.isActive}
                                title={project.title}
                                urlImage={project.image}
                                urlSite={project.urlSite}
                                urlGithub={project.urlGithub}
                                createdAt={project.createdAt}
                                
                            />
                        ))
                    )}
                </div>

            </Container>
        </section>
    );
};

export default Projects;