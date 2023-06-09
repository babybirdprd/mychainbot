the app is: Advanced, modern, interactive GUI chatbot application using TypeScript and Next.js

the files we have decided to generate are: `/pages/chat.tsx`, `/pages/api/chat.ts`, `.env`, `userguide.md`, `readme.md`

Shared dependencies:

1. Exported variables:
   - `apiKey` (OpenAI API key)

2. Data schemas:
   - Chat message object: `{ role: string, content: string }`

3. DOM element id names:
   - None specified

4. Message names:
   - `userInput` (User's message)
   - `chatbotResponse` (Chatbot's response)

5. Function names:
   - `handleInputChange` (Handles user input change)
   - `handleSubmit` (Handles message submission)
   - `handleApiKeyChange` (Handles API key input change)
   - `handler` (API route handler)