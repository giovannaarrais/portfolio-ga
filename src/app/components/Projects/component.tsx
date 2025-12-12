import { FolderTree, Github } from "lucide-react";
import { ProjectsCompleted } from "@/data/Projects/get";
import CardProject from "./components/cardProject";
import Link from "next/link";


const Projects = async() => {

    const projects = await ProjectsCompleted()

    return (
        <section id="projetos">
            <div className='max-w-screen-2xl mx-auto py-20 space-y-10 px-5'>
                <div className="text-center mb-15">
                    <h5 className="text-primary font-secondary flex gap-2 justify-center items-center mb-5"> <FolderTree size={20}/> Projetos</h5>
                    <h1 className='text-5xl font-semibold max-w-4xl mx-auto'>
                        Conheça alguns <span className='text-gradient-primary'> trabalhos</span>
                    </h1>
                    <p className="text-muted-foreground mt-4 text-md">
                    Desenvolvidos com dedicação e atenção aos detalhes
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mb-10">
                    {projects.length > 0 && (
                        projects.map((project) => (
                            project.isActive && (
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
                            )
                        ))
                    )}
                </div>

                <div>
                    <Link href="https://github.com/giovannaarrais" target='_blank' 
                    className='text-sm w-max px-5 py-3 mx-auto flex items-center gap-2 text-center justify-center border p-2 border-sky-500/50 hover:bg-sky-600/50 transition-all shadow-sky-400/20 shadow-lg rounded-full'>
                        Ver mais no 
                        <Github size={18}/> 
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Projects;