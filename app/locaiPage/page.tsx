"use client"

import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"
import ProductViewer from "@/components/ui/product-viewer"
import ProductCodeToggle from "@/components/ui/product-code-toggle"

const images = [
    "/img/locai/d-locai1.png",
    "/img/locai/d-locai2.png",
    "/img/locai/d-locai4.png",
    "/img/locai/d-locai3.png",
]

const productFeatures = [
 {
    title: "Sandbox OS Compartmentalization",
    description:
      "SandboxOS isolates apps, files, and workflows into secure virtual environments, preventing issues in one compartment from affecting the rest of the system. Users gain greater control over permissions, security, and resource allocation while maintaining a seamless experience across work, personal, and sensitive activities.",
    image: "/img/n-gradient/one1.svg",
  },
  {
    title: "AI Agents",
    description:
      "Locai AI Agents run entirely on-device, helping automate tasks, generate content, analyze information, and streamline workflows without relying on cloud services. By keeping processing local, users benefit from advanced AI capabilities while maintaining privacy, ownership of data, and complete control over their digital environment.",
    image: "/img/n-gradient/two.svg",
  },
  {
    title: "Widgets Builder",
    description:
      "Widgets Builder allows users to create custom tools and mini-applications using natural language. With assistance from AI Agents, ideas can be transformed into functional widgets tailored to specific workflows, making software customization faster, more accessible, and perfectly aligned with individual or business needs.",
    image: "/img/n-gradient/three1.svg",
  },
]

export default function LocaiPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black p-10">
                <h1 className="text-4xl font-bold mb-4">Locai</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">AI Problem | Ethical AI Solution</p>

                <ProductCarousel images={images} />
            </div>

            <div>
                <ProductCodeToggle 
                modelUrl="/models/mt-egarden.glb" 
                features={productFeatures} 
                sourceCodeImage="/img/figma-designs/fig-locai.png"
                sourceCodeTitle="Code Title"
                sourceCodeDescription="Code Description"
                ></ProductCodeToggle>

            </div>
        </div>
    )
}
