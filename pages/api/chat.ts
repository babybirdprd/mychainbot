import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userInput = req.body.userInput;
    const apiKey = req.body.apiKey;

    const configuration = new Configuration({ apiKey });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userInput }
        ]
      });

      const chatbotResponse = response.data.choices[0].message.content;

      res.status(200).json({ chatbotResponse });
    } catch (error) {
      res.status(500).json({ error: 'Unexpected error.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}