import Image from "next/image";
import Menubar from "@/components/layout/Menubar";


export default function() {
    return(
        <nav className="flex p-6 items-center justify-between w-full">
            <Image src="/img/zenastra-logo.svg" alt="ZenAstra Logo" width={200} height={100} />
                    <p>"Let's build a brand & product that aims to solve these problems…"</p>
            <Menubar />
        </nav>
    )
}