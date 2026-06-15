import Image from "next/image";
import Menubar from "@/components/layout/Menubar";
import Link from "next/link";
import NavbarDescription from "@/components/layout/NavbarDescription"


export default function() {
    return(
        <nav className="flex p-6 items-center justify-between w-full sticky top-0 bg-black/70 backdrop-blur-sm z-20">
            <div className="flex items-center gap-4">
            <Link href="/">
                <Image src="/img/zenastra-logo.svg" alt="ZenAstra Logo" width={200} height={100} className="mr-5" />
            </Link>
            <NavbarDescription></NavbarDescription>
            </div>
            <Menubar />
        </nav>
    )
}