import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterForm from './CharacterForm';

interface Character {
  id: number;
  name: string;
  systemPrompt: string;
  temperature: number;
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await axios.get('/api/characters');
    setCharacters(response.data);
  };

  const handleAddCharacter = (newCharacter: Character) => {
    setCharacters([...characters, newCharacter]);
  };

  const handleRemoveCharacter = async (id: number) => {
    await axios.delete(`/api/characters/${id}`);
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="bg-gray-800 p-4">
      <h2 className="text-white text-xl mb-4">AI Characters</h2>
      <CharacterForm onAddCharacter={handleAddCharacter} />
      <div className="mt-4 space-y-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-purple-700 rounded-lg shadow p-4"
          >
            <h3 className="text-white text-lg">{character.name}</h3>
            <button
              className="text-white text-sm mt-2"
              onClick={() => handleRemoveCharacter(character.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;