'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Message = {
    role: 'user' | 'assistant';
    text: string;
};

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]); const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    async function sendMessage() {
        if (!input.trim() || loading) return;

        const userMessage = input;

        setMessages((prev) => [
            ...prev,
            {
                role: 'user',
                text: userMessage,
            },
        ]);

        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    text: data.reply,
                },
            ]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="mx-auto flex h-dvh max-w-3xl flex-col p-4">
            <div className='flex flex-col items-center justify-center mb-6'>
                <h1 className="mt-10 text-3xl">
                    Portfolio AI Assistant
                </h1>
                <p className='text-sm text-zinc-500'>* Currently Limited</p>
            </div>

            <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-zinc-700">
                <div className='flex justify-center'>
                    <Link href="/contact">
                        <Button className="cursor-pointer m-5 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM229.4 385.9C249.8 413.9 282.8 432 320 432C357.2 432 390.2 413.9 410.6 385.9C418.4 375.2 433.4 372.8 444.1 380.6C454.8 388.4 457.2 403.4 449.4 414.1C420.3 454 373.2 480 320 480C266.8 480 219.7 454 190.6 414.1C182.8 403.4 185.2 388.4 195.9 380.6C206.6 372.8 221.6 375.2 229.4 385.9zM240 244C224.5 244 212 256.5 212 272L212 280C212 291 203 300 192 300C181 300 172 291 172 280L172 272C172 234.4 202.4 204 240 204C277.6 204 308 234.4 308 272L308 280C308 291 299 300 288 300C277 300 268 291 268 280L268 272C268 256.5 255.5 244 240 244zM372 272L372 280C372 291 363 300 352 300C341 300 332 291 332 280L332 272C332 234.4 362.4 204 400 204C437.6 204 468 234.4 468 272L468 280C468 291 459 300 448 300C437 300 428 291 428 280L428 272C428 256.5 415.5 244 400 244C384.5 244 372 256.5 372 272z" /></svg>
                            Let's Work Together</Button>
                    </Link>
                </div>

                <div className="flex-1 overflow-y-auto p-4">

                    {messages.length === 0 && (
                        <div className="flex h-full items-center justify-center">
                            <h2 className="text-center text-2xl text-zinc-400">
                                What kind of product shall we build?
                            </h2>
                        </div>
                    )}

                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user'
                                    ? 'justify-end'
                                    : 'justify-start'
                                    }`}
                            >
                                <div className="max-w-[80%] rounded-lg bg-zinc-800 px-5 py-3 text-white">
                                    <div className="prose prose-invert max-w-none">
                                        <ReactMarkdown>
                                            {message.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="text-zinc-500 animate-pulse">
                                Thinking...
                            </div>
                        )}
                    </div>

                </div>

                <div className="p-4">
                    <div className="flex gap-2">
                        <input
                            value={input}
                            placeholder='Ask about my projects…'
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-2 focus:outline-none"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') sendMessage();
                            }}
                        />

                        <Button
                            onClick={sendMessage}
                            className="cursor-pointer rounded-full bg-white p-6 text-black"
                        >
                            <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" /></svg>
                        </Button>
                    </div>
                </div>

            </div>
        </main>
    );
}