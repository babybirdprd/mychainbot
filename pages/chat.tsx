import React, { useState, ChangeEvent, MouseEvent } from 'react';
import ChatInterface from '../components/ChatInterface';
import CharacterList from '../components/CharacterList';
import CharacterForm from '../components/CharacterForm';
import ApiKeyInput from '../components/ApiKeyInput';

const ChatPage: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');

  const handleApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <ApiKeyInput apiKey={apiKey} handleApiKeyChange={handleApiKeyChange} />
          <CharacterForm />
          <CharacterList />
        </div>
        <div className="w-full lg:w-2/3">
          <ChatInterface apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;