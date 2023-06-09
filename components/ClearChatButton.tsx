import React, { MouseEvent } from 'react';

interface ClearChatButtonProps {
  onClearChat: () => void;
}

const ClearChatButton: React.FC<ClearChatButtonProps> = ({ onClearChat }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    onClearChat();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      Clear Chat
    </button>
  );
};

export default ClearChatButton;