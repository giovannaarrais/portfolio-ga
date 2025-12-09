import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/component";
import Footer from "./components/Footer/component";


export const metadata: Metadata = {
    title: "Portfólio Giovanna Arrais",
    description: "Projetos de design, desenvolvimento e experiências digitais que unem estética e funcionalidade.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="dark">
            <body
                className={`antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
