# User Guide

Welcome to the user guide for our advanced, modern, interactive GUI chatbot application using TypeScript and Next.js. This guide will walk you through the main features of the application and how to use them.

## Table of Contents

1. [GUI Chatbot Interface](#gui-chatbot-interface)
2. [Interactive AI Characters](#interactive-ai-characters)
3. [Custom Settings](#custom-settings)
4. [API Key Input](#api-key-input)

### GUI Chatbot Interface

To access the chat interface, navigate to the `/pages/chat.tsx` page in your browser. The chat interface will be displayed in the center or the right side of the screen, depending on the viewport width.

You can type your message in the text area at the bottom of the chat interface and click the "Send" button to send your message. The chatbot will respond, and the conversation will be displayed in the chat area.

To clear the chat history, click the "Clear Chat" button located above the chat interface.

### Interactive AI Characters

To create a new AI character, click the "Add new character" button located at the top of the sidebar on the left side of the interface. A form will appear, allowing you to enter the character's name, system prompt, and temperature.

- **Name:** Enter the character's name in the text input field.
- **System Prompt:** Enter a system message in the text area input to define the character's behavior. Use the provided example as a guide.
- **Temperature:** Adjust the slider input to control the randomness of the character's responses.

Click the "Create" button to add the new character to the sidebar. You can create as many characters as you like.

To edit a character's settings, click the "Settings" button next to the character's name in the sidebar. The same form used for character creation will appear, pre-filled with the character's current settings. Make your changes and click the "Save" button to update the character's settings.

To remove a character, click the "Remove" button next to the character's name in the sidebar.

### Custom Settings

To access the custom settings for a character, click the "Settings" button next to the character's name in the sidebar. The settings menu will provide two customization options:

- **System Prompt:** Update the character's behavior by modifying the system message in the text area input.
- **Temperature:** Adjust the slider input to control the randomness of the character's responses.

After making changes, click the "Save" button to apply the new settings to the character.

### API Key Input

To enter your OpenAI API key, navigate to the designated input field in the settings or configuration page. Enter your API key in the password-type input field to keep it hidden. Click the "Save" button next to the input field to store your API key for future requests to the OpenAI API.

Please note that the API key should be used securely and not exposed in client-side code or network requests viewable by browser developer tools.

Now you're ready to enjoy the full functionality of the chatbot application. Have fun interacting with your AI characters!