import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-600">
        <p>© {new Date().getFullYear()} Career Maturity Test. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;