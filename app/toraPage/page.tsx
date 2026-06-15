import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"

const images = [
    "/img/tora/d-t1.png",
    "/img/tora/d-t2.png",
    "/img/tora/d-t3.png",
    "/img/tora/d-t4.png",
]

export default function ToraPage() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
            <h1 className="text-4xl font-bold mb-4">Tora</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Tourism Problem | Clean Transportation & Destination Solution</p>

            <ProductCarousel images={images} />
        </div>
        </>
    )
}