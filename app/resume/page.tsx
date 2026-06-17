import Navbar from "@/components/layout/Navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Resume() {
    return (
        <div className="dark:bg-black min-h-screen">
            <Navbar></Navbar>
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="grid md:grid-cols-2 items-center w-full max-w-md p-10">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                        <h1 className="text-4xl">Resume</h1>
                        <p className="text-md text-gray-700 dark:text-gray-300 max-w-md">
                            Serices include Frontend Development and Product Design
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href='/resume/LMResume.pdf' target="_blank" rel="noopener noreferrer">
                                <Button className="rounded-full cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z" /></svg>View Resume</Button>
                            </Link>
                            <Link href='/resume/LMResume.pdf' download="LMResume.pdf">
                                <Button className="rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z" /></svg>
                                    Download Resume</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <Image width={320} height={600} alt="resume" src="/resume/LMResume.png" draggable="false" className="rotate-[10deg] rounded hover:rotate-0 transition mt-20 mr-20 m-10" ></Image>
                </div>
            </div>
        </div>
    )
}