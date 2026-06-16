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
            value="source-code"
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
            Source Code
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

              <Link href="/" className="mt-6">
                <Button
                  variant="outline"
                  className="w-fit cursor-pointer rounded-full"
                >
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" /></svg>
                  Go to Live Site →
                </Button>
              </Link>

            </div>

            <div className="grid h-full md:grid-cols-[60%_40%]">
            </div>

          </CardContent>
        </div>


      </TabsContent>

      <TabsContent className="flex flex-col gap-8" value="source-code">
        <div>
          <CardContent className="grid md:grid-cols-2 gap-6 p-6">

            <Image width={1200} height={1200} alt="source-code" src={sourceCodeImage} className="rounded-xl"></Image>

            <div className="md:ml-15 flex h-full flex-col">

              <div>
                <CardTitle className="flex items-center gap-4 text-xl">
                  {sourceCodeTitle}
                </CardTitle>

                <CardDescription className="mt-3 max-w-md text-base">
                  {sourceCodeDescription}
                </CardDescription>
              </div>

              <Link href="/" className="mt-6">
                <Button
                  variant="outline"
                  className="w-fit cursor-pointer rounded-full"
                >
                  <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>

                  View Projects on GitHub
                </Button>
              </Link>

            </div>

          </CardContent>
        </div>

      </TabsContent>


    </Tabs>
  )
}
