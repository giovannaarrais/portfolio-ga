export default function Footer() {
    const date = new Date();
    const dateAtual = date.getFullYear();

    return (
        <footer className="bg-[#171615] p-3 py-5">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-2 text-center text-sm text-stone-300 sm:flex-row sm:text-start">
                <div>
                    © {dateAtual} Giovanna Arrais. Todos os direitos
                    reservados.
                </div>
                <div>
                    <a
                        href="#inicio"
                        className="font-semibold hover:text-[var(--orange)]"
                    >
                        Voltar ao início
                    </a>
                </div>
            </div>
        </footer>
    );
}
