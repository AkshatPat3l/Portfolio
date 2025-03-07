import { useState } from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Akshat Patel
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link className="hover:text-gray-400" to="/">Home</Link>
          <Link className="hover:text-gray-400" to="/projects">Projects</Link>
          <Link className="hover:text-gray-400" to="/about">About</Link>
          <Link className="hover:text-gray-400" to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
          <Link className="hover:text-gray-400" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="hover:text-gray-400" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link className="hover:text-gray-400" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="hover:text-gray-400" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
