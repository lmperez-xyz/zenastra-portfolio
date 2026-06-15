import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"

const images = [
    "/img/egarden/d-egarden1.png",
    "/img/egarden/d-egarden2.png",
    "/img/egarden/d-egarden3.png",
    "/img/egarden/d-eg4.png",
]

export default function EgardenPage() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
            <h1 className="text-4xl font-bold mb-4">Egarden</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Climate Change Problem | Eco Cafe Solution</p>

            <ProductCarousel images={images} />
        </div>
        </>
    )
}