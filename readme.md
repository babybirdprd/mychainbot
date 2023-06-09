# OpenAI Chatbot Application

This is a modern, interactive GUI chatbot application built using TypeScript and Next.js. The application interfaces with OpenAI's API to facilitate dynamic conversations with distinct, customizable AI characters. The design is sleek, modern, and user-friendly, utilizing Tailwind CSS.

## Getting Started

1. Clone the repository.
2. Install the required dependencies by running `npm install`.
3. Create a `.env` file in the root of the project and add your OpenAI API key:

```
OPENAI_API_KEY=your_actual_openai_api_key_here
```

4. Start the development server by running `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000`.

## Adding Logos

To add a logo to the application, place the logo image file in the `public` folder. Then, in the appropriate component or page file (e.g., `pages/index.tsx` or `components/Header.tsx`), add an `img` element with the `src` attribute pointing to the logo file:

```tsx
<img src="/your-logo-filename.ext" alt="Your Logo" />
```

Replace `your-logo-filename.ext` with the actual filename and extension of your logo image.

## User Guide

For a detailed explanation of how to use the application and its features, please refer to the `userguide.md` file.

## Contributing

Feel free to submit issues or pull requests if you have any suggestions or improvements for the project.