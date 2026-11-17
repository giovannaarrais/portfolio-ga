import { FolderTree, Github } from "lucide-react";
import { ProjectsCompleted } from "@/data/Projects/get";
import CardProject from "./components/cardProject";
import Link from "next/link";

const Projects = async () => {
    const projects = await ProjectsCompleted();

    return (
        <section id="projetos" className="project-stage text-white">
            <div className="section-shell relative z-10 space-y-10">
                <div className="mb-15 max-w-2xl">
                    <h5 className="eyebrow mb-5 flex items-center gap-2">
                        {" "}
                        <FolderTree size={16} /> Projetos selecionados
                    </h5>
                    <h1 className="section-title">
                        Trabalhos com{" "}
                        <span className="text-[var(--orange)]">intenção.</span>
                    </h1>
                    <p className="mt-5 text-sm text-stone-300 sm:text-base">
                        Desenvolvidos com dedicação, clareza e atenção aos
                        detalhes.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {projects.length > 0 &&
                        projects.map(
                            (project) =>
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
                                ),
                        )}
                </div>

                <div>
                    <Link
                        href="https://github.com/giovannaarrais"
                        target="_blank"
                        className="mx-auto flex w-max items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm transition hover:border-[var(--orange)] hover:text-[var(--orange)]"
                    >
                        Ver mais no
                        <Github size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
