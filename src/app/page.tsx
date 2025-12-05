import Image from "next/image";
import Apresentacao from "./components/Apresentacao/component";
import About from "./components/About/component";
import Stacks from "./components/Stacks/component";

export default function Home() {
    return (
        <main className="">
            <Apresentacao />
            <About />
            <Stacks />
        </main>
    );
}
