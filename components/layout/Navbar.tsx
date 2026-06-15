import Image from "next/image";
import Menubar from "@/components/layout/Menubar";


export default function() {
    return(
        <nav className="flex p-6 items-center justify-between w-full sticky top-0 bg-black/70 backdrop-blur-sm z-20">
            <Image src="/img/zenastra-logo.svg" alt="ZenAstra Logo" width={200} height={100} />
                    <p className="mx-6 text-xs sm:mx-4 sm:text-sm md:mx-0 md:text-base">"Let's build a brand & product that aims to solve these problems…"</p>
            <Menubar />
        </nav>
    )
}