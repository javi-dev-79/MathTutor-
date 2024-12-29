// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="text-center">
        <p className="text-sm">© 2024 MathTutor, All Rights Reserved</p>
        <p className="text-sm">
          Built with ❤️ using React and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {/* Enlaces a redes sociales */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm mt-4">
          <a
            href="mailto:contact@mathtutor.com"
            className="text-white hover:text-blue-400"
          >
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
