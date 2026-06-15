import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"

const images = [
    "/img/viacademy/d1.png",
    "/img/viacademy/d2.png",
    "/img/viacademy/d3.png",
    "/img/viacademy/d4.png",
]

export default function ViAcademyPage() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
            <h1 className="text-4xl font-bold mb-4">ViAcademy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Inequality Problem | Practical Education Eco Villages Solution</p>

            <ProductCarousel images={images} />
        </div>
        </>
    )
}