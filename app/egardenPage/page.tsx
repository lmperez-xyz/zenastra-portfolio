"use client"

import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"
import ProductCodeToggle from "@/components/ui/product-code-toggle"

const images = [
    "/img/egarden/d-egarden1.png",
    "/img/egarden/d-egarden2.png",
    "/img/egarden/d-egarden3.png",
    "/img/egarden/d-eg4.png",
]

const productFeatures = [
  {
    title: "Nature-Inspired Dining",
    description:
      "Enjoy thoughtfully prepared meals made from versatile local ingredients in a relaxing environment filled with greenery. Sustainable practices such as banana leaf wrappers, bamboo skewers, and edible pastry dishes reduce waste while creating a unique and memorable dining experience.",
    image: "/img/n-gradient/one.svg",
  },
  {
    title: "Culture & Community",
    description:
      "Connect with people across generations through weekend workshops, interactive activities, and cultural experiences. Learn traditional crafts, food preparation techniques, and local stories while building meaningful relationships within a welcoming community-centered space.",
    image: "/img/n-gradient/two1.svg",
  },
  {
    title: "AI & VR Adventures",
    description:
      "Transform your visit with immersive AI and VR experiences that let you personalize stories, visuals, sounds, and aromas. Explore unique adventures tailored to your preferences, blending technology and nature to create an unforgettable multi-sensory journey.",
    image: "/img/n-gradient/three.svg",
  },
]

export default function EgardenPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center font-sans p-10">
                <h1 className="text-4xl font-semibold mb-4">Egarden</h1>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-8">Climate Change Problem → Eco Cafe Solution</p>

                <ProductCarousel images={images} />
            </div>
            <div>
                <ProductCodeToggle 
                modelUrl="/models/m-egarden.glb" 
                features={productFeatures}
                sourceCodeImage="/img/figma-designs/fig-egarden.png"
                sourceCodeTitle="Code Title"
                sourceCodeDescription="Code Description"
                ></ProductCodeToggle>
            </div>
        </div>
    )
}