import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import Projects from "@/components/layout/Projects"
import Skills from "@/components/layout/Skills"

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Projects></Projects>
    </div>
        <Skills></Skills>
    </>
  );
}
