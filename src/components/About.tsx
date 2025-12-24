
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                WordPress Developer 
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Jony Mia, a passionate web developer specializing in WordPress development 
                with extensive experience in creating custom themes, plugins, and dynamic websites. 
                My expertise spans across modern web technologies including PHP, React, and JavaScript.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
               I developed websites for attract user to the website and improve user experience.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                As a WordPress expert, I've built countless custom websites, e-commerce solutions, 
                and complex web applications. I excel in custom theme development, plugin creation, 
                WooCommerce customization, and performance optimization. My approach combines 
                clean, maintainable code with user-centered design principles.
              </p>
              {/* <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond WordPress development, I'm also a skilled data entry specialist with expertise 
                in accurate data processing, database management, and content organization. I provide 
                reliable data entry services with attention to detail and quick turnaround times.
              </p> */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm proficient in React development, PHP programming, and modern frontend technologies. 
                I believe in creating scalable, secure, and SEO-friendly solutions that deliver 
                exceptional user experiences while maintaining data accuracy and integrity.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">WordPress Expert</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">PHP Developer</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">React Specialist</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">WooCommerce Expert</span>
                <span className="px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Elementor</span>
                <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">Problem Solver</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">WordPress Expertise</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Custom Theme Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Plugin Development & Customization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    WooCommerce Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    WordPress Security & Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Multisite & Complex Installations
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Accurate Data Processing & Entry
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Database Management & Organization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    React.js & Modern JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    PHP & MySQL Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    RESTful API Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Responsive Web Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
