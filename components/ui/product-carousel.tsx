"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProductCarouselProps = {
  images: string[];
};

const AUTOPLAY_DURATION = 5000;

export function ProductCarousel({ images }: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || images.length <= 1) return;

    const timer = setTimeout(() => {
      const lastIndex = images.length - 1;

      if (current >= lastIndex) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, AUTOPLAY_DURATION);

    return () => clearTimeout(timer);
  }, [current, api, images.length]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="w-full cursor-grab active:cursor-grabbing select-none"
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-3 basis-[85%] md:basis-[70%]"
            >
              <div className="overflow-hidden rounded-xl border">
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  width={1600}
                  height={900}
                  draggable={false}
                  className="block w-full h-auto pointer-events-none"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-4 cursor-pointer !bg-white text-black hover:!bg-black/60" />
        <CarouselNext className="-right-4 cursor-pointer !bg-white text-black hover:!bg-black/60" />
      </Carousel>

      {/* Progress Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to image ${index + 1}`}
            className="relative"
          >
            {current === index ? (
              <div className="relative h-2 w-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  key={current}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: AUTOPLAY_DURATION / 1000,
                    ease: "linear",
                  }}
                  className="absolute left-0 top-0 h-full bg-black dark:bg-white"
                />
              </div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-700" />
            )}
          </button>
        ))}
      </div>
    </>
  );
}