import React, { useState } from 'react';

interface CopyMessageButtonProps {
  message: string;
}

const CopyMessageButton: React.FC<CopyMessageButtonProps> = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(message).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopyClick}
      className="text-purple-600 hover:text-purple-800 focus:outline-none"
    >
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyMessageButton;