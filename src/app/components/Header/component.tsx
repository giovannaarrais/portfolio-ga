import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./components/logo";
import ButtonTheme from "./components/buttonTheme";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const items = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Tecnologias", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
];
export default async function Header() {
    return (
        <header id="header" className="fixed inset-x-0 top-0 z-50 p-3 sm:p-5">
            <nav className="nav-pill mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2 sm:px-5">
                <Logo />
                <div className="hidden items-center gap-6 lg:flex">
                    {items.map((item) => (
                        <a
                            className="nav-link text-xs font-medium"
                            href={item.href}
                            key={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="hidden items-center gap-3 sm:flex">
                    <ButtonTheme />
                    <Link
                        href="#contato"
                        className="rounded-full bg-[var(--purple)] px-4 py-2 text-xs font-bold text-white transition hover:bg-[var(--purple-deep)]"
                    >
                        Vamos conversar
                    </Link>
                </div>
                <div className="flex items-center gap-2 sm:hidden">
                    <ButtonTheme />
                    <Sheet>
                        <SheetTrigger
                            aria-label="Abrir menu"
                            className="text-white"
                        >
                            <Menu size={23} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <Logo />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-8 flex flex-col">
                                {items.map((item) => (
                                    <a
                                        key={item.href}
                                        className="border-b py-4 text-lg font-semibold"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
