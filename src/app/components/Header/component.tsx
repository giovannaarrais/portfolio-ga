import { Button } from "@/components/ui/button"

export default function Header() {

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

    return (
        <header  className="fixed top-0 left-0 w-full p-5 border-b border-sky-500 bg-gray-900/50 shadow-md z-50" id="header">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div>
                    <a href="/" className="font-bold  text-secondary text-2xl font-secondary">
                        &lt;GA /&gt;
                    </a>
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
        </header>
    )
}