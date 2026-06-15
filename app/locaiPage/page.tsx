import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"

const images = [
    "/img/locai/d-locai1.png",
    "/img/locai/d-locai2.png",
    "/img/locai/d-locai4.png",
    "/img/locai/d-locai3.png",
]

export default function LocaiPage() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
            <h1 className="text-4xl font-bold mb-4">Locai</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">AI Problem | Ethical AI Solution</p>

            <ProductCarousel images={images} />
        </div>
        </>
    )
}