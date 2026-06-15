import Navbar from "@/components/layout/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-5">
            <Image src="/img/me.png" alt="LM Perez" width={80} height={80} />
            <h2 className="text-3xl font-bold mt-3">LM Perez</h2>
            <h3>Frontend Developer <span className="text-white/50">|</span> Product Designer</h3>
            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center pt-10">
            Hi :)  </p>
            
            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">I'm a frontend developer and product designer who enjoys turning visions into thoughtful digital experiences. My skills span design, sustainability, AI, entrepreneurship, and systems thinking, though at the heart of it all, I find meaning in building things that make life a little better for people…or at least, I hope so.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">
            My interest in websites grew as I learned more about business. Over time, I began to see <b className="text-white"> software as an abstraction of real-world systems</b>, a way to make ideas, products, and services accessible to people at a global scale. So I endeavor to use that power to create things that are not only useful but also considerate, ethical, and sustainable.
            </p>

            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">
            I enjoy moving between product design and systems engineering, thinking why something should exist and how it works. I'm especially drawn to projects that sit at the intersection of <b className="text-white">eco-tech, ventures, education, well-being, and pressing world problems.</b>
            </p>

            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">When I'm not building projects, you'll usually find me sketching, cooking, exploring emerging technologies, farming, observing animals, or looking for opportunities for growth and genuine human connections.</p>

            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">
            <b className="text-white">ZenAstra.xyz</b> is my personal brand, it’s a space to experiment, learn, and share ideas that reflect that journey.
            </p>
            
            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">
            I’d love to hear your projects and ideas too, so <Link href="/contact"><u className="text-white"> feel free to reach out! →</u></Link>
            </p>

            <p className="text-md text-gray-700 dark:text-gray-400 max-w-2xl text-center p-3">
            Thanks for stopping by.
            </p>
        </div>
        </>
    )
}