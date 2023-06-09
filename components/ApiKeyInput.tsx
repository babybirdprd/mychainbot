import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface ApiKeyInputProps {
  onApiKeySave: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeySave }) => {
  const [apiKey, setApiKey] = useState<string>('');

  const handleApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleSaveClick = (event: MouseEvent) => {
    event.preventDefault();
    onApiKeySave(apiKey);
  };

  return (
    <div className="flex items-center">
      <input
        type="password"
        value={apiKey}
        onChange={handleApiKeyChange}
        placeholder="Enter your OpenAI API key"
        className="border rounded-md shadow-sm px-3 py-2 mr-4"
      />
      <button
        onClick={handleSaveClick}
        className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Save
      </button>
    </div>
  );
};

export default ApiKeyInput;