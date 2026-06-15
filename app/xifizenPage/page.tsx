import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"

const images = [
    "/img/xifizen/d-x1.png",
    "/img/xifizen/d-xi2.png",
    "/img/xifizen/d-x3.png",
    "/img/xifizen/d-x4.png",
]

export default function XifizenPage() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
            <h1 className="text-4xl font-bold mb-4">Xifizen</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Health Problem | Flow & Attention Scalling Solution</p>

            <ProductCarousel images={images} />
        </div>
        </>
    )
}