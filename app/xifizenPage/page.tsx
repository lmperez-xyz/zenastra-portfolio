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
    title: "The Four Domains of Wellness",
    description:
      "Xifizen helps individuals cultivate balanced growth across four interconnected dimensions of wellbeing: Spiritual, Mental, Physical, and Relational. By integrating insights from science and the humanities, participants gain practical tools for deeper self-understanding and meaningful life improvement.",
    image: "/img/n-gradient/one2.svg",
  },
  {
    title: "Flow & Attention Scaling",
    description:
      "At the heart of Xifizen are practices that strengthen focus, awareness, and intentional living. Through Flow and Attention Scaling, individuals learn to better direct their energy, improve cognition, reduce distractions, and develop sustainable habits that support long-term wellbeing.",
    image: "/img/n-gradient/two.svg",
  },
  {
    title: "Community-Powered Movement",
    description:
      "Xifizen is designed as a mission-driven initiative brought to life through the support of generous contributors and community advocates. By funding its development through platforms like Kickstarter, supporters help create accessible programs, experiences, and resources that empower people to thrive together.",
    image: "/img/n-gradient/three2.svg",
  },
]


export default function XifizenPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
                <h1 className="text-4xl font-semibold mb-4">Xifizen</h1>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-8">Health Problem → Flow & Attention Scalling Solution</p>

                <ProductCarousel images={images} />
            </div>

            <div>
                <ProductCodeToggle
                    modelUrl="/models/m-xifizen.glb"
                    features={productFeatures}
                    sourceCodeImage="/img/figma-designs/fig-xifizen.png"
                    sourceCodeTitle="Code Title"
                    sourceCodeDescription="Code Description"
                ></ProductCodeToggle>
            </div>
        </div>
    )
}