import Navbar from "@/components/layout/Navbar"
import { ProductCarousel } from "@/components/ui/product-carousel"
import ProductViewer from "@/components/ui/product-viewer"
import ProductCodeToggle from "@/components/ui/product-code-toggle"

const images = [
    "/img/viacademy/d1.png",
    "/img/viacademy/d2.png",
    "/img/viacademy/d3.png",
    "/img/viacademy/d4.png",
]

const productFeatures = [
  {
    title: "Hands-On Learning",
    description:
      "Vi Academy emphasizes experiential education where knowledge is gained through practice, collaboration, and real-world application. Students learn valuable skills by actively participating in projects, workshops, and daily activities that build confidence, competence, and self-reliance.",
    image: "/img/n-gradient/one2.svg",
  },
  {
    title: "Sustainable Living Skills",
    description:
      "Participants develop practical expertise in permaculture, ecological design, renewable energy, natural building, and mindful living. These disciplines provide the foundation for creating resilient communities, meaningful livelihoods, and environmentally responsible solutions for the future.",
    image: "/img/n-gradient/two.svg",
  },
  {
    title: "Community & Empowerment",
    description:
      "Students, mentors, and practitioners live and learn together in a supportive environment built on dignity, compassion, and shared growth. Through collaboration and mutual support, Vi Academy empowers individuals to overcome barriers, unlock potential, and create lasting positive change.",
    image: "/img/n-gradient/three2.svg",
  },
]

export default function ViAcademyPage() {
    return (
        <div className="dark:bg-black">
            <Navbar></Navbar>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-10">
                <h1 className="text-4xl font-bold mb-4">ViAcademy</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Inequality Problem | Practical Education Eco Villages Solution</p>

                <ProductCarousel images={images} />
            </div>

            <div>
                <ProductCodeToggle 
                                modelUrl="/models/m-vi.glb" 
                                features={productFeatures}
                                sourceCodeImage="/img/figma-designs/fig-viacademy.png"
                                sourceCodeTitle="Code Title"
                                sourceCodeDescription="Code Description"
                                ></ProductCodeToggle>˛
            </div>
        </div>
    )
}