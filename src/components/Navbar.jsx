import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition-colors duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
