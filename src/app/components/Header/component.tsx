import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ArrowRight, Menu, MoveRight, Sun } from "lucide-react"
import Logo from "./components/logo"
import { SocialLinks } from "@/data/Social/get"
import SocialComponent from "../Contato/components/socialLinks"
import { useEffect, useState } from "react"
import ButtonTheme from "./components/buttonTheme"


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
        <header  className="fixed top-0 left-0 w-full p-5 border-b  shadow-md z-50" id="header">
            <div className="max-w-screen-xl mx-auto ">
                <div className="md:flex hidden justify-between items-center">
                    <div>
                        <Logo  />
                    </div>
                    <div>
                        <ul className="flex gap-8">
                            {menuItens.map((item) => (
                                <li key={`menu-${item.label}`} className="text-sm  hover:text-secondary opacity-80 transition-all">
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="default" className="bg-gradient-primary transition-colors cursor-pointer">
                            Vamos Conversar
                        </Button>
                        <ButtonTheme />
                    </div>
                </div>

                <div className="md:hidden flex justify-between">
                    <div>
                        <Logo  />
                    </div>
                    <Sheet >
                        <div className="flex items-center gap-4">
                            <ButtonTheme></ButtonTheme>
                            <SheetTrigger> <Menu size={30}/></SheetTrigger>
                        </div>
                        <SheetContent className="p-5">
                            <SheetHeader className="mb-5 p-0">
                                <SheetTitle >
                                    <Logo  />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="overflow-x-scroll">
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
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}