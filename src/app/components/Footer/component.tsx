export default function Footer() {

    const date = new Date()
    const dateAtual = date.getFullYear()
    
    return (
        <footer className="bg-gray-700/25 p-3 py-5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
                <div>
                    © {dateAtual} Giovanna Arrais. Todos os direitos reservados.
                </div>
                <div>
                    <a href="#" className="hover:underline">
                        Voltar ao início
                    </a>
                </div>
            </div>
        </footer>
    )
}