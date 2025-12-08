import Image from "next/image";
import Apresentacao from "./components/Apresentacao/component";
import About from "./components/About/component";
import Stacks from "./components/Stacks/component";
import Projects from "./components/Projects/component";
import Contato from "./components/Contato/component";

export default function Home() {
    return (
        <main className="">
            <Apresentacao />
            <About />
            <Stacks />
            <Projects />
            <Contato />
        </main>
    );
}
