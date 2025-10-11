// Home.tsx
import React from 'react';
import '../App.css';

const Home: React.FC = () => {
  return (
    <section id="header" className="min-h-screen flex items-center justify-center">
      {/* Content is handled by Header component when not scrolled */}
      <div className="hidden">
        {/* This ensures the header section exists for navigation */}
      </div>
    </section>
  );
};

export default Home;