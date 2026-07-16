import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/component";
import Footer from "./components/Footer/component";
import Script from "next/script";


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
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-GFG6K02022"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GFG6K02022');
                `}
                </Script>
            </head>
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
