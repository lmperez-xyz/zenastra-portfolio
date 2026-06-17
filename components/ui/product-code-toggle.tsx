"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import ProductViewer from "./product-viewer"
import Image from "next/image"

import LoadingImage from "@/components/layout/LoadingImage"

type Feature = {
  image: string
  title: string
  description: string
}

type ProductCodeToggleProps = {
  modelUrl: string
  features: Feature[]
  sourceCodeImage: string
  sourceCodeTitle: string
  sourceCodeDescription: string
}



export default function ProductCodeToggle({ modelUrl, features, sourceCodeImage, sourceCodeTitle, sourceCodeDescription }: ProductCodeToggleProps) {
  const [tab, setTab] = useState("d-product")
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <Tabs value={tab} onValueChange={setTab} className="p-10 w-full">
      <div className="flex justify-center">

        <TabsList className="relative mb-5 rounded-full bg-zinc-800 py-6 px-2">

          <motion.div
            layoutId="product-pill"
            className={`
      absolute
      top-1
      bottom-1
      rounded-full
      bg-white
      z-0
      ${tab === "d-product"
                ? "left-1 w-[130px]"
                : "left-[130px] w-[140px]"
              }
    `}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
            }}
          />

          <TabsTrigger
            value="d-product"
            className="
      relative z-10
      cursor-pointer
      rounded-full
      !px-6
      !py-4
      data-[state=active]:!bg-transparent
      data-[state=active]:!text-black
      data-[state=active]:!shadow-none

    "
          >
            3D Product
          </TabsTrigger>

          <TabsTrigger
            value="figma-layout"
            className="
      relative z-10
      cursor-pointer
      rounded-full
      !px-6
      !py-4
      data-[state=active]:!bg-transparent
      data-[state=active]:!text-black
      data-[state=active]:!shadow-none

    "
          >
            Figma Layout
          </TabsTrigger>

        </TabsList>
      </div>
      <TabsContent className="flex flex-col gap-8" value="d-product">
        <div>
          <CardContent className="grid md:grid-cols-2 gap-6 p-6">

            <ProductViewer modelUrl={modelUrl}></ProductViewer>

            <div className="flex h-full flex-col">
              <div className="flex gap-4 py-5">
                {features.map((feature, index) => (
                  <button className="cursor-pointer" key={feature.title} onClick={() => setActiveFeature(index)}>
                    <Image width={50} height={50} alt={feature.title} src={feature.image} className={`rounded-xl transition-all duration-200 ${activeFeature === index ? "opacity-100 scale-100" : "opacity-40 hover:opacity-80"}`}></Image>
                  </button>
                ))}

              </div>
              <div>
                <CardTitle className="flex items-center gap-4 text-xl">
                  {features[activeFeature].title}
                </CardTitle>

                <CardDescription className="mt-3 max-w-md text-base">
                  {features[activeFeature].description}
                </CardDescription>
              </div>

              <Button variant="outline" className="w-fit mt-10 rounded-full">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M102.8 57.3C108.2 51.9 116.6 51.1 123 55.3L241.9 134.5C250.8 140.4 256.1 150.4 256.1 161.1L256.1 210.7L346.9 301.5C380.2 286.5 420.8 292.6 448.1 320L574.2 446.1C592.9 464.8 592.9 495.2 574.2 514L514.1 574.1C495.4 592.8 465 592.8 446.2 574.1L320.1 448C292.7 420.6 286.6 380.1 301.6 346.8L210.8 256L161.2 256C150.5 256 140.5 250.7 134.6 241.8L55.4 122.9C51.2 116.6 52 108.1 57.4 102.7L102.8 57.3zM247.8 360.8C241.5 397.7 250.1 436.7 274 468L179.1 563C151 591.1 105.4 591.1 77.3 563C49.2 534.9 49.2 489.3 77.3 461.2L212.7 325.7L247.9 360.8zM416.1 64C436.2 64 455.5 67.7 473.2 74.5C483.2 78.3 485 91 477.5 98.6L420.8 155.3C417.8 158.3 416.1 162.4 416.1 166.6L416.1 208C416.1 216.8 423.3 224 432.1 224L473.5 224C477.7 224 481.8 222.3 484.8 219.3L541.5 162.6C549.1 155.1 561.8 156.9 565.6 166.9C572.4 184.6 576.1 203.9 576.1 224C576.1 267.2 558.9 306.3 531.1 335.1L482 286C448.9 253 403.5 240.3 360.9 247.6L304.1 190.8L304.1 161.1L303.9 156.1C303.1 143.7 299.5 131.8 293.4 121.2C322.8 86.2 366.8 64 416.1 63.9z" /></svg>

                For Development
              </Button>

            </div>

            <div className="grid h-full md:grid-cols-[60%_40%]">
            </div>

          </CardContent>
        </div>

      </TabsContent>

      <TabsContent className="flex flex-col gap-8" value="figma-layout">
        <div>
          <CardContent className="grid gap-6 p-6">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <LoadingImage
                src={sourceCodeImage}
                alt="Figma Layout"
                fill
                className="object-cover"
              />
            </div>


          </CardContent>
        </div>

      </TabsContent>


    </Tabs>
  )
}
