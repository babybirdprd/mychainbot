import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface SettingsFormProps {
  character: {
    name: string;
    systemPrompt: string;
    temperature: number;
  };
  onSave: (updatedCharacter: {
    name: string;
    systemPrompt: string;
    temperature: number;
  }) => void;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ character, onSave }) => {
  const [name, setName] = useState<string>(character.name);
  const [systemPrompt, setSystemPrompt] = useState<string>(character.systemPrompt);
  const [temperature, setTemperature] = useState<number>(character.temperature);

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
    onSave({ name, systemPrompt, temperature });
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
        className="border rounded-md shadow-sm mb-4 w-full"
      />
      <label htmlFor="systemPrompt" className="text-sm font-medium mb-2">
        System Prompt
      </label>
      <textarea
        id="systemPrompt"
        value={systemPrompt}
        onChange={handleSystemPromptChange}
        className="border rounded-md shadow-sm mb-4 w-full"
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
        onClick={handleSubmit}
        className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Save
      </button>
    </form>
  );
};

export default SettingsForm;