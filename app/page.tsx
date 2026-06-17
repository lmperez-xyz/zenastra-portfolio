import Navbar from "@/components/layout/Navbar"
import Projects from "@/components/layout/Projects"
import Skills from "@/components/layout/Skills"
import AIChat from "@/components/layout/AIChat"

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Navbar></Navbar>
      <div className="flex flex-col flex-1 items-center justify-center font-sans ">
        <Projects></Projects>
      </div>
      <Skills></Skills>

      <div id="aiChat">
        <AIChat></AIChat>
      </div>
    </div>
  );
}
