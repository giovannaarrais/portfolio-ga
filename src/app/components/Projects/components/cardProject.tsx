import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { ProjectsAndTechonologies } from '@/data/ProjectsAndTechonologies/get';
import { StacksEFerramentas } from '@/data/Stacks/get';
interface CardProjectProps { id: string; description: string | null; isActive: boolean; title: string; urlImage: string; urlSite: string; urlGithub: string; createdAt: Date; }
const CardProject = async ({ id, description, title, urlImage, urlSite, urlGithub }: CardProjectProps) => {
 const [relations, stacks] = await Promise.all([ProjectsAndTechonologies(id), StacksEFerramentas()]);
 const techIds = relations.map(item => item.techId); const projectStacks = stacks.filter(stack => techIds.includes(stack.id));
 return <article className="project-card relative flex min-h-[440px] flex-col overflow-hidden rounded-[1.4rem] p-3 text-white"><div className="relative h-52 overflow-hidden rounded-[1rem] bg-stone-800"><Image src={urlImage} alt={title} fill className="project-image object-cover" /></div><div className="flex flex-1 flex-col px-2 pb-2 pt-5"><div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold tracking-tight">{title}</h3><Link href={urlSite} target="_blank" aria-label={`Abrir ${title}`} className="round-action shrink-0"><ArrowUpRight size={20}/></Link></div>{description && <p className="mt-3 text-sm leading-relaxed text-stone-300">{description}</p>}<div className="mt-auto flex items-center justify-between gap-3 pt-5"><div className="flex flex-wrap gap-1.5">{projectStacks.map(stack => <span key={stack.id} className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-stone-300">{stack.name}</span>)}</div><Link href={urlGithub} target="_blank" aria-label={`Código de ${title}`} className="text-stone-300 transition hover:text-[var(--orange)]"><Github size={19}/></Link></div></div></article>;
};
export default CardProject;
