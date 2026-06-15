import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"

const images = [
    "/img/nomadchef/d-nomadchef1.png",
    "/img/nomadchef/d-nomadchef2.png",
    "/img/nomadchef/d-nomadchef3.png",
    "/img/nomadchef/d-nomadchef4.png",
]

export default function NomadChefPage() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
            <h1 className="text-4xl font-bold mb-4">Nomad Chef</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Factory Farming Problem | Meat Alternatives + Portable Cooking Solution</p>

            <ProductCarousel images={images} />
        </div>
        </>
    )
}