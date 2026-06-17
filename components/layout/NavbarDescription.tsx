"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Image from "next/image";


export default function NavbarDescription() {
  const pathname = usePathname();

  const content: Record<string, ReactNode> = {
    "/": <p>→ Let's build a brand & product that aims to solve these problems…</p>,
    "/about": <p>→ Get to know me better</p>,
    "/contact": <p>→ Let's connect!</p>,
    "/resume": <p>→ Here's some of my work experiences</p>,
    "/locaiPage": <span className="flex items-center gap-4">→ <Image alt="" src="/img/locai.svg" width={70} height={70}></Image></span>,
    "/egardenPage": <span className="flex items-center gap-4">→ <Image alt="" src="/img/sunrise.svg" width={150} height={150}></Image></span>,
    "/viacademyPage": <span className="flex items-center gap-4">→ <Image alt="" src="/img/viacademy.svg" width={70} height={70}></Image></span>,
    "/nomadchefPage": <span className="flex items-center gap-4">→ <Image alt="" src="/img/nomadchef.svg" width={70} height={70}></Image></span>,
    "/toraPage": <span className="flex items-center gap-4">→ <Image alt="" src="/img/tora.svg" width={70} height={70}></Image></span>,
    "/xifizenPage": <span className="flex items-center gap-4">→ <Image alt="" src="/img/xifizen.svg" width={100} height={100}></Image></span>,
  };

  return (
    <div className="mx-6 text-xs sm:mx-4 sm:text-sm md:mx-0 md:text-base">
      {content[pathname] || "Welcome!"}
    </div>
  );
}