# CommitCraft
### Standardizing Development at PABAU

**CommitCraft** is an internal tool designed to streamline our git workflow and ensure consistency across our development team at **Pabau**. 

We all know the struggle of writing meaningful commit messages after a long coding session. It's easy to default to "fixes" or "updates", but that hurts our project history and changelogs. CommitCraft solves this by using AI to generate perfectly formatted **Conventional Commits** automatically.

---

## What it does

Instead of guessing the right type or scope, you simply provide:
1. **Branch Name**: (e.g., `PABAU2-34567`) - automatically tracked.
2. **Component/Area**: (e.g., `invoices`, `client-card`).
3. **Description**: A detailed description of what you did.

**The AI Agent (Qwen-2.5-Coder) then:**
- Analyzes your description.
- Determines the correct type (`feat`, `fix`, `refactor`, `perf`, etc.).
- Summarizes your changes into a concise, imperative subject line.
- Formats it all into our standard: `BRANCH - type(component): description`.

## Tech Stack

Built with speed and aesthetics in mind:
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **AI Backend**: Hugging Face Inference API (`Qwen/Qwen2.5-Coder-32B-Instruct`)
- **UI/UX**: Custom Dark Mode Design + [Ant Design](https://ant.design/)
- **Styling**: CSS Variables & Modules for a consistent theme.

## Getting Started

1. **Clone the repo**
2. **Install dependencies**: `npm install`
3. **Set up Environment**: Create a `.env` file with your `HUGGINGFACE_ACCESS_TOKEN`.
4. **Run it**: `npm run dev`

---
*Built for the PABAU team.*
