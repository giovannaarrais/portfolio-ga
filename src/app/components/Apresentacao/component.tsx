import { InfosAboutMe } from '@/data/personalInfos/get';
import { SocialLinks } from '@/data/Social/get';
import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Container from '../Container/container';
import DynamicIcon from '../DynamicIcon/component';

const Apresentacao = async () => {
  const [info, social] = await Promise.all([InfosAboutMe(), SocialLinks()]);
  const names = info?.fullName?.split(' ') ?? [];
  const firstName = names.shift() ?? '';
  const restName = names.join(' ');
  return <section id="inicio" className="relative min-h-[780px] overflow-hidden bg-[var(--paper)] [&>*:first-child]:!pt-0"><Container><div className="relative flex min-h-[610px] items-end h-screen">
    <div className="relative z-10 order-2 space-y-6 text-center lg:order-1 lg:text-left h-screen flex justify-center items-center flex-col"><p className="eyebrow flex items-center justify-center gap-2 lg:justify-start"><Sparkles size={15}/> Disponível para novos projetos</p><p className="max-w-[230px] text-sm leading-relaxed text-muted-foreground max-lg:mx-auto">{info?.bio}</p><div className="hero-social flex justify-center gap-4 lg:justify-start">{social.filter(link => link.isActive).map(link => <a href={link.url} key={link.id} target="_blank" rel="noreferrer" aria-label={link.platform ?? link.icon ?? 'Rede social'}><DynamicIcon iconName={link.icon} size={20}/></a>)}</div></div>
    <div className="relative order-1 mx-auto flex h-[390px] w-full items-end justify-center sm:h-[500px] lg:order-2"><Image src="/elements/ellipse.svg" alt="" width={812} height={406} priority className="absolute bottom-0 z-0 w-[640px]" /><Image src="/elements/avatar.webp" alt={info?.fullName ?? 'Avatar de Giovanna Arrais'} width={520} height={620} priority className="relative z-10 h-[96%] w-auto max-w-[96%] object-contain object-bottom drop-shadow-2xl" /><a href="#projetos" className="orange-button absolute bottom-6 right-2 z-20 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">Projetos <ArrowDownRight size={16}/></a></div>
    <div className="relative z-10 order-3 space-y-5 text-center lg:text-right h-screen flex justify-center items-center flex-col"><p className="eyebrow">Desenvolvimento & design</p><p className="max-w-[220px] text-sm leading-relaxed text-muted-foreground max-lg:mx-auto lg:ml-auto">Interfaces digitais pensadas para unir clareza, propósito e boa experiência.</p><a href="#contato" className="inline-flex items-center gap-3 rounded-full border border-[var(--ink)] px-5 py-3 text-sm font-semibold transition hover:bg-[var(--ink)] hover:text-white">Vamos conversar <ArrowRight size={17}/></a></div>
    <div className="pointer-events-none absolute inset-x-0 top-[23%] z-20 text-center lg:top-[24%]"><h1 className="section-title text-[clamp(2.8rem,6vw,6rem)]"><span>{firstName} </span><span className="text-[var(--orange)]">{restName}</span><br/><span className="text-[.62em] font-semibold tracking-[-.055em]">{info?.jobTitle}</span></h1></div>
  </div></Container></section>;
};
export default Apresentacao;
