"use client";

import { usePathname } from "next/navigation";

export default function NavbarDescription() {
  const pathname = usePathname();

  const descriptions: Record<string, string> = {
    "/": "Let's build a brand & product that aims to solve these problems…",
    "/about": "Learn more about me.",
    "/resume": "Explore my projects.",
    "/contact": "Get in touch with me.",
  };

  return (
    <p className="mx-6 text-xs sm:mx-4 sm:text-sm md:mx-0 md:text-base">
      {descriptions[pathname] || "Welcome!"}
    </p>
  );
}