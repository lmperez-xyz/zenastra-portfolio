import Image from "next/image";
import Navbar from "@/components/layout/Navbar"
import Projects from "@/components/layout/Projects"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
        <Navbar></Navbar>
        <Projects></Projects>
    </div>
  );
}
