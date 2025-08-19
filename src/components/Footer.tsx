const Footer = () => {
  return (<footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Jony Mia</h3>
          <p className="text-gray-400 mb-6">Web Developer & Digital Craftsman</p>
          
          {/* <div className="flex justify-center space-x-8 mb-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
           */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© 2025 Jony Mia. All rights reserved. </p>
          </div>
        </div>
      </div>
    </footer>);
};
export default Footer;