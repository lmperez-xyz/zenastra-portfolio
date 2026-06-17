import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"
import ProductViewer from "@/components/ui/product-viewer"
import ProductCodeToggle from "@/components/ui/product-code-toggle"

const images = [
    "/img/nomadchef/d-nomadchef1.png",
    "/img/nomadchef/d-nomadchef2.png",
    "/img/nomadchef/d-nomadchef3.png",
    "/img/nomadchef/d-nomadchef4.png",
]

const productFeatures = [
  {
    title: "Learn Sustainable Cooking",
    description:
      "Master nutritious and flavorful cooking through guided lessons, recipes, and practical techniques designed for any skill level. Discover how to prepare satisfying meals without mammal meat while building confidence in creating sustainable dishes from simple, wholesome ingredients.",
    image: "/img/n-gradient/one.svg",
  },
  {
    title: "Portable Kitchen & Pantry",
    description:
      "Access a curated marketplace of long-storage ingredients and compact kitchenette essentials designed for cooking anywhere. Whether at home, traveling, camping, or living remotely, NomadChef provides the tools and ingredients needed to prepare healthy meals with convenience and flexibility.",
    image: "/img/n-gradient/two.svg",
  },
  {
    title: "Share & Connect",
    description:
      "Join a community of food enthusiasts who exchange recipes, cooking experiences, and sustainable living ideas. Share your creations, learn from others, and discover new ways to enjoy delicious, nutrient-rich meals while building meaningful connections around food.",
    image: "/img/n-gradient/three1.svg",
  },
]

export default function NomadChefPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
                <h1 className="text-4xl font-bold mb-4">Nomad Chef</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Factory Farming Problem | Meat Alternatives + Portable Cooking Solution</p>

                <ProductCarousel images={images} />
            </div>

            <div>
                <ProductCodeToggle
                    modelUrl="/models/d-nomadchef.glb"
                    features={productFeatures}
                    sourceCodeImage="/img/figma-designs/fig-nomadchef.png"
                    sourceCodeTitle="Code Title"
                    sourceCodeDescription="Code Description"
                ></ProductCodeToggle>

            </div>
        </div>
    )
}