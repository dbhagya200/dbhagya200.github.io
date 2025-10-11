import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 right-0 left-0 py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="text-right text-sm text-white">
          {' '}
          <a
            href="https://bootstrapmade.com/"
            className="text-green-500 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Dilini Bhagya Warnekulasooriya
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;