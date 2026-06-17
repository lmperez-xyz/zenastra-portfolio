"use client"

import Navbar from "@/components/layout/Navbar"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "sonner"
import { useState } from "react"

import Panorama from "@/components/ui/panorama"


export default function Contact() {
    const [sending, setSending] = useState(false)

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)

        try {
            const form = e.currentTarget
            const formData = new FormData(form)

            const response = await fetch("https://formspree.io/f/mpqenvpr", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })

            if (response.ok) {
                toast.success("Message Sent Successfully!")
                form.reset()
            } else {
                toast.error("Failed To Send Message")
            }
        } finally {
            setSending(false);
        }
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar></Navbar>

            <div className="overflow-hidden flex justify-center px-4 py-30">
                <div className="grid md:grid-cols-2 gap-12 w-[90%] md:w-full max-w-4xl items-stretch">
                    <Card className="md:translate-x-25 w-full p-6 flex flex-col items-center justify-center gap-3">
                        <h1 className="text-4xl font-semibold mb-4">Say Hi</h1>
                        <form onSubmit={handleSubmit}
                            className="flex flex-col w-full gap-2">
                            <Input type="name" name="name" className="p-5 dark:bg-black/70" placeholder="Your Name"></Input>
                            <Input type="email" name="email" className="p-5 dark:bg-black/70" placeholder="Your Email"></Input>
                            <Textarea name="message" className="p-5 dark:bg-black/70" placeholder="Your Message"></Textarea>
                            <Button className={`cursor-pointer mt-4 px-6 rounded-full ${sending ? 'animate-pulse' : ''}`} type="submit" disabled={sending} >{sending ? "Sending…" : "Send"}</Button>
                        </form>
                    </Card>


                    <div className="md:translate-x-35 w-full flex flex-col justify-center items-start gap-6 min-h-full">
                        <Link target="_blank" href="https://www.linkedin.com/in/lm-perez/"><Button className="cursor-pointer" variant="link">
                            <svg width={30} height={30} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" /></svg>
                            linkedin.com/in/lm-perez/
                        </Button></Link>

                        <Button variant='ghost'>
                            <svg width={30} height={30} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>
                            azerone127@gmail.com
                        </Button>

                        <Link href="/">
                            <Button className="cursor-pointer" variant="link">
                                <svg width={30} height={30} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" /></svg>
                                zenastra.xyz
                            </Button>
                        </Link>
                    </div>


                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <p className="text-gray-500">– Wanna go on an event? –</p>
                        </TooltipTrigger>
                        <TooltipContent><p>Workshops and Conferences</p></TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Panorama panoImg="/img/pano/carPano.PNG"></Panorama>
            </div>
        </div>
    )
}
