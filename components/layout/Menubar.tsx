"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="cursor-pointer"> <Menu /> </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>LM Perez</SheetTitle>
          <SheetDescription>
            Frontend Developer | Product Designer
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Link href="/" className="text-lg px-5 py-3 hover:outline rounded">Projects</Link>
            <Link href="/about" className="text-lg px-5 py-3 hover:outline rounded">About</Link>
            <Link href="/contact" className="text-lg px-5 py-3 hover:outline rounded">Contact</Link>
            <Link href="/resume" className="text-lg px-5 py-3 hover:outline rounded">Resume</Link>
          </div>
          <div className="grid gap-3">

          </div>
        </div>

        <div className="flex flex-row w-full justify-center">
          <SheetFooter>
            <SheetClose asChild>
              <Link href="/#aiChat">
                <Button className="w-full rounded-full p-5 cursor-pointer" onClick={() =>
                  document
                    .getElementById("aiChat")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                  AI Chat
                </Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}
