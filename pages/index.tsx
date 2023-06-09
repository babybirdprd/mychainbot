import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const HomePage: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/chat');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <button
        onClick={handleClick}
        className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Start Chat
      </button>
    </div>
  );
};

export default HomePage;