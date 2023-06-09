import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface CharacterFormProps {
  onSubmit: (name: string, systemPrompt: string, temperature: number) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [systemPrompt, setSystemPrompt] = useState<string>('');
  const [temperature, setTemperature] = useState<number>(1);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSystemPromptChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSystemPrompt(event.target.value);
  };

  const handleTemperatureChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(event.target.value));
  };

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    onSubmit(name, systemPrompt, temperature);
  };

  return (
    <form>
      <label htmlFor="name" className="text-sm font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        className="border rounded-md shadow-sm mb-4 w-full p-2"
      />
      <label htmlFor="systemPrompt" className="text-sm font-medium mb-2">
        System Prompt
      </label>
      <textarea
        id="systemPrompt"
        value={systemPrompt}
        onChange={handleSystemPromptChange}
        className="border rounded-md shadow-sm mb-4 w-full p-2"
        placeholder="You are a helpful assistant."
      />
      <label htmlFor="temperature" className="text-sm font-medium mb-2">
        Temperature
      </label>
      <input
        type="range"
        id="temperature"
        min="0"
        max="2"
        step="0.1"
        value={temperature}
        onChange={handleTemperatureChange}
        className="mb-4 w-full"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Create
      </button>
    </form>
  );
};

export default CharacterForm;