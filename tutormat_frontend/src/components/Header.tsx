// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Welcome to MathTutor / TutorMat!
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Your go-to app for solving math problems and learning algebra!
      </p>
    </header>
  );
};

export default Header;
