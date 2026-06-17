import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"
import ProductViewer from "@/components/ui/product-viewer"
import ProductCodeToggle from "@/components/ui/product-code-toggle"

const images = [
    "/img/tora/d-t1.png",
    "/img/tora/d-t2.png",
    "/img/tora/d-t3.png",
    "/img/tora/d-t4.png",
]

const productFeatures = [
  {
    title: "Sustainable Transportation",
    description:
      "Travel smarter with access to clean-energy transportation options, including electric vehicles, shared mobility services, and other low-emission alternatives. Tora helps travelers reduce their environmental footprint without compromising convenience, comfort, or accessibility throughout their journey.",
    image: "/img/n-gradient/one.svg",
  },
  {
    title: "Eco-Friendly Stays",
    description:
      "Discover accommodations that prioritize sustainability through energy efficiency, responsible resource management, and environmentally conscious operations. Tora connects travelers with green-certified stays that deliver comfort and quality while supporting a healthier future for local communities and ecosystems.",
    image: "/img/n-gradient/two.svg",
  },
  {
    title: "Responsible Travel Experiences",
    description:
      "Explore curated activities and destinations that celebrate culture, nature, and conservation. Tora helps travelers engage with local communities, support sustainable businesses, and enjoy meaningful experiences that preserve the places they visit for future generations.",
    image: "/img/n-gradient/three.svg",
  },
]

export default function ToraPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
                <h1 className="text-4xl font-bold mb-4">Tora</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Tourism Problem | Clean Transportation & Destination Solution</p>

                <ProductCarousel images={images} />
            </div>

            <div>
                <ProductCodeToggle
                    modelUrl="/models/mt-egarden.glb"
                    features={productFeatures}
                    sourceCodeImage="/img/figma-designs/fig-tora.png"
                    sourceCodeTitle="Code Title"
                    sourceCodeDescription="Code Description"
                ></ProductCodeToggle>
            </div>
        </div>
    )
}