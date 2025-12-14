'use server'
import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an expert software engineer assistant. Your goal is to generate a conventional commit message based on the user's input.
The user will provide:
1. Branch Name
2. Component/Area Name
3. A detailed description of the changes

You must:
1. Determine the conventional commit type (feat, fix, refactor, style, docs, test, chore, perf, ci, build, revert) based on the description.
2. Summarize the description into a concise, imperative sentence (max 100 characters for the subject line).
3. output ONLY the final commit string in this format:
BRANCH_NAME - type(component): concise description
`

export async function generateCommitMessage(branch: string, component: string, description: string) {
    const token = process.env.HUGGINGFACE_ACCESS_TOKEN
    if (!token) {
        throw new Error("HUGGINGFACE_ACCESS_TOKEN is not defined")
    }
    const hf = new InferenceClient(token)

    try {
        const response = await hf.chatCompletion({
            model: "Qwen/Qwen2.5-Coder-32B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Branch: ${branch}\nComponent: ${component}\nDescription: ${description}\n\nGenerate the commit message.` },
            ],
            max_tokens: 128,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error("AI Generation Error:", err)
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        throw new Error(`AI Error: ${errorMessage}`)
    }
}