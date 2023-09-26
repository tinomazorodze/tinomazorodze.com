import React from 'react';

interface BlockquoteProps {
  children: any;
}

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-gray-500 pl-4 py-2 mb-4">
      <p className="text-lg italic">{children}</p>
    </blockquote>
  );
};

export default Blockquote;
