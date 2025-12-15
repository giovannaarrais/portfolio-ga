export default function Footer() {

    const date = new Date()
    const dateAtual = date.getFullYear()
    
    return (
        <footer className="bg-gradient-primary p-3 py-5 ">
            <div className="max-w-screen-xl mx-auto flex gap-2 justify-between items-center sm:flex-row flex-col sm:text-start text-center text-sm text-black">
                <div>
                    © {dateAtual} Giovanna Arrais. Todos os direitos reservados.
                </div>
                <div>
                    <a href="#" className="hover:underline font-semibold underline">
                        Voltar ao início
                    </a>
                </div>
            </div>
        </footer>
    )
}