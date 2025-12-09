import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ArrowRight, Menu, MoveRight } from "lucide-react"
import Logo from "./components/logo"
import { SocialLinks } from "@/data/Social/get"
import SocialComponent from "../Contato/components/socialLinks"

export default async function Header() {

    const menuItens = [
        {
            label: 'Início',
            href: '#'
        },
        {
            label: 'Sobre',
            href: '#sobre'
        },
        {
            label: 'Skills',
            href: '#skills'
        },
        {
            label: 'Projetos',
            href: '#projetos'
        },
        {
            label: 'Contato',
            href: '#contato'
        }
    ]

    const  social = await SocialLinks()


    return (
        <header  className="fixed top-0 left-0 w-full p-5 border-b border-sky-500 bg-gray-900/50 shadow-md z-50" id="header">
            <div className="max-w-screen-xl mx-auto ">
                <div className="md:flex hidden justify-between items-center">
                    <div>
                        <Logo  />
                    </div>
                    <div>
                        <ul className="flex gap-8">
                            {menuItens.map((item) => (
                                <li key={`menu-${item.label}`} className="text-sm text-muted-foreground hover:text-white transition-all">
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Button variant={"default"} className="bg-gradient-primary transition-colors cursor-pointer">
                            Vamos Conversar
                        </Button>
                    </div>
                </div>

                <div className="md:hidden flex justify-between">
                    <div>
                        <Logo  />
                    </div>
                    <Sheet >
                        <SheetTrigger> <Menu size={30}/></SheetTrigger>
                        <SheetContent className="p-5">
                            <SheetHeader className="mb-5 p-0">
                                <SheetTitle >
                                    <Logo  />
                                </SheetTitle>
                            </SheetHeader>
                                <div>
                                    <ul className="flex flex-col gap-3">
                                        {menuItens.map((item) => (
                                            <li key={`menu-${item.label}`} className="text-md hover:text-white transition-all border-sky-600/50 border-b pb-3">
                                                <a href={item.href} className="flex justify-between px-1 items-center">
                                                    {item.label} 
                                                    <ArrowRight size={19}/>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='gap-3 flex flex-col justify-center mt-15'>
                                    <h3 className="text-xl font-semibold mx-auto">
                                        Vamos se <span className="text-gradient-primary">conectar?</span>
                                    </h3>
                                    {social.map((link) => (
                                        <SocialComponent
                                            key={link.id}
                                            linkUrl={link.url}
                                            linkId={link.id}
                                            linkIcon={link.icon}
                                            linkPlatform={link.platform}
                                            linkIsActive={link.isActive}
                                        />
                                    ))}
                                </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}