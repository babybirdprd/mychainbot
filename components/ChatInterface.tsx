import React, { useState, ChangeEvent, MouseEvent } from 'react';
import ClearChatButton from './ClearChatButton';
import CopyMessageButton from './CopyMessageButton';

interface ChatMessage {
  role: string;
  content: string;
}

const ChatInterface: React.FC = () => {
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    // Send the user input to your API endpoint (e.g., /api/chat) and get the chatbot's response
    // Update the chatLog state with the new messages
  };

  const handleClearChat = () => {
    setChatLog([]);
  };

  const handleCopyMessage = (message: string) => {
    navigator.clipboard.writeText(message);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="lg:w-2/3">
        <ClearChatButton onClick={handleClearChat} />
        <div className="bg-gray-800 rounded-lg p-4">
          {chatLog.map((message, index) => (
            <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className="text-white">{message.content}</span>
              <CopyMessageButton onClick={() => handleCopyMessage(message.content)} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <textarea
            className="w-full bg-gray-800 text-white p-2 rounded-md"
            value={userInput}
            onChange={handleInputChange}
            rows={3}
          />
          <button
            className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-2"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;