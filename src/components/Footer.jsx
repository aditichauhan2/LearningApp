import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-[270px] w-[calc(100%-270px)] bg-white shadow-md px-6 py-3 flex justify-between items-center text-gray-500 text-sm z-50">
      <span>© 2024, Card91</span>
      <div className="space-x-4">
        <a href="#" className="text-blue-500 hover:underline">License</a>
        <a href="#" className="text-blue-500 hover:underline">Documentation</a>
        <a href="#" className="text-blue-500 hover:underline">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
