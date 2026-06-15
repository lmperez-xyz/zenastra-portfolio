import Navbar from "@/components/layout/Navbar"

export default function Contact() {
    return (
        <>  
        <Navbar></Navbar>
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center">
                Feel free to reach out to me via email or social media!
            </p>
        </div>
        </>
    )
}
