import { NextApiRequest, NextApiResponse } from 'next';

interface Character {
  id: string;
  name: string;
  systemPrompt: string;
  temperature: number;
}

let characters: Character[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(characters);
  } else if (req.method === 'POST') {
    const { name, systemPrompt, temperature } = req.body;
    const newCharacter: Character = {
      id: Date.now().toString(),
      name,
      systemPrompt,
      temperature,
    };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
  } else if (req.method === 'PUT') {
    const { id, name, systemPrompt, temperature } = req.body;
    const characterIndex = characters.findIndex((char) => char.id === id);

    if (characterIndex === -1) {
      res.status(404).json({ error: 'Character not found.' });
    } else {
      characters[characterIndex] = { id, name, systemPrompt, temperature };
      res.status(200).json(characters[characterIndex]);
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    characters = characters.filter((char) => char.id !== id);
    res.status(200).json({ message: 'Character removed.' });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}