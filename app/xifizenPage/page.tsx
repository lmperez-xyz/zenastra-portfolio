import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"
import ProductViewer from "@/components/ui/product-viewer"
import ProductCodeToggle from "@/components/ui/product-code-toggle"

const images = [
    "/img/xifizen/d-x1.png",
    "/img/xifizen/d-xi2.png",
    "/img/xifizen/d-x3.png",
    "/img/xifizen/d-x4.png",
]

const productFeatures = [
    {
        title: "Dashboard Analytics",
        description: "Track revenue and business metrics in real time.",
        image: "/img/n-gradient/one.svg",
    },
    {
        title: "Reporting System",
        description: "Generate reports and export business data.",
        image: "/img/n-gradient/two.svg",
    },
    {
        title: "Workflow Automation",
        description: "Automate repetitive tasks and save time.",
        image: "/img/n-gradient/three.svg",
    },
]

export default function XifizenPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
                <h1 className="text-4xl font-bold mb-4">Xifizen</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Health Problem | Flow & Attention Scalling Solution</p>

                <ProductCarousel images={images} />
            </div>

            <div>
                <ProductCodeToggle
                    modelUrl="/models/mt-egarden.glb"
                    features={productFeatures}
                    sourceCodeImage="/img/source-code.png"
                    sourceCodeTitle="Code Title"
                    sourceCodeDescription="Code Description"
                ></ProductCodeToggle>
            </div>
        </div>
    )
}