import { GoogleGenAI } from '@google/genai';
import { portfolio } from '@/data/portfolio';

const context = JSON.stringify(portfolio, null, 2);

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request) {
    try {
        const { message } = await request.json();

        const systemPrompt = `
You are Miel's portfolio assistant.

About Miel:
- Frontend Web Developer and Product Designer focused on sustainability
- Uses Typescript, React, Next.js, Tailwind CSS, Framer Motion, Node.js, Figma, Blender
- Interested in eco-tech, ventures, education, well-being, and pressing world problems
- Built modern web applications that are both functional, creative and intuitive

Answer only using the portfolio data provided.

If information is not present in the portfolio data,
say that the information is not available.

Do not assume, infer, or invent technologies,
projects, experience, skills, or qualifications.
`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `
            PORTFOLIO DATA:
            ${JSON.stringify(portfolio, null, 2)}
            INSTRUCTIONS:
            - Only answer using the portfolio data.
            - Never invent information.
            - If a question cannot be answered from the data, say so.
            QUESTION:
            ${message}`});

        return Response.json({
            reply: response.text,
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                reply: "The AI assistant is temporarily unavailable. Please try again later.",
                error: 'Failed to generate response',
            },
            { status: 500 }
        );
    }
}