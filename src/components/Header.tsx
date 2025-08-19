
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Jony Mia
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Skills</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
