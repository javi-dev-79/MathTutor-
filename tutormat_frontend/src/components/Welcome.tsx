// src/components/Welcome.tsx
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition">
        Start
      </button>
    </div>
  );
};

export default Welcome;
